<template>
	<v-card
		class="what-is-sachchai"
		width="100vw"
		dark tile
	>
		<v-parallax
			:src="require('@/assets/light_sky.jpg')"
			:height="$vuetify.breakpoint.mdAndUp
				? 1800
				: $vuetify.breakpoint.width < 365 ? 3000 : 2000"
		>
			<gap height="400" />
			<v-row no-gutters
				justify="center" align="center"
			>
				<v-col cols="8">
					<v-card flat
						class="text-center mx-auto transparent overflow-hidden"
						max-width="600" light
					>
						<gap height="200" />
						<v-card-text class="nepali-font question">
							के हो त सच्चाई ?
						</v-card-text>
						<div class="hr-divider" />
						<v-card-text />
						<v-card-text class="nepali-font answer">
							सच्चाई शब्दको अर्थ सत्य हो।
						</v-card-text>
						<v-card-text class="nepali-font answer">
							सच्चाई सकारत्मक सोचको ज्योति हो।
						</v-card-text>
						<v-card-text class="nepali-font answer">
							जहाँ सच्चाई छ, त्यहाँ सत्यको नै जित हुन्छ ।
						</v-card-text>
						<v-card-text class="nepali-font answer">
							हामी ईश्वरको प्रार्थना गर्छौँ। ईश्वरलाई चिज-वस्तुमा होइन, ढुङ्गा-माटोमा होइन, मन्दिर-मुर्तीमा होइन, स्वयम्ं आफूमा खोज्ने र पाउने विश्वास राख्दछौँ।
						</v-card-text>
						<v-card-text class="nepali-font answer">
							हामी ईश्वरको सम्झनामा मन लगाइराख्छौँ र यस अमुल्य जिवनको लागि करोड करोड धन्यवाद चढाउदछौँ।
						</v-card-text>
						<v-card-text class="nepali-font answer">
							हामी मानिषको सोचको सम्मान गर्छौँ र समाजमा बसेको नकारात्मक सोचलाई सकारात्मक बनाउन सधैँ अग्रसर हुन्छौँ।
						</v-card-text>
						<v-card-text class="nepali-font answer">
							हिमाल भन्दा पनि अग्लो सोच, विचार अनि मन बनाउनुस्। तुफान भन्दा पनि तेज जोस जाँगर राख्नुस्। दुनियाँ सबै स्वार्थी छन्। दुनिया सँग होईन, मन सदा ईश्वर सँग लगाई राख्नुस्।
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<gap height="400" />
		</v-parallax>
	</v-card>
</template>

<script>

export default {
	name: "WhatIsSachchai",
}
</script>

<style scoped>
.what-is-sachchai {
	margin-top: -400px;
}
.question {
	font-size: 40px;
	line-height: 45px;
	font-weight: 600;
}
.answer {
	font-size: 22px;
	line-height: 35px;
	font-weight: 600;
}
.hr-divider {
	height: 2px;
	width: 100% !important;
	border-radius: 50px;
	background-color: #51595e;
}
</style>
