<template>
	<div>
		<header-toolbar />
		<div class="py-2" />
		<div class="px-4">
			<v-card v-for="n in 3"
				:key="n"
				class="mt-4"
				rounded="xl"
			>
				<v-card-title>subject</v-card-title>
				<v-card-subtitle class="pl-2">
					<v-chip class="ma-1"
						small
					>
						seen
					</v-chip>
					<v-chip class="ma-1"
						small
					>
						timestamp
					</v-chip>
				</v-card-subtitle>
				<v-divider />
				<v-card-text>
					message
				</v-card-text>
			</v-card>
		</div>
	</div>
</template>
<script>
export default {
	name: "MyFeedbacks",
	components: {
		HeaderToolbar: () => import("@/views/profile/HeaderToolbar")
	}
}
</script>

<style scoped>

</style>
