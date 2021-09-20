<template>
	<v-card-actions class="pa-2 pt-0 flex-wrap justify-space-between">
		<v-btn
			v-if="$helper.isCurrentUserSuperAdmin()"
			fab
			small
			class="ma-1"
			depressed
			color="#953b93"
			dark
			@click="$emit('edit')"
		>
			<v-icon size="18">
				mdi-pencil
			</v-icon>
		</v-btn>
		<v-btn depressed
			class="ma-1"
			fab
			small
		>
			<v-icon size="18">
				mdi-heart-outline
			</v-icon>
		</v-btn>
		<v-btn depressed
			class="ma-1"
			fab
			small
		>
			<v-icon size="18">
				mdi-comment-outline
			</v-icon>
		</v-btn>
		<v-btn depressed
			class="ma-1"
			fab
			small
		>
			<v-icon size="18">
				mdi-share
			</v-icon>
		</v-btn>
		<v-spacer />
		<v-btn depressed
			class="ma-1"
			fab
			small
		>
			<v-icon size="18">
				mdi-bookmark-outline
			</v-icon>
		</v-btn>
	</v-card-actions>
</template>

<script>
export default {
	name: "MultimediaAction",
	emits: ["edit"],
}
</script>

<style scoped>

</style>
