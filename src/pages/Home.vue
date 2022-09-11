<template>
	<div>
		<!-- HERO START -->
		<ExchangeHero></ExchangeHero>
		<!-- HERO END -->
		<!-- POST LIST START -->
		<ExchangeList :exchanges="exchanges"></ExchangeList>
		<!-- POST LIST END -->

		<!-- PAGINATION START -->
		<ExchangePagination></ExchangePagination>
		<!-- PAGINATION END -->
	</div>
</template>

<script>
import ExchangeHero from "../components/ExchangeHero.vue";
import ExchangeList from "../components/ExchangeList.vue";
import ExchangePagination from "../components/ExchangePagination.vue";
export default {
	name: "App",
	components: {
		ExchangeHero,
		ExchangeList,
		ExchangePagination,
	},

	computed: {
		exchanges() {
			return this.$store.state.exchange.items;
		},
	},
	created() {
		this.$store.dispatch("exchange/getData");
	},
};
</script>
<style lang="scss">
@import "../assets/styles/variables.scss";
@import "~bulma/bulma.sass";
@import "../assets/styles/main.scss";
</style>
