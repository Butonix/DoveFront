<template>
	<v-card
		flat tile
		class="mx-auto pa-4 pb-0"
		color="transparent"
		max-width="900"
	>
		<v-card rounded="xl"
			class="info-card"
			dark
		>
			<v-card-title class="text-uppercase">
				A Brief History of Sachchai Kendra Nepal
			</v-card-title>
			<v-divider />
			<v-card-text class="timeline-desc">
				Anxious to know how the organization got into this position now? Please go through our brief history timeline.
				Here we share the idea behind this movement and the struggles behind the showcase.
			</v-card-text>
		</v-card>
		<v-timeline
			dense
		>
			<v-timeline-item
				v-for="(item, index) in timelineItems"
				:key="index"
				:icon="item.icon"
				:color="item.color"
				large
			>
				<v-card class="elevation-2"
					rounded="xl"
					:color="item.color"
					dark
				>
					<v-card-title class="text-h5 d-flex"
						:class="item.color + ' darken-1'"
					>
						<div>
							{{ item.title }}
						</div>
						<v-spacer />
						<v-chip :color="item.color"
							class="font-weight-bold"
							:class="'timeline-year-' + item.opposite"
						>
							{{ item.opposite }}
						</v-chip>
					</v-card-title>
					<v-divider />
					<v-row class="ma-0 pa-0">
						<v-col cols="12"
							xl="8" lg="8"
							md="8" sm="12"
						>
							<v-card-text class="white--text timeline-desc">
								{{ item.description }}
							</v-card-text>
						</v-col>
						<v-col cols="12"
							xl="4" lg="4"
							md="4" sm="12"
						>
							<v-card rounded="xl"
								class="transparent"
							>
								<v-img
									:height="item.imgHeight"
									:src="item.img"
								/>
							</v-card>
						</v-col>
					</v-row>
				</v-card>
			</v-timeline-item>
		</v-timeline>
	</v-card>
</template>

<script>

import TimelineItemsMixin from "@/mixins/TimelineItemsMixin.js";

export default {
	name: "ABriefHistory",
	mixins: [TimelineItemsMixin]
}
</script>

<style scoped>
.timeline-desc {
	font-size: 16px;
}
.info-card {
	background-image: linear-gradient( 109.6deg,  rgba(39,142,255,1) 11.2%, rgba(98,113,255,0.78) 100.2% );
}
</style>
