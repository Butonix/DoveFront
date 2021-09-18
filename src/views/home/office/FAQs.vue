<template>
	<v-card
		flat tile
		class="mx-auto pa-4"
		color="transparent"
		:width="criticalScreenWidth"
		min-height="calc(100vh-60px)"
		style="position: relative"
	>
		<v-img
			:src="require('@/assets/undraw_Faq_re_31cw.svg')"
			style="position:absolute; bottom: 0; left: 0"
			max-width="500"
		/>
		<v-card rounded="xl">
			<v-card-title>
				FAQs
			</v-card-title>
		</v-card>
		<v-card
			v-for="n in 5"
			:key="n"
			class="mt-4"
			rounded="xl"
		>
			<v-card-title>First question</v-card-title>
			<v-card-text>
				Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
				Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis
				at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			</v-card-text>
		</v-card>
	</v-card>
</template>

<script>
import HomeCriticalWidth from "@/mixins/HomeCriticalWidth.js";

export default {
	name: "FAQs",
	mixins: [HomeCriticalWidth]
}
</script>

<style scoped>

</style>
