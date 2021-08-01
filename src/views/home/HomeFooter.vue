<template>
	<v-footer padless>
		<v-card flat
			tile height="40"
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
				<a target="_blank"
					href="https://www.youtube.com/channel/UCJciQdMbWCr-hPmVWu9HVyw"
					style="text-decoration: none"
				>
					<v-btn icon
						small
					>
						<v-icon color="red"
							size="20"
						>
							mdi-youtube
						</v-icon>
					</v-btn>
				</a>
				<a target="_blank"
					href="https://www.facebook.com/groups/2553480628235742/"
					style="text-decoration: none"
				>
					<v-btn icon
						small
					>
						<v-icon color="blue"
							size="20"
						>
							mdi-facebook
						</v-icon>
					</v-btn>
				</a>
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
