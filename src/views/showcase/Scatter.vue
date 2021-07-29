<template>
	<v-card
		:loading="loading"
		max-width="1000"
		class="mx-auto"
		flat
		color="transparent rounded-0"
	>
		<div style="padding: 200px;" />
		<div v-if="gallery"
			class="demo-wrapper"
		>
			<section class="scatter-section demo-text">
				<div class="wrapper text">
					LOVEDGALLERYFROMUS
				</div>
			</section>
			<section class="scatter-section demo-gallery">
				<v-card class="wrapper"
					height="340" flat
				>
					<li v-for="img in gallery.slice(0, 4)"
						:key="img.id"
					>
						<v-img height="340" eager
							class="scatter-image"
							:src="$helper.replaceBackendHost(img.image)"
						/>
					</li>
				</v-card>
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
				<div class="wrapper text">
					SACHCHAIKENDRANEPAL
				</div>
			</section>
			<div style="padding: 100px;" />
		</div>
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
</style>
