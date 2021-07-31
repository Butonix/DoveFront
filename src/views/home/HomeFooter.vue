<template>
	<v-footer padless>
		<v-card flat
			tile height="50"
			width="100%"
			style="border-top: 2px solid #dc9ed7;"
			class="d-flex justify-space-between align-center"
		>
			<div class="pl-2 text-uppercase">
				<v-icon small>
					mdi-copyright
				</v-icon>
				<div class="px-1">
					2021 Sachchai Kendra Nepal
				</div>
			</div>
			<div class="pr-2">
				<v-icon color="red">
					mdi-youtube
				</v-icon>
				<v-icon color="blue">
					mdi-facebook
				</v-icon>
			</div>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	name: "HomeSimpleFooter",
}
</script>

<style scoped>
.text-uppercase {
	font-size: 12px;
	display: flex;
	align-items: center;
	color: #929292;
}
</style>
