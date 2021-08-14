<template>
	<v-card
		:loading="loading"
		max-width="100vw"
		flat
		tile
		style="background-image: linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% );"
	>
		<div class="custom-shape-divider-top">
			<svg data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
					class="shape-fill"
				/>
			</svg>
		</div>
		<div
			class="custom-shape-divider-bottom"
		>
			<svg data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
					class="shape-fill"
				/>
			</svg>
		</div>
		<v-divider />
		<v-card v-if="gallery"
			class="demo-wrapper mx-auto"
			max-width="1200" color="transparent"
			flat tile
		>
			<section class="scatter-section demo-text">
				<div class="wrapper text py-12 grey--text text--lighten-2">
					LOVEDGALLERYFROMUS
				</div>
			</section>
			<section class="scatter-section demo-gallery">
				<ul class="wrapper">
					<li v-for="img in gallery.slice(0, 4)"
						:key="img.id"
					>
						<v-img height="340" eager
							class="scatter-image"
							:src="$helper.replaceBackendHost(img.image)"
						/>
					</li>
				</ul>
			</section>
			<section class="scatter-section demo-gallery">
				<ul class="wrapper">
					<li v-for="img in gallery.slice(3, 7)"
						:key="img.id"
					>
						<v-img height="340" eager
							class="scatter-image"
							:src="$helper.replaceBackendHost(img.image)"
						/>
					</li>
				</ul>
			</section>
			<section class="scatter-section demo-gallery">
				<ul class="wrapper">
					<li v-for="img in gallery.slice(7, 11)"
						:key="img.id"
					>
						<v-img height="340" eager
							class="scatter-image"
							:src="$helper.replaceBackendHost(img.image)"
						/>
					</li>
				</ul>
			</section>
			<section class="scatter-section demo-gallery">
				<ul class="wrapper">
					<li v-for="img in gallery.slice(-4)"
						:key="img.id"
					>
						<v-img height="340" eager
							class="scatter-image"
							:src="$helper.replaceBackendHost(img.image)"
						/>
					</li>
				</ul>
			</section>
			<section class="scatter-section demo-text">
				<div class="wrapper text py-12 grey--text text--lighten-4">
					SACHCHAIKENDRANEPAL
				</div>
			</section>
			<div style="padding: 100px;" />
		</v-card>
	</v-card>
</template>
<script>
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {mapGetters} from "vuex";


export default {
	name: "Scatter",
	data: () => ({
		loading: null,
	}),
	computed: {
		...mapGetters({
			gallery: "utilities/galleryList"
		})
	},
	async created(){
		await this.init()
		gsap.registerPlugin(ScrollTrigger);

		this.initializeAnimation()
	},
	methods: {
		async init() {
			this.loading = true
			await this.$store.dispatch("utilities/fetchGalleryImages")
			this.loading = false
		},
		initializeAnimation()  {
			document.body.style.overflow = "auto";
			document.scrollingElement.scrollTo(0, 0);

			gsap.utils.toArray(".scatter-section").forEach((section, index) => {
				const w = section.querySelector(".wrapper");
				const [x, xEnd] = (index % 2) ? ["100%", (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
				gsap.fromTo(w, {  x  }, {
					x: xEnd,
					scrollTrigger: {
						trigger: section,
						scrub: 1,
						start: "top bottom"
					}
				});
			});
		}
	}
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

::selection {
	background: #87cd33;
	color: white;
}

body {
	overflow: hidden;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}

h1 { font-size: 5rem }
h2 { font-size: 2rem }

li {
	flex-shrink: 0;
	width: clamp(500px, 60vw, 800px);
	padding-right: 1rem;
}

header {height: 100vh}
footer {height: 50vh}

:any-link { color: #4e9815; }


.demo-wrapper {
	overflow-x: hidden;
}

.wrapper {
	display: flex;
	padding-left: 1rem;
	list-style: none;
}

.demo-gallery:not(.last) {
	padding-bottom: 1rem;
}

.demo-text .text {
	font-size: clamp(4rem, 15vw, 8rem);
	line-height: 1;
	font-weight: 900;
}
.scatter-image {
	border-radius: 4px;
}
.custom-shape-divider-bottom {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);
}

.custom-shape-divider-bottom svg {
	position: relative;
	display: block;
	width: calc(100% + 1.3px);
	height: 500px;
	transform: rotateY(180deg);
}

.custom-shape-divider-bottom .shape-fill {
	fill: #060c28;
}
.custom-shape-divider-top {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
}

.custom-shape-divider-top svg {
	position: relative;
	display: block;
	width: calc(100% + 1.3px);
	height: 500px;
	transform: rotateY(180deg);
}

.custom-shape-divider-top .shape-fill {
	fill: #060C28;
}
</style>
