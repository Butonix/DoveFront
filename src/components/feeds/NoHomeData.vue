<template>
	<v-card
		rounded="xl"
		class="no-post"
		max-height="300"
	>
		<v-img
			:src="image"
			height="300"
		>
			<template #default>
				<div class="fill-height text-center mx-2 d-flex justify-center align-center">
					<div>
						<div class="main">
							{{ topText }}
						</div>
						<div class="py-1" />
						<div class="sub">
							{{ bottomText }}
						</div>
					</div>
				</div>
			</template>
		</v-img>
	</v-card>
</template>

<script>
export default {
	name: "NoHomeData",
	props: {
		image: {
			type: String,
			default: require("@/assets/start-writing.jpg")
		}
	},
	computed: {
		getKey() {
			if (this.$route.name === "HOME") return "posts"
			else if (this.$route.name === "SACHCHAI NEPAL ARTICLES") return "articles"
			else if (this.$route.name === "SACHCHAI NEPAL MULTIMEDIAS") return "multimedias"
			else if (this.$route.name === "SACHCHAI NEPAL EVENTS") return "events"
			else return "none"
		},
		topText() {
			return `There are not any approved Sachchai ${this.getKey} available right now. Please visit us later.`
		},
		bottomText() {
			return "Contribute to Sachchai Kendra Nepal by sharing your great moments with us."
		}
	}
}
</script>

<style scoped lang="sass">
.no-post
	text-align: center
	.main
		padding: 6px 15px 8px
		border-radius: 20px
		background: white
		font-size: 14px
	.sub
		margin: 0 5px
		padding: 6px 10px 8px
		border-radius: 4px
		background: white
		font-size: 13px

</style>
