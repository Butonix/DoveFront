<template>
	<v-footer
		padless
		:color="color"
	>
		<v-col
			class="text-center footer-bottom"
			cols="12"
		>
			©️ {{ new Date().getFullYear() }} — <strong>Ishworiya Marg Bhajan Mandal Sachchai Kendra Nepal</strong>
		</v-col>
	</v-footer>
</template>

<script>
export default {
	name: "SmallFooter",
	props: {
		color: {
			type: String,
			default: null
		}
	}
}
</script>

<style scoped>
.footer-bottom {
	font-size: 12px
}
</style>
