<template>
	<div>
		<v-card flat
			outlined class="ma-4"
			rounded="xl"
		>
			<v-card-text class="pa-0">
				<v-list rounded>
					<v-list-item to="/profile/feedback">
						<v-icon>mdi-comment-account</v-icon>
						<div class="px-1" />
						<div>My Feedbacks</div>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
		<v-card
			flat outlined
			class="ma-4"
			rounded="xl"
		>
			<v-card-text class="pa-0">
				<v-list rounded>
					<v-subheader class="text-uppercase">
						Feedback Types
					</v-subheader>
					<v-list-item
						v-for="(item, index) in feedbackTypes"
						:key="index"
						class="feedback-type"
						:class="{
							'purple--text': index === 0,
							'grey--text': index === 1,
							'feedback-type-active': item.type === feedbackType
						}"
						active-class="feedback-type-active"
						@click="SET_FEEDBACK_TYPE(item.type)"
					>
						<v-icon :color="item.color">
							{{ item.icon }}
						</v-icon>
						<div class="px-1" />
						<v-list-item-content>
							{{ item.text }}
						</v-list-item-content>
					</v-list-item>
					<v-list-item
						v-if="$helper.isUserLoggedIn()"
						class="feedback-type primary--text"
						:class="{'feedback-type-active': '2' === feedbackType}"
						@click="SET_FEEDBACK_TYPE('2')"
					>
						<v-icon color="primary">
							mdi-account-circle
						</v-icon>
						<div class="px-1" />
						<v-list-item-content>
							{{ $helper.getCurrentUser().username }}
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
		<v-divider />
	</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	name: "FeedbackSidebar",
	data: () => ({
		feedbackTypes: [
			{
				icon: "mdi-form-select",
				color: "purple",
				text: "Custom Detail",
				type: "0"
			},
			{
				text:"Anonymously",
				color: "grey",
				icon: "mdi-incognito",
				type: "1"
			}
		]
	}),
	computed: {
		...mapGetters({
			feedbackType: "utilities/feedbackType"
		})
	},
	methods: {
		...mapMutations("utilities", ["SET_FEEDBACK_TYPE"])
	}
}
</script>

<style scoped>
.feedback-type-active {
	background-color: #ececec;
	pointer-events: none;
}
</style>
