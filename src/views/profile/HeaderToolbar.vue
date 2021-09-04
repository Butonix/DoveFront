<template>
	<v-toolbar
		max-width="1000"
		color="transparent"
		class="mx-auto"
		height="55"
		rounded="xl"
	>
		<v-app-bar-nav-icon>
			<v-avatar
				size="36"
				color="grey lighten-2"
				class="elevation-4"
			>
				<v-icon
					color="primary"
				>
					mdi-bird
				</v-icon>
			</v-avatar>
		</v-app-bar-nav-icon>
		<v-toolbar-title class="toolbar-title">
			{{ $route.name }}
		</v-toolbar-title>
		<v-spacer />
	</v-toolbar>
</template>

<script>
export default {
	name: "HeaderToolbar"
}
</script>

<style scoped>
.toolbar-title {
	color: darkslategrey;
}
</style>
