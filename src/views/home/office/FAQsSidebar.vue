<template>
	<div class="pa-4">
		<v-card
			outlined flat
			rounded="xl"
		>
			<v-card-text class="pa-0">
				<v-list rounded
					class="px-0"
				>
					<v-list-item-group v-for="(item,index) in faqItems"
						:key="index"
						class="faq-item pa-2"
						@click="$vuetify.goTo(
							'.faq-' + index,
							{ duration: 600, offset: 0, easing: 'easeInOutCubic' }
						)"
					>
						<v-list-item>
							{{ item.question }}
						</v-list-item>
						<v-divider v-if="index+1 !== faqItems.length" />
					</v-list-item-group>
				</v-list>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import FAQsItems from "@/mixins/FAQsItems.js";

export default {
	name: "FAQsSidebar",
	mixins: [FAQsItems]
}
</script>

<style scoped>
.faq-item {
	font-size: 16px;
}
</style>
