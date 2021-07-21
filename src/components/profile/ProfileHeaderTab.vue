<template>
	<v-card
		light
		color="transparent"
		class="elevation-12 top-tab-wrapper mx-2 overflow-hidden"
		height="55"
	>
		<v-fade-transition>
			<v-tabs
				v-if="screenWidth > 610"
				height="55"
				background-color="transparent"
				centered
				icons-and-text
				slider-size="3"
				active-class="profile-active-tab-btn"
				slider-color="white"
			>
				<v-tab
					v-for="item in profileTabItems"
					:key="item.text"
					:to="item.to"
				>
					<v-icon size="24">
						{{ item.icon }}
					</v-icon>
				</v-tab>
			</v-tabs>
			<div v-else
				class="d-flex fill-height justify-space-around align-center flex-wrap px-1"
			>
				<v-btn v-for="iconButton in profileTabItems"
					:key="iconButton.to"
					icon
					active-class="profile-active-tab-btn"
					:to="iconButton.to"
					:small="screenWidth < 450 && screenWidth > 370"
					:x-small="screenWidth < 370"
				>
					<v-icon>{{ iconButton.icon }}</v-icon>
				</v-btn>
			</div>
		</v-fade-transition>
	</v-card>
</template>

<script>
export default {
	name: "ProfileHeaderTab",
	props: {
		showArrows: {
			type: Boolean,
			default: true
		}
	},
	data: () => ({
		profileTabItems: [
			{icon: "mdi-information-variant", text: "About", to: "/profile/home"},
			{icon: "mdi-image", text: "Photos", to: "/profile/photo"},
			{icon: "mdi-camcorder", text: "Multimedia", to: "/profile/multimedia"},
			{icon: "mdi-calendar", text: "Events", to: "/profile/event"}
		],
	}),
	computed:{
		screenWidth() {
			return this.$vuetify.breakpoint.width
		}
	}
}
</script>

<style scoped lang="sass">
.profile-active-tab-btn
	color: white !important
</style>
