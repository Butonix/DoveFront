<template>
	<v-card
		max-width="350"
		class="my-2 overflow-hidden"
		flat
	>
		<div class="fb-group-container">
			<div class="fb-group"
				data-href="https://www.facebook.com/groups/sachchaikendranepal" data-width="350"
				data-show-social-context="true" data-show-metadata="false"
			>
				<blockquote cite="https://www.facebook.com/groups/sachchaikendranepal"
					class="fb-xfbml-parse-ignore"
				>
					Sachchai Kendra Nepal
				</blockquote>
			</div>
		</div>
	</v-card>
</template>

<script>
export default {
	name: "FacebookGroup"
}
</script>

<style scoped lang="scss">
.fb-group-container {
	position: relative;
	overflow: hidden;
	width: 100%;
	.fb-group {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
}

</style>
