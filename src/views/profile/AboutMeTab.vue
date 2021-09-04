<template>
	<div>
		<profile-row />
		<header-toolbar />

		<my-personal-info class="ma-2" />
	</div>
</template>
<script>
import ProfileRow from "@/views/profile/ProfileRow";
import HeaderToolbar from "@/views/profile/HeaderToolbar";
export default {
	name: "ProfileAboutTabView",
	components: {
		ProfileRow,
		HeaderToolbar,
		MyPersonalInfo: () => import("@/views/profile/MyPersonalInfo"),
	}
}
</script>
