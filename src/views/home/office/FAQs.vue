<template>
	<v-card
		flat tile
		class="mx-auto pa-4"
		color="transparent"
		max-width="900"
		min-height="calc(100vh-60px)"
	>
		<v-card rounded="xl"
			:img="require('@/assets/undraw_Faq_re_31cw.svg')"
			height="300"
		>
			<v-img
				contain
				height="300"
				:src="require('@/assets/undraw_Faq_re_31cw.svg')"
			>
				<div class="fill-height d-flex justify-center align-center">
					<v-card-title class="display-4">
						FAQs
					</v-card-title>
				</div>
			</v-img>
		</v-card>
		<v-card
			v-for="(item, index) in faqItems"
			:key="index"
			class="mt-4"
			rounded="xl"
			:class="'faq-' + index"
		>
			<v-card-title>{{ item.question }}</v-card-title>
			<v-divider />
			<v-card-text class="faq-answer">
				{{ item.answer }}
			</v-card-text>
		</v-card>
	</v-card>
</template>

<script>
import FAQsItems from "@/mixins/FAQsItems.js";

export default {
	name: "FAQs",
	mixins: [FAQsItems]
}
</script>

<style scoped>
.faq-answer {
	font-size: 16px;
}
</style>
