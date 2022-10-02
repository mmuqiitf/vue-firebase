import { db } from "../../db";
import { getDocs, query, collectionGroup } from "firebase/firestore";

export default {
	namespaced: true,
	state: {
		items: [],
	},
	mutations: {
		setData(state, exchanges) {
			state.items = exchanges;
		},
	},
	actions: {
		async getData({ commit }) {
			const q = query(collectionGroup(db, "exchanges"));
			const querySnapshot = await getDocs(q);
			const exchanges = [];
			querySnapshot.docs.map((doc) => {
				exchanges.push({ id: doc.id, ...doc.data() });
			});
			commit("setData", exchanges);
		},
	},
};
