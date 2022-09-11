<template>
	<div>
		<!-- NAVBAR -->
		<ExchangeNavbar
			:brandName="brandName"
			:menuItems="menuItems"
		></ExchangeNavbar>
		<!-- NAVBAR END -->

		<router-view />
	</div>
</template>

<script>
import ExchangeNavbar from "./components/ExchangeNavbar.vue";
export default {
	name: "App",
	components: {
		ExchangeNavbar,
	},
	data() {
		return {
			brandName: "Exchangario",
			menuItems: [
				{
					text: "Home",
					link: "/",
				},
				{
					text: "About",
					link: "/about",
				},
				{
					text: "FAQ",
					link: "/faq",
				},
				{
					text: "Login",
					link: "/login",
				},
				{
					text: "Register",
					link: "/register",
				},
			],
			navbarOpen: false,
		};
	},
};
</script>
