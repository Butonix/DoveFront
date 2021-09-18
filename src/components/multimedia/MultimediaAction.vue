<template>
	<v-card-actions class="pa-2 pt-0 flex-wrap justify-space-between">
		<v-btn
			v-if="$helper.isCurrentUserSuperAdmin()"
			:icon="ifScreenWidthIsLessThanSmall"
			:small="!ifScreenWidthIsLessThanSmall"
			height="45"
			class="ma-1"
			depressed
			color="#953b93"
			dark rounded
			@click="$emit('edit')"
		>
			<v-icon>
				mdi-pencil
			</v-icon>
		</v-btn>
		<v-btn depressed
			class="ma-1"
			:icon="ifScreenWidthIsLessThanSmall"
			:small="!ifScreenWidthIsLessThanSmall"
			height="45" rounded
		>
			<v-icon>
				mdi-heart-outline
			</v-icon>
		</v-btn>
		<v-btn depressed
			class="ma-1"
			:icon="ifScreenWidthIsLessThanSmall"
			:small="!ifScreenWidthIsLessThanSmall"
			height="45" rounded
		>
			<v-icon>
				mdi-comment-outline
			</v-icon>
		</v-btn>
		<v-btn depressed
			class="ma-1"
			:icon="ifScreenWidthIsLessThanSmall"
			:small="!ifScreenWidthIsLessThanSmall"
			height="45" rounded
		>
			<v-icon>
				mdi-share
			</v-icon>
		</v-btn>
		<v-spacer />
		<v-btn depressed
			class="ma-1"
			:icon="ifScreenWidthIsLessThanSmall"
			:small="!ifScreenWidthIsLessThanSmall"
			height="45" rounded
		>
			<v-icon>
				mdi-bookmark-outline
			</v-icon>
		</v-btn>
	</v-card-actions>
</template>

<script>
export default {
	name: "MultimediaAction",
	props: {},
	emits: ["edit"],
	data: () => ({}),
	computed: {
		ifScreenWidthIsLessThanSmall() {
			return this.$vuetify.breakpoint.width < 500
		}
	},
	methods: {}
}
</script>

<style scoped>

</style>
