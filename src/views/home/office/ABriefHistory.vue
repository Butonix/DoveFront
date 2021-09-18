<template>
	<v-card
		flat tile
		class="mx-auto pa-4"
		color="transparent"
		max-width="900"
	>
		<v-card rounded="xl">
			<v-card-title>
				A Brief History of Sachchai Kendra Nepal
			</v-card-title>
			<v-divider />
			<v-card-text>
				Anxious to know how the organization got into this position now? Please go through our brief history timeline.
				Here we share the idea behind this movement and the struggles behind the showcase.
			</v-card-text>
		</v-card>
		<v-timeline
			dense
		>
			<v-timeline-item
				v-for="(item, index) in items"
				:key="index"
				:icon="item.icon"
				:color="item.color"
				large
			>
				<v-card class="elevation-2"
					rounded="xl"
					:color="item.color"
					dark
				>
					<v-card-title class="text-h5 d-flex">
						<div>
							{{ item.title }}
						</div>
						<v-spacer />
						<div>{{ item.opposite }}</div>
					</v-card-title>
					<v-card-text class="white text--primary">
						{{ item.description }}
					</v-card-text>
				</v-card>
			</v-timeline-item>
		</v-timeline>
	</v-card>
</template>

<script>

export default {
	name: "ABriefHistory",
	data: () => ({
		items: [
			{
				color: "red lighten-2",
				icon: "mdi-star",
				opposite: "2066",
				title: "A Baby Got Sick",
				description: "It was a very unfortunate situation. Our baby was always depressing. He was never in his one hundred percent health state, both mentally and physically. What was troubling him? We visited many doctors but there was no any solution to this strange syndrome"
			},
			{
				color: "purple darken-1",
				icon: "mdi-book-variant",
				opposite: "2067",
				title: "A Journey of Hope",
				description: "We heard about self healing in Delhi, India. After being fed up with regular attempts we thought we should give it a try and packed our bags for Delhi. We reached there, a completely peaceful environment. We heard from many peoples. How miserable their life was before and how satisfied they now are. Our baby was participating in multiple such healing activities and gradually his health was progressing."
			},
			{
				color: "green lighten-1",
				icon: "mdi-airballoon",
				opposite: "2067",
				title: "A Lesson Is Learnt",
				description: "Baby is amazingly healing and progressively having good health. Knows about the power of the self satisfaction and faith in 'Ishwor'. One thing we got struck was the concept of one ture God. Peoples are often arguing about their own God's image and acting weirdly about their very existence and meaning of life. We were totally convinced that there is only one ture God. The God Almighty will shower up us as long as we have faith in him."
			},
			{
				color: "indigo",
				icon: "mdi-buffer",
				opposite: "2068",
				title: "Tiny steps for a big leap",
				description: "Remembering the God Almighty and performing Bhajans were daily activities now. Satsangs are now performed within family and closed circles. We highly felt that locals should be benifited too. So we started sharing our ideas, experiences about 'Sachchai' to the public."
			},
			{
				color: "blue darken-2",
				icon: "mdi-buffer",
				opposite: "2069",
				title: "More Participation of Believers",
				description: "Peoples are now participating in our Satsangs and Bhajans. We also share how our life is impacted by this belief system and get motivated among ourselves with our own stories. Peoples are more than happy to being heard and motivated."
			},
			{
				color: "teal darken-2",
				icon: "mdi-buffer",
				opposite: "2070",
				title: "Registered Non Profit Religious Organization",
				description: "With the growing number of peoples attention, critisims were also growing. We'd to be clear with our ambition among the society. We deeply thought it should be registered and have a peculiar boundary for the operations performed inside. We are totally responsible for our official works and will certaily answer your questions about it. But all other un-official arguments are void due to our legal registration."
			},
			{
				color: "orange",
				icon: "mdi-buffer",
				opposite: "2071",
				title: "Sachchai Branches",
				description: "After our legalization we'd an official building to perform our Satsangs, Bhajans, Gawahis & Bachans more officially. Peoples were coming from very far places. It was so difficult for them to attain our everydays programs. So we suggested them to perform Satsangs on their local peoples with their fellow believers. This idea lead us to Branch registrations under 'Ishworiya Marg Bhajan Mandal Sachchai Kendra Nepal'. Now we have hundreds of branches throughout the country and number of branches in aboard countries like Japan, Korea, Australia etc."
			},
			{
				color: "pink lighten-1",
				icon: "mdi-buffer",
				opposite: "2072",
				title: "Leaders Helping Hands",
				description: "Those who are constantly participating in Satsangs and have more knowledge about Sachchai are made as Branch Leaders so that they can work as a link between Kendra Team and local branches. This way we can easily communicate with local peoples and listen to their problems."
			},
			{
				color: "red lighten-1",
				icon: "mdi-buffer",
				opposite: "2072",
				title: "Flowing river",
				description: "Peoples were more benefited, happy and motivated when connected with Sachchai. Local groupings and satsangs are being continuously performed locally even in these hard COVID situations."
			},
		],
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>
