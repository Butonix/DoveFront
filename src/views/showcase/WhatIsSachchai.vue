<template>
	<v-card
		class="what-is-sachchai"
		width="100vw" max-height="160vh"
		dark tile
		color="rgb(6 12 40)"
		style="margin-top: -400px;"
	>
		<v-img
			:src="require('@/assets/light_sky.jpg')"
			height="160vh"
		>
			<div style="height: 400px" />
			<v-row no-gutters
				justify="center" align="center"
			>
				<v-col cols="8">
					<v-card flat
						class="text-center mx-auto transparent"
						max-width="600" light
					>
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
		</v-img>
	</v-card>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


export default {
	name: "WhatIsSachchai",
	mounted() {
		const section = document.querySelector(".what-is-sachchai")
		gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top top", // center of trigger element hits top of the viewport
				end: "+=50",
				yoyo: true
			}
		})
			.from(".question", {
				scaleX: 0,
				scaleY: 0,
				duration: 100,
			})
			.from(".hr-divider", {
				width: 0,
				duration: 100,
				delay: 200,
				ease: "rough"
			}, 0)
			.from(".answer", {
				scaleY: 0,
				duration: 100,
				delay: 400,
				ease: "slow(￼0.7, 0.7, 0.7, 0.7, ￼false)",
				// ease: "slow",
			}, 8)
	}
}
</script>

<style scoped>
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
	width: 100%;
	border-radius: 50px;
	background-color: #51595e;
}
</style>
