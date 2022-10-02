import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../db";

export default {
	namespaced: true,
	state: {
		data: null,
		auth: {
			isProcessing: false,
			error: "",
		},
	},
	getters: {
		isAuthenticated: (state) => !!state.data,
	},
	mutations: {
		setAuthIsProcessing(state, isProcessing) {
			state.auth.isProcessing = isProcessing;
		},
		setAuthError(state, error) {
			state.auth.error = error;
		},
		setUser(state, user) {
			state.data = user;
		},
	},
	actions: {
		onAuthChange({ dispatch }) {
			onAuthStateChanged(getAuth(), async (user) => {
				if (user) {
					dispatch("getUserProfile", user);
				} else {
					console.log("Logged out");
				}
			});
		},
		async getUserProfile({ commit }, user) {
			const userRef = doc(db, "users", user.uid);
			const userSnap = await getDoc(userRef);
			const userProfile = userSnap.data();
			const userWithProfile = {
				id: user.uid,
				email: user.email,
				...userProfile,
			};
			commit("setUser", userWithProfile);
		},
		async register({ commit, dispatch }, { email, password, username }) {
			commit("setAuthIsProcessing", true);
			commit("setAuthError", "");
			const auth = getAuth();
			try {
				const { user } = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				await dispatch("createUserProfile", {
					id: user.uid,
					username,
					avatar:
						"https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png",
					credit: 0,
					exchanges: [],
				});

				dispatch("toast/success", "User created successfully", { root: true });
			} catch (error) {
				commit("setAuthError", error.message);
				dispatch("toast/error", error.message, { root: true });
			} finally {
				commit("setAuthIsProcessing", false);
			}
		},
		async createUserProfile(_, { id, ...profile }) {
			setDoc(doc(db, "users", id), profile);
		},
	},
};
