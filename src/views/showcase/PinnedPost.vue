<template>
	<div
		class="pin-post-card pa-6"
	>
		<v-card
			dark
			:loading="loading"
			max-width="300"
			width="300"
			rounded="xl"
			class="pin-post"
		>
			<v-list-item dark
				class="header-item"
			>
				<v-list-item-avatar :color="$constants.pickBackgroundColor()"
					class="d-flex justify-center align-center"
				>
					{{ $helper.getUsernameInitials(pin.uploaded_by) }}
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title
						class="pin-item-title cursor"
						@click="routeToPostDetail()"
					>
						{{ post.title }}
					</v-list-item-title>
					<v-list-item-subtitle class="subtitle">
						by&nbsp;{{ (pin.uploaded_by.full_name) ? pin.uploaded_by.full_name : pin.uploaded_by.username }}
					</v-list-item-subtitle>
				</v-list-item-content>
				<span>
					<v-avatar size="30"
						color="grey lighten-2"
						class="elevation-3"
					>
						<v-icon v-ripple
							color="grey darken-4"
						>
							mdi-bullseye-arrow
						</v-icon>
					</v-avatar>
				</span>
			</v-list-item>
			<v-img
				height="298"
				:src="$helper.replaceBackendHost(pin.cover_image.image)"
				transition="fade-transition"
				reverse-transition="fade-transition"
				class="relative"
			>
				<v-card
					width="100%"
					tile flat
					class="pa-2 pin-post-title"
					color="#060c28cf"
				>
					<p
						class="grey--text ma-0"
					>
						{{ post.title }}
					</p>
				</v-card>
			</v-img>
		</v-card>
	</div>
</template>
<script>
import router from "@/router"

export  default {
	name: "PinnedPostComponent",
	props: {
		post: {
			type: Object,
			required: true
		},
	},
	data: () =>({
		pin: null,
		loading: true,
	}),
	computed: {
		userHasProfileImage() {
			if (!this.pin) return false
			if (!this.pin.uploaded_by) return false
			return this.pin["uploaded_by"]["active_profile_image"] !== null
		}
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			this.pin = this.post
			if(!this.post["uploaded_by"] && this.post.created_by) {
				this.pin["uploaded_by"] = this.post.created_by
			}
			this.loading = false
		},
		routeToPostDetail() {
			router.push({name: "SACHCHAI NEPAL ARTICLE", params: { id: this.pin.id }})
		},
	}
}
</script>
<style lang="sass" scoped>
.cursor
	cursor: pointer
#parallax-actions
	cursor: pointer
.bottom-round-touch
	border-radius: 0 0 4px 4px
.pin-post-card
	animation-duration: .3s
	animation-name: pinBoxReverse
	.pin-post
		border: 2px solid white!important
		.header-item
			border-bottom: 1px solid white

.pin-post-card:hover
	animation-duration: .3s
	animation-name: pinBox
	animation-fill-mode: forwards
@keyframes pinBox
	from
		transform: scale(1)
	to
		transform: scale(1.1)
@keyframes pinBoxReverse
	from
		transform: scale(1.1)
	to
		transform: scale(1)
.pin-post-title
	position: absolute
	bottom: 0
	border-top: 1px solid white
</style>
