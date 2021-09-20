<template>
	<v-card
		:loading="loading"
		max-width="100vw"
		flat
		tile
		class="scatter-bg"
	>
		<v-card v-if="gallery"
			class="demo-wrapper mx-auto"
			max-width="1200" color="transparent"
			flat tile
		>
			<gap height="150" />
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
			<gap height="200" />
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
::selection {
	background: #87cd33;
	color: white;
}

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
	font-size: clamp(3rem, 15vw, 6rem);
	line-height: 1;
	font-weight: 900;
}
.scatter-image {
	border-radius: 16px;
}
.scatter-bg {
	background-image: linear-gradient( 96.5deg,  rgba(39,103,187,1) 10.4%, rgba(16,72,144,1) 87.7% );
}
</style>
