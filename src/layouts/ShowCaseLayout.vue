<template>
	<v-card class="overflow-hidden rounded-0">
		<the-snackbar />
		<auth-panel />
		<router-view />
		<home-footer />
		<facebook-chat />
		<scroll-top color="blue darken-3" />
	</v-card>
</template>
<script>
export default {
	name: "ShowCaseLayout",
	components: {
		TheSnackbar: () => import("@/components/utils/TheSnackbar.vue"),
		FacebookChat: () => import("@/components/utils/FacebookChat.vue"),
		AuthPanel: () => import("@/views/showcase/AuthPanel"),
		ScrollTop: () => import("@/components/utils/ScrollTop.vue"),
		HomeFooter: () => import("@/views/home/Footer")
	}
}
</script>
<style lang="scss">
.showcase-blue-bg {
	background-color: #006994 !important;
}
.showcase-blue-color {
	color: #006994 !important;
}
</style>
