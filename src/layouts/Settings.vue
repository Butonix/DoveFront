<template>
	<div id="settings">
		<v-app-bar
			app
			dark
			color="admin-nav"
			height="60"
		>
			<v-app-bar-nav-icon @click="toggleSettingsDrawer">
				<v-icon v-if="mini"
					size="20"
				>
					mdi-menu
				</v-icon>
				<v-icon v-else
					size="20"
				>
					mdi-menu-open
				</v-icon>
			</v-app-bar-nav-icon>
			<v-toolbar-title class="setting-route-name">
				{{ $route.name }}
			</v-toolbar-title>
			<v-spacer />
			<div class="px-1" />
			<profile-dropdown />
		</v-app-bar>
		<!-- eslint-disable-next-line vue/no-deprecated-v-bind-sync -->
		<v-navigation-drawer v-model="adminDrawer" :mini-variant.sync="mini"
			app dark
			:permanent="$vuetify.breakpoint.mdAndUp"
			:temporary="!$vuetify.breakpoint.mdAndUp"
			color="admin-nav"
		>
			<admin-sidebar @toggle="mini = !mini" />
		</v-navigation-drawer>
		<v-main>
			<v-container fluid
				class="pa-0"
			>
				<v-row no-gutters>
					<v-col cols="12">
						<v-card
							flat tile
							max-width="1200"
							min-height="88vh"
							class="mx-auto px-4"
						>
							<the-snackbar />
							<div :class="$vuetify.breakpoint.smAndUp ? 'py-4': 'py-1'" />
							<transition name="setting">
								<router-view />
							</transition>
							<scroll-top
								class="setting-scroll-top"
								color="#12223b"
							/>
							<div class="py-2" />
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
		<small-footer />
	</div>
</template>
<script>






export default {
	name: "SettingsLayout",
	components: {
		TheSnackbar: () => import("@/components/utils/TheSnackbar.vue"),
		SmallFooter: () => import("@/components/utils/SmallFooter.vue"),
		AdminSidebar: () => import("@/views/settings/AdminSidebar"),
		ProfileDropdown: () => import("@/views/home/ProfileDropdown"),
		ScrollTop: () => import("@/components/utils/ScrollTop.vue")
	},
	data() {
		return {
			adminDrawer: false,
			mini: true,
		}
	},
	methods: {
		toggleSettingsDrawer() {
			if (this.$vuetify.breakpoint.mdAndUp) this.mini = !this.mini
			else {
				this.adminDrawer = !this.adminDrawer
			}
		}
	}
}
</script>
<style lang="sass" scoped>
.setting-enter-active, .setting-leave-active
	transition: opacity .4s ease-in-out, transform .4s ease
.setting-enter-active
	transition-delay: .3s
.setting-enter, .setting-leave-to
	opacity: 0
.setting-enter-to, .setting-leave
	opacity: 1
.setting-nav-action
	transition: all .4s
	visibility: visible
	opacity: 1
	@media only screen and (min-width: 1259px)
		visibility: hidden
		opacity: 0
		overflow: hidden
		height: 0 !important
		max-width: 0 !important
		width: 0 !important
</style>
<style lang="scss">
.profile-av-nav {
	border: 4px solid aliceblue;
	background: aliceblue;
	margin-top: -50px
}
.table-title {
	font-size: 1rem;
	font-weight: 500;
}
.table-avatar {
	border: 2px solid #2d9494;
	background-color: #2d9494;
}
.admin-nav {
	background-image: radial-gradient(
			circle 590px at 8.2% 13.8%,
			rgba(18,35,60,1) 0%,
			#181818 90%
	);
}
.setting-route-name {
	font-size: 1rem; font-weight: 500;
}
.setting-scroll-top {
	z-index: 55;
}
</style>
