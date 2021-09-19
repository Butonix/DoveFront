<template>
	<div>
		<v-card
			outlined
			flat
			rounded="xl"
			class="ma-4"
		>
			<v-card-text class="pa-0">
				<v-list rounded>
					<v-subheader class="text-uppercase">
						Timeline
					</v-subheader>
					<v-list-item
						v-for="(item, index) in timelineItems"
						:key="index"
						@click="$vuetify.goTo(
							'.timeline-year-' + item.opposite,
							{ duration: 600, offset: 100, easing: 'easeInOutCubic' }
						)"
					>
						<div class="timeline-year">
							{{ item.opposite }}
						</div>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
		<v-divider class="mt-3" />
	</div>
</template>

<script>
import TimelineItemsMixin from "@/mixins/TimelineItemsMixin.js";

export default {
	name: "HistorySidebar",
	mixins: [TimelineItemsMixin]
}
</script>
<style scoped>
.timeline-year {
	font-size: 16px;
	font-weight: 500;
}
</style>
