<template>
	<div>
		<div class="wrapper d-flex flex-nowrap">
			<section class="section flex-shrink-0 d-flex justify-center align-center">
				Part One
			</section>
			<section class="section section--dark section--small flex-shrink-0 d-flex justify-center align-center">
				Part Two
			</section>
			<section class="section flex-shrink-0 d-flex justify-center align-center">
				Part Three
			</section>
			<section class="section flex-shrink-0 d-flex justify-center align-center">
				Part Four
			</section>
		</div>

		<div class="center-marker" />
	</div>
</template>
<script>
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
	name: "HistorySlider",
	data: () => ({
		duration: 10
	}),
	mounted() {
		const sections = gsap.utils.toArray("section");
		const sectionIncrement = this.duration / (sections.length - 1)

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".wrapper",
				pin: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
				start: "top top",
				end: "+=5000"
			}
		})
		tl.to(sections, {
			xPercent: -100 * (sections.length - 1),
			duration: this.duration,
			ease: "none"
		});
		sections.forEach((section, index) => {
			let tween = gsap.from(section, {
				opacity: 0,
				scale: 0.6,
				duration: 1,
				force3D: true,
				paused: true
			});
			this.addSectionCallbacks(tl, {
				start: sectionIncrement * (index - 0.99),
				end: sectionIncrement * (index + 0.99),
				onEnter: () => tween.play(),
				onLeave: () => tween.reverse(),
				onEnterBack: () => tween.play(),
				onLeaveBack: () => tween.reverse()
			});
			index || tween.progress(1); // the first tween should be at its end (already faded/scaled in)
		});
	},
	methods: {
		// helper function that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
		addSectionCallbacks(timeline, {start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack}) {
			let trackDirection = animation => { // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
					let onUpdate = animation.eventCallback("onUpdate"), // in case it already has an onUpdate
						prevTime = animation.time();
					animation.direction = animation.reversed() ? -1 : 1;
					animation.eventCallback("onUpdate", () => {
						let time = animation.time();
						if (prevTime !== time) {
							animation.direction = time < prevTime ? -1 : 1;
							prevTime = time;
						}
						onUpdate && onUpdate.call(animation);
					});
				},
				empty = v => v; // in case one of the callbacks isn't defined
			timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
			start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
			end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
		}
	}
}
</script>
<style scoped>
body {
	overflow-x: hidden;
}

.section {
	font-size: 5rem;
	height: 100vh;
	width: 100vw;
	background-color: #e4002b;
	color: white;
}

.section--dark {
	color: white;
	background-color: black;
}

.center-marker {
	position: fixed;
	width: 2px;
	height: 100vh;
	background: tomato;
	top: 0;
	left: calc(50vw - 1px);
}

section {
	font-weight: 900;
	transition: color 0.3s;
}

section.active {
	color: orange;
}
</style>
