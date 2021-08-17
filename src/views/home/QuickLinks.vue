<template>
	<v-list class="px-2 pt-0 rounded">
		<v-list-item two-line>
			<v-list-item-avatar color="grey">
				<v-img v-if="$helper.getCurrentProfileImage()"
					:src="$helper.getCurrentProfileImage()"
				/>
				<span v-else
					class="white--text"
				>{{ getFullName[0] }}</span>
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title class="full-name">
					<div v-text="getFullName" />
				</v-list-item-title>
				<v-list-item-subtitle
					v-if="$helper.isUserLoggedIn()"
					class="d-flex justify-start align-center"
				>
					<v-icon small
						color="orange"
					>
						mdi-account-group
					</v-icon>
					<v-icon small
						color="grey"
						class="ml-1"
					>
						mdi-account-cog
					</v-icon>
				</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
		<v-list-group
			v-for="item in items"
			:key="item.title"
			v-model="item.active"
			active-class="black--text"
			no-action
			append-icon="mdi-chevron-down"
		>
			<template #prependIcon>
				<v-icon color="grey darken-2">
					{{ item.action }}
				</v-icon>
			</template>
			<template #activator>
				<v-list-item-content>
					<v-list-item-title
						class="link-title"
						v-text="item.title.toUpperCase()"
					/>
				</v-list-item-content>
			</template>

			<v-list-item-group
				v-if="item.title === 'Sachchai'"
			>
				<v-list-item
					v-for="child in item.items"
					:key="child.title"
				>
					<v-list-item-icon>
						<v-icon color="gery-darken-1">
							{{ child.icon }}
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title class="link-subtitle">
							<a :href="child.to"
								target="_blank"
								class="link"
							>{{ child.title.toUpperCase() }}</a>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>

			<v-list-item
				v-for="child in item.items"
				v-else
				:key="child.title"
				:to="child.to"
			>
				<v-list-item-icon>
					<v-icon color="grey darken-1">
						{{ child.icon }}
					</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title
						class="link-subtitle"
						v-text="child.title.toUpperCase()"
					/>
				</v-list-item-content>
			</v-list-item>
		</v-list-group>
	</v-list>
</template>
<script>
export default {
	name: "QuickLinksComponent",
	emits: ["toggle"],
	data: () => ({
		items: [
			{
				action: "mdi-bird",
				items: [
					{ title: "Youtube", icon: "mdi-youtube", to: "https://www.youtube.com/channel/UCJciQdMbWCr-hPmVWu9HVyw" },
					{ title: "Facebook Group", icon: "mdi-facebook", to: "https://www.facebook.com/groups/2553480628235742/" },
					{ title: "Facebook Page", icon: "mdi-facebook", to: "https://www.facebook.com/sachchaikendranepal" },
				],
				title: "Sachchai",
			},
			{
				action: "mdi-star-circle",
				items: [
					{ title: "Profile", icon: "mdi-account-circle", to: "/profile/home" },
					{ title: "Posts", icon: "mdi-post", to: "/profile/articles" },
					{ title: "Photos", icon: "mdi-image", to: "/profile/images" },
					{ title: "Multimedias", icon: "mdi-video-vintage", to: "/profile/multimedias" },
					{ title: "Events", icon: "mdi-video-vintage", to: "/profile/events" },
				],
				title: "My Links",
			},
			{
				action: "mdi-calendar-clock",
				active: false,
				items: [
					{ title: "All Events", icon: "mdi-calendar-multiple", to: "/home/event" },
					{ title: "Satsang", icon: "mdi-heart" },
					{ title: "General Meets", icon: "mdi-account-supervisor-circle" },
					{ title: "Kendra Events", icon: "mdi-calendar-star" },
					{ title: "Branch Events", icon: "mdi-calendar-text" },
				],
				title: "Events",
			},
			{
				action: "mdi-post",
				items: [
					{ title: "Photos", icon: "mdi-image" }
				],
				title: "Articles",
			},
			{
				action: "mdi-video-vintage",
				items: [
					{ title: "Sounds", icon: "mdi-music-box" },
					{ title: "Photos", icon: "mdi-image", to: "/home/multimedia/images" },
					{ title: "Videos", icon: "mdi-video-box", to: "/home/multimedia/videos" },
					{ title: "Youtube", icon: "mdi-youtube", to: "/home/multimedia/youtube" },
				],
				title: "Multimedia",
			},
			{
				action: "mdi-earth",
				items: [
					{ title: "Social", icon: "mdi-run" },
					{ title: "Health", icon: "mdi-bottle-tonic-plus" },
					{ title: "Peace", icon: "mdi-peace" },
					{ title: "Satsang", icon: "mdi-dance-ballroom" },
				],
				title: "Services",
			},
			{
				action: "mdi-google-maps",
				items: [
					{ title: "Branches", icon: "mdi-city", to: "/home/map/branch" },
					{ title: "Kendra Branch", icon: "mdi-map-marker-star", to: "/home/map/kendra" },
				],
				title: "Maps",
			},
			{
				action: "mdi-office-building",
				items: [
					{ title: "About Us", icon: "mdi-information" },
					{ title: "Contact Us", icon: "mdi-phone" },
					{ title: "Feedback", icon: "mdi-comment-quote" },
				],
				title: "Office",
			},
			{
				action: "mdi-tag",
				items: [{ title: "Our Partners", icon: "mdi-handshake" }],
				title: "Promotions",
			},
		]
	}),
	computed: {
		getFullName() {
			if(!this.$helper.isUserLoggedIn()) return "Welcome to peace"
			const currentUser = this.$helper.getCurrentUser()
			if (currentUser.first_name && currentUser.last_name) {
				return `${currentUser.first_name} ${currentUser.last_name}`
			} else {
				return currentUser.username
			}
		}
	}
}
</script>
<style scoped lang="scss">
.full-name {
	font-size: 16px;
	text-transform: uppercase;
	font-weight: 600;
}
.link-title {
	font-size: 14px;
	font-weight: 500;
}
.link-subtitle {
	font-size: .875rem;
}
.link {
	text-decoration: none;
	color: inherit;
	font-weight: inherit;
}
</style>
