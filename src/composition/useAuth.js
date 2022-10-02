import { useStore } from "vuex";
import { computed } from "vue";

export default function useAuth() {
	const store = useStore();

	const error = computed(() => store.state.user.auth.error);
	const isProcessing = computed(() => store.state.user.auth.isProcessing);
	const isAuthenticated = computed(() => store.getters["user/isAuthenticated"]);
	const user = computed(() => store.state.user.data);

	return { error, isProcessing, isAuthenticated, user };
}
