const Snack = {
	methods: {
		async openSnack(text, color = "error", timeout = 3000) {
			await this.$store.dispatch("snack/setSnackState", true)
			await this.$store.dispatch("snack/setSnackTimeout", timeout)
			await this.$store.dispatch("snack/setSnackColor", color)
			await this.$store.dispatch("snack/setSnackText", text)
		},
	}
}

export default Snack
