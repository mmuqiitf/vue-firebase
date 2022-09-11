<template>
	<header class="header">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a
						class="navbar-item has-text-white is-size-2 has-text-weight-bold"
						href="#"
					>
						{{ brandName }}
					</a>
					<span
						role="button"
						tabindex="0"
						class="navbar-burger burger has-text-white"
						data-target="navbar-menu"
					>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>
				<div id="navbar-menu" class="navbar-menu">
					<div class="navbar-end">
						<!-- Loop through the navigation items -->
						<a
							class="navbar-item has-text-white"
							v-for="(item, index) in menuItems"
							:key="index"
							:href="item.link"
						>
							{{ item.text }}
						</a>
						<!-- End of loop -->
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "ExchangeNavbar",
	methods: {
		toggleNavbar() {
			this.navbarOpen = !this.navbarOpen;
		},
	},
	props: {
		brandName: {
			type: String,
			default: "Exchangario",
			required: true,
		},
		menuItems: {
			type: Array,
			default: () => [
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
		},
	},
};
</script>

<style scoped></style>
