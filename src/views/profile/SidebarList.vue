<template>
	<v-list class="pa-0"
		rounded
	>
		<v-list-item-group>
			<v-list-item
				disabled
				class="px-2 mb-0"
			>
				<v-list-item-avatar v-if="$helper.getCurrentProfileImage()">
					<v-img
						:src="$helper.getCurrentProfileImage()"
					/>
				</v-list-item-avatar>
				<v-list-item-avatar
					v-else
					color="blue"
					class="ma-0 pa-0 d-flex justify-center"
				>
					<span class="headline white--text">
						{{ $helper.getCurrentUserInitials() }}
					</span>
				</v-list-item-avatar>
				<div class="px-2" />
				<v-list-item-title>
					<h4>{{ $helper.getCurrentUser().username }}</h4>
				</v-list-item-title>
				<v-list-item-action v-if="!$vuetify.breakpoint.mdAndUp">
					<v-btn icon
						x-small
						@click="$emit('toggle')"
					>
						<v-icon>mdi-chevron-left</v-icon>
					</v-btn>
				</v-list-item-action>
			</v-list-item>
			<v-divider class="my-1" />
			<div>
				<v-list-item
					v-for="item in items"
					:key="item.text"
					link
					:to="item.to"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title class="nav-link">
							{{ item.text }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</div>
		</v-list-item-group>
	</v-list>
</template>

<script>
export default {
	name: "SidebarList",
	emits: ["toggle"],
	data: () => ({
		items: [
			{text: "About Me", icon: "mdi-information-variant", to: "/profile/home"},
			{text: "Edit Profile", icon: "mdi-pencil", to: "/profile/edit-detail"},
			{text: "Password", icon: "mdi-lock-reset", to: "/profile/change-password"},
			{text: "Location", icon: "mdi-map-marker", to: "/profile/location"},
			{text: "Branches", icon: "mdi-city", to: "/profile/branch"},
			{text: "Membership", icon: "mdi-camera-front-variant", to: "/profile/membership"},
			{text: "Feedbacks", icon: "mdi-surround-sound", to: "/profile/feedback"},
		]
	})
}
</script>

<style scoped>
.nav-link {
	font-size: .76rem;
	font-weight: 500;
	text-transform: uppercase;
}
</style>
