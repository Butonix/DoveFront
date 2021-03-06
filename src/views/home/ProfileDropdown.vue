<template>
	<v-menu
		transition="slide-y-transition"
		rounded="xl"
		absolute
		close-on-click
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
					color="grey darken-2"
					v-on="on"
				>
					<v-icon size="30">
						mdi-apps-box
					</v-icon>
				</v-btn>
			</div>
		</template>
		<v-card
			color="#f5f0f6"
			max-width="600"
		>
			<v-row class="ma-0 pa-2"
				justify="space-around"
				align="center"
			>
				<v-btn
					v-for="(item, i) in items"
					:key="i"
					rounded
					:to="item.to"
					height="90"
					width="90"
					color="white"
					class="ma-2 app-item elevation-0 thin-border"
					:class="{
						'app-item-disabled': appItemActive[item.text]
					}"
					:disabled="appItemActive[item.text]"
				>
					<div>
						<div class="text-center pt-4">
							<v-icon v-text="item.icon" />
						</div>
						<div class="item-title">
							{{ item.text }}
						</div>
					</div>
				</v-btn>
				<v-btn
					v-if="$helper.isUserLoggedIn()"
					rounded color="white"
					height="90" width="90"
					class="ma-2 app-item elevation-0 thin-border"
					@click="logout"
				>
					<div>
						<div class="text-center pt-4">
							<v-icon
								v-text="logoutItem.icon"
							/>
						</div>
						<div class="item-title">
							{{ logoutItem.text }}
						</div>
					</div>
				</v-btn>
				<v-btn
					v-else
					height="90" width="90"
					rounded color="white"
					:to="loginItem.to"
					class="ma-2 app-item elevation-0 thin-border"
				>
					<div>
						<div class="text-center pt-4">
							<v-icon v-text="loginItem.icon" />
						</div>
						<div class="item-title">
							{{ loginItem.text }}
						</div>
					</div>
				</v-btn>
			</v-row>
		</v-card>
	</v-menu>
</template>

<script>
export default {
	data: () => ({
		defaultProfileImage: require("@/assets/default_profile_image.png"),
		logoutItem: { text: "Log Out", icon: "mdi-logout", to: "/auth/login", divider: true },
		loginItem: { text: "Log In", icon: "mdi-login", to: "/auth/login", divider: true }
	}),
	computed: {
		appItemActive() {
			return {
				Showcase: (this.$route.name === "SACHCHAI SHOWCASE"),
				Feeds: (this.$route.fullPath.includes("/home/")),
				Profile: (this.$route.fullPath.includes("/profile/")),
				Settings: (this.$route.fullPath.includes("/admin/")),
			}
		},
		items() {
			if (this.$helper.isCurrentUserSuperAdmin()) {
				return [
					{text: "Showcase", icon: "mdi-image-filter-vintage", to: "/"},
					{text: "Feeds", icon: "mdi-home", to: "/home/feeds"},
					{text: "Profile", icon: "mdi-account-circle-outline", to: "/profile/home"},
					{text: "Settings", icon: "mdi-cog-outline", divider: true, to: "/admin/dashboard"},
				]
			} else if(this.$helper.isUserLoggedIn()) {
				return [
					{text: "Showcase", icon: "mdi-image-filter-vintage", to: "/"},
					{text: "Feeds", icon: "mdi-home", to: "/home/feeds"},
					{text: "Profile", icon: "mdi-account-circle-outline", to: "/profile/home"},
				]
			} else {
				return [
					{text: "Showcase", icon: "mdi-image-filter-vintage", to: "/"},
					{text: "Feeds", icon: "mdi-home", to: "/home/feeds"},
				]
			}
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
<style lang="scss">
.item-title {
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	text-transform: uppercase;
	padding: 10px 0;
}
.app-item-disabled {
	background-color: green !important;
}
.thin-border {
	border: thin solid rgba(0, 0, 0, 0.12) !important;
}
</style>
