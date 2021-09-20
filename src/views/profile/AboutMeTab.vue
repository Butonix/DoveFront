<template>
	<div>
		<profile-row />
		<header-toolbar />
		<my-personal-info class="ma-2" />
	</div>
</template>
<script>

export default {
	name: "ProfileAboutTabView",
	components: {
		ProfileRow: () => import("@/views/profile/ProfileRow"),
		HeaderToolbar: () => import("@/views/profile/HeaderToolbar"),
		MyPersonalInfo: () => import("@/views/profile/MyPersonalInfo"),
	}
}
</script>
