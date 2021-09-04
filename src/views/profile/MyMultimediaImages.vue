<template>
	<v-card class="mx-2"
		flat
	>
		<StartAPostComponent />
		<div class="py-2" />
		<v-btn block rounded
			height="45"
			@click="$bus.emit('open-start-post-dialog')"
		>
			<v-icon>mdi-video-vintage</v-icon>
			add new multimedia
		</v-btn>
		<v-card v-if="myMultimedias.length === 0"
			rounded="xl"
		>
			<v-chip>No multimedia uploaded yet.</v-chip>
		</v-card>
		<v-row v-else
			no-gutters
		>
			<v-col
				v-for="multimedia in myMultimedias"
				:key="multimedia.id"
				cols="12"
			>
				<v-toolbar
					color="green lighten-4"
					height="40" rounded="xl"
					class="my-4 elevation-2 rounded"
				>
					<v-app-bar-nav-icon>
						<v-avatar
							color="green lighten-2"
							size="30"
						>
							<span>{{ multimedia.id }}</span>
						</v-avatar>
					</v-app-bar-nav-icon>
					<v-toolbar-title class="img-toolbar"
						@click="$router.push({name: 'SACHCHAI NEPAL MULTIMEDIA', params: {id: multimedia.id}})"
					>
						{{ multimedia.title }}
					</v-toolbar-title>
					<v-spacer />
					<v-icon
						:color="(multimedia.is_approved) ? 'green': 'error'"
					>
						{{ (multimedia.is_approved) ? 'mdi-check-decagram': 'mdi-check-decagram-outline' }}
					</v-icon>
				</v-toolbar>
				<v-row no-gutters>
					<v-col
						v-for="img in multimedia['multimedia_images']"
						:key="img.id"
						cols="12"
						xl="3"
						lg="3"
						md="4"
						sm="6"
						class="pa-1"
					>
						<card-img
							height="200"
							:src="img.image"
						/>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-card>
</template>
<script>
import StartAPostComponent from "@/components/feeds/StartPost.vue";

export default {
	name: "MyMultimediaImages",
	components: {StartAPostComponent},
	computed: {
		myMultimedias() {
			return this.$helper.getCurrentUser()["my_multimedias"]
		}
	}
}
</script>

<style scoped>

</style>
