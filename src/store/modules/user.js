import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
	namespaced: true,
	state: {
		register: {
			isProcessing: false,
			error: "",
		},
	},
	mutations: {
		setRegisterIsProcessing(state, isProcessing) {
			state.register.isProcessing = isProcessing;
		},
		setRegisterError(state, error) {
			state.register.error = error;
		},
	},
	actions: {
		async register({ commit, dispatch }, { email, password }) {
			commit("setRegisterIsProcessing", true);
			commit("setRegisterError", "");
			const auth = getAuth();
			try {
				const userCredentials = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				dispatch("toast/success", "User created successfully", { root: true });
				return userCredentials.user;
			} catch (error) {
				commit("setRegisterError", error.message);
				dispatch("toast/error", error.message, { root: true });
			} finally {
				commit("setRegisterIsProcessing", false);
			}
		},
	},
};
