<template>
	<v-card
		dark rounded="lg"
		:height="height"
		:max-width="maxWidth"
	>
		<v-dialog v-model="fullscreen"
			fullscreen
		>
			<v-card height="100%"
				dark
				tile
			>
				<v-img
					contain
					height="100%"
					:src="$helper.replaceBackendHost(src)"
				>
					<v-btn
						fab dark
						x-small class="ma-4"
						color="grey darken-4"
						@click="fullscreen=false"
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-img>
			</v-card>
		</v-dialog>
		<v-img
			class="card-image"
			:src="$helper.replaceBackendHost(src)"
			:height="height"
			:contain="contain"
			position="relative"
		>
			<template #default>
				<v-btn icon
					color="white"
					class="action-btn ma-1"
					@click="fullscreen=true"
				>
					<v-icon>mdi-fullscreen</v-icon>
				</v-btn>
				<slot />
			</template>
		</v-img>
	</v-card>
</template>

<script>
export default {
	name: "CardImage",
	props: {
		src: {
			required: true,
			type: String,
		},
		height: {
			type: String,
			default: ""
		},
		maxWidth: {
			type: String,
			default: "100%"
		},
		contain: {
			type: Boolean,
			default: true
		}
	},
	data: () => ({
		fullscreen: false
	})
}
</script>

<style lang="scss">
.card-image {
	border-radius: 4px;
	transition: visibility ease 1s;
	.action-btn {
		visibility: hidden;
	}
}
.card-image:hover {
	.action-btn {
		visibility: visible;
	}
}
</style>
