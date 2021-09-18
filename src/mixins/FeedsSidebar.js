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
				{title: "Satsang", to: "satsang"},
				{title: "Bhajans", to: "bhajan"},
				{title: "Prayers", to: "prayer"},
				{title: "Bachans", to: "bachan"},
				{title: "Testimonials", to: "testimonial"}
			]
		}
	},
}

export default FeedsSidebar
