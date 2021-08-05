<template>
	<v-menu
		transition="slide-y-transition"
		bottom
		offset-y
		max-width="300"
		nudge-bottom="5"
		close-on-click
		close-delay="1"
	>
		<template #activator="{ attrs, on }">
			<div v-if="$helper.getCurrentUser()">
				<v-avatar v-if="$helper.getCurrentProfileImage()"
					size="45"
					v-bind="attrs"
					v-on="on"
				>
					<v-img
						:src="$helper.getCurrentProfileImage()"
					/>
				</v-avatar>
				<v-btn
					v-else
					dark
					fab
					small
					color="deep-purple"
					v-bind="attrs"
					v-on="on"
				>
					<span class="headline">{{ $helper.getCurrentUserInitials() }}</span>
				</v-btn>
			</div>
			<div v-else>
				<v-btn
					v-bind="attrs"
					icon
					color="purple lighten-2"
					v-on="on"
				>
					<v-icon large>
						mdi-apps-box
					</v-icon>
				</v-btn>
			</div>
		</template>
		<v-card
			color="teal lighten-5"
		>
			<v-list
				color="transparent"
				rounded
				dense
			>
				<v-list-item-group
					v-for="(item, i) in items"
					:key="i"
				>
					<v-list-item
						link
						:to="item.to"
					>
						<v-list-item-icon>
							<v-icon v-text="item.icon" />
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title v-text="item.text" />
						</v-list-item-content>
					</v-list-item>
					<v-divider class="my-1" />
				</v-list-item-group>
				<v-list-item
					@click="logout"
				>
					<v-list-item-icon>
						<v-icon v-text="logoutItem.icon" />
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title v-text="logoutItem.text" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script>
export default {
	data: () => ({
		defaultProfileImage: require("@/assets/default_profile_image.png"),
		logoutItem: { text: "Log Out", icon: "mdi-logout", to: "/auth/login", divider: true }
	}),
	computed: {
		items() {
			return [
				{text: "Showcase", icon: "mdi-image-filter-vintage", to: "/"},
				{text: "Feeds", icon: "mdi-home", to: "/home/feeds"},
				{text: "Profile", icon: "mdi-account-circle-outline", to: "/profile/home"},
				{text: "Settings", icon: "mdi-cog-outline", divider: true, to: "/admin/home"},
			]
		},
	},
	methods: {
		logout() {
			this.$helper.clearApplicationData()
			this.$router.push({ name: "LOG IN"})
		}
	}
}
</script>
<style lang="scss">
::v-deep.v-list--rounded .v-list-item, .v-list--rounded .v-list-item::before, .v-list--rounded .v-list-item > .v-ripple__container {
	border-radius: 10px;
}
</style>
<style lang="sass" scoped>
.profile-card
	transition: all .2s ease-in-out
	@media only screen and (max-width: 260px) and (min-width: 190px)
		width: 30px !important
		height: 30px !important
</style>
