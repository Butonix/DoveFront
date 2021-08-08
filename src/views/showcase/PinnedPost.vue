<template>
	<v-card flat
		color="transparent" loading="!loading"
	>
		<v-list-item dark>
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
					>mdi-bullseye-arrow</v-icon>
				</v-avatar>
			</span>
		</v-list-item>
		<v-carousel
			:show-arrows="false"
			vertical-delimiters="true"
			height="298"
			class="bottom-round-touch"
		>
			<div v-if="postImages.length > 0">
				<v-carousel-item
					v-for="(item, index) in postImages"
					:key="index + 5 * 7"
					:src="$helper.replaceBackendHost(item.image || item.image_url)"
					transition="fade-transition"
					reverse-transition="fade-transition"
				/>
			</div>
			<div v-else>
				<v-img height="298"
					:src="require('@/assets/pinned_post.jpg')"
				/>
			</div>
		</v-carousel>
	</v-card>
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
		isArticle: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	data: () =>({
		pin: null,
		loading: false,
		postImages: [],
		postVideos: [],
		postVideoUrls: []
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
			this.loading = true
			if (this.post) {
				this.pin = this.post
				if (this.isArticle) {
					this.postImages = []
					if (this.post["cover_image"]) this.postImages.push(this.post["cover_image"])
					if (this.post["images"].length) this.postImages = this.postImages.concat(this.post["images"])
					if (this.post["image_urls"].length) this.postImages = this.postImages.concat(this.post["image_urls"])
				}
				if(!this.post["uploaded_by"] && this.post.created_by) {
					this.pin["uploaded_by"] = this.post.created_by
				}
			}
			this.loading = false
		},
		routeToPostDetail() {
			this.isArticle
				? router.push({name: "SACHCHAI NEPAL ARTICLE", params: { id: this.pin.id }})
				: router.push({name: "SACHCHAI NEPAL MULTIMEDIA", params: { id: this.pin.id }})
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
</style>
