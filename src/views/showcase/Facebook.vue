<template>
	<div class="sidebar-social-media">
		<v-card :height="height"
			class="overflow-hidden"
			dark rounded="xl"
		>
			<div class="fb-page"
				data-href="https://www.facebook.com/Sachhaikendra-Nepal-2186630364921086" data-tabs="timeline,messages"
				:data-height="height"
				data-width="500"
				data-small-header="false" data-adapt-container-width="true"
				data-hide-cover="false" data-show-facepile="true"
				data-lazy="true"
			>
				<blockquote cite="https://www.facebook.com/Sachhaikendra-Nepal-2186630364921086"
					class="fb-xfbml-parse-ignore"
				>
					<a href="https://www.facebook.com/Sachhaikendra-Nepal-2186630364921086"
						class="pa-7"
					>Sachhai Kendra Nepal</a>
				</blockquote>
			</div>
		</v-card>
	</div>
</template>
<script>
export default {
	props: {
		height: {
			type: [String, Number],
			required: true
		}
	},
};
</script>

<style lang="sass" scoped>
.sidebar-social-media
	.facebook-container
		margin-top: 5px
		display: block
		height: 30vh
		@media only screen and (max-width: 600px)
			padding: 0 20px
		@media only screen and (max-width: 200px)
			display: none

</style>
