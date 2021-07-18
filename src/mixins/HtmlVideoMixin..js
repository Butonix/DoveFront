const HtmlVideoMixin = {
	computed: {
		player() {
			return this.$refs.youtube.yt
		}
	},
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		isElementOnViewPort(element) {
			if (!element) return false
			const bounding = element.getBoundingClientRect()
			return (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
		},
		async handleScroll() {
			const videos = document.querySelectorAll("video")
			videos.forEach(video => {
				const isVideoInViewPort = this.isElementOnViewPort(video)
				if (!isVideoInViewPort) {
					if (!video.paused) {
						video.pause()
					}
				}
			})
			if (Array.isArray(this.$refs.yt)) {
				await this.$refs.yt.forEach(async ref => {
					const isPlaying = await ref.player.getPlayerState()
					const isYTInViewPort = this.isElementOnViewPort(ref.$parent.$el)
					if (!isYTInViewPort) {
						if (isPlaying === 1) {
							await ref.player.pauseVideo()
						}
					}
				})
			}
		},
		async onPlay(e) {
			await this.pauseAllYt()
			document.querySelectorAll("video")
				.forEach(video => {
					if (video !== e.currentTarget) {
						if (!video.paused) {
							video.pause()
						}
					}
				})
		},
		pauseAllPlayingHTMLVideos() {
			document.querySelectorAll("video")
				.forEach(video => {
					if (!video.paused) {
						video.pause()
					}
				})
		},
		async playing() {
			this.pauseAllPlayingHTMLVideos()
			if (Array.isArray(this.$refs.yt)) {
				await this.$refs.yt.forEach(async ref => {
					if (ref.player.get) {
						await ref.player.pauseVideo()
					}
				})
			}
		},
		async pauseAllYt() {
			if (Array.isArray(this.$refs.yt)) {
				await this.$refs.yt.forEach(async ref => {
					const state = await ref.player.getPlayerState()
					if (state === 1) {
						ref.player.pauseVideo()
					}
				})
			}
		},
	},
}

export default HtmlVideoMixin
