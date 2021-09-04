<template>
	<div>
		<div class="wrapper d-flex flex-nowrap">
			<section class="section section--large flex-shrink-0 d-flex justify-center align-center">
				Part One
			</section>
			<section class="section section--dark section--small flex-shrink-0 d-flex justify-center align-center">
				Part Two
			</section>
			<section class="section section--small flex-shrink-0 d-flex justify-center align-center">
				Part Three
			</section>
			<section class="section section--large flex-shrink-0 d-flex justify-center align-center">
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
	mounted() {
		const duration = 10


		const sections = gsap.utils.toArray("section");
		let maxWidth = 0;

		const sectionIncrement = duration / (sections.length - 1)

		const getMaxWidth = () => {
			maxWidth = 0;
			sections.forEach((section) => {
				maxWidth += section.offsetWidth;
			});
		};
		getMaxWidth();
		ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

		gsap.to(sections, {
			x: () => `-${maxWidth - window.innerWidth}`,
			ease: "none",
			scrollTrigger: {
				trigger: ".wrapper",
				pin: true,
				scrub: true,
				end: () => `+=${maxWidth}`,
				invalidateOnRefresh: true
			}
		});

		sections.forEach((sct, i) => {
			ScrollTrigger.create({
				trigger: sct,
				start: () => "top top-=" + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
				end: () => "+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
				toggleClass: {targets: sct, className: "active"}
			});
		});

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
}
.section--large {
	width: 100vw;
	background-color: #e4002b;
	color: white;
}
.section--small {
	width: 46rem;
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
