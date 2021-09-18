<template>
	<div>
		<v-card
			v-for="n in 3"
			:key="n"
			rounded="xl"
			class="my-4"
		>
			<v-skeleton-loader
				type="list-item-avatar"
				class="py-2"
			/>
			<v-skeleton-loader type="divider" />
			<v-card-text class="pa-2">
				<v-card
					rounded="xl"
				>
					<v-skeleton-loader type="image" />
				</v-card>
			</v-card-text>
			<v-card-actions class="pa-1">
				<v-skeleton-loader type="avatar"
					class="ma-1"
				/>
				<v-skeleton-loader type="avatar"
					class="ma-1"
				/>
				<v-skeleton-loader type="avatar"
					class="ma-1"
				/>
				<v-spacer />
				<v-skeleton-loader type="avatar"
					class="ma-1"
				/>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "MultimediaListSkeleton"
}
</script>

<style scoped>

</style>
