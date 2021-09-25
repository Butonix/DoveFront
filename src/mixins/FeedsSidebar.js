const FeedsSidebar = {
	data: () => ({
		selectedSideNavItem: ""
	}),

	computed: {
		sideNavActive() {
			return {
				All: (this.$route.query.type === undefined),
				Satsang: (this.$route.query.type === "satsang"),
				Bhajans: (this.$route.query.type === "bhajan"),
				Prayers: (this.$route.query.type === "prayer"),
				Bachans: (this.$route.query.type === "bachan"),
				Testimonials: (this.$route.query.type === "testimonial")
			}
		},
		homeSideNavItems() {
			return [
				{title: "Satsang", to: "satsang", icon: "mdi-human-female-dance"},
				{title: "Bhajans", to: "bhajan", icon: "mdi-music-circle"},
				{title: "Prayers", to: "prayer", icon: "mdi-hands-pray"},
				{title: "Bachans", to: "bachan", icon: "mdi-comment-account"},
				{title: "Testimonials", to: "testimonial", icon: "mdi-human-handsup"}
			]
		}
	},
}

export default FeedsSidebar
