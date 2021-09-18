<template>
	<v-card class="overflow-hidden rounded-0">
		<the-snackbar />
		<auth-panel />
		<router-view />
		<facebook-chat />
		<scroll-top color="blue darken-3" />
		<to-feeds-page-btn />
	</v-card>
</template>
<script>
import ToFeedsPageBtn from "@/components/button/ToFeedsPageBtn.vue";
export default {
	name: "ShowCaseLayout",
	components: {
		ToFeedsPageBtn,
		TheSnackbar: () => import("@/components/utils/TheSnackbar.vue"),
		FacebookChat: () => import("@/components/utils/FacebookChat.vue"),
		AuthPanel: () => import("@/views/showcase/AuthPanel"),
		ScrollTop: () => import("@/components/utils/ScrollTop.vue"),
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
