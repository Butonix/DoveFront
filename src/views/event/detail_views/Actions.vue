<template>
	<v-col cols="12">
		<v-card flat
			max-width="1000"
			color="transparent"
			class="mx-auto"
		>
			<v-card-actions class="event-detail-actions">
				<v-btn
					:loading="interestedLoading"
					:depressed="$vuetify.breakpoint.mdAndUp"
					:icon="!$vuetify.breakpoint.mdAndUp"
					@click="toggleInterestedStatus"
				>
					<v-icon small
						color="purple"
						class="px-1"
					>
						mdi-star-circle
					</v-icon>
					<span v-if="$vuetify.breakpoint.mdAndUp">
						<span v-if="statistics['interested']"
							class="button-span red--text text--lighten-1"
						>
							Remove Interest
						</span>
						<span v-else
							class="purple--text button-span"
						>
							Add Interest
						</span>
					</span>
				</v-btn>
				<v-btn
					v-if="event.is_approved"
					:loading="approvalLoading"
					:depressed="$vuetify.breakpoint.mdAndUp"
					:icon="!$vuetify.breakpoint.mdAndUp"
					@click="revokeApproval"
				>
					<v-icon
						class="px-1"
						color="error"
						small
					>
						mdi-check-circle
					</v-icon>
					<span
						v-if="$vuetify.breakpoint.mdAndUp"
						class="red--text text--lighten-1 button-span"
					>Dis-approve</span>
				</v-btn>
				<v-btn
					v-else
					:loading="approvalLoading"
					:icon="!$vuetify.breakpoint.mdAndUp"
					:depressed="$vuetify.breakpoint.mdAndUp"
					@click="approve"
				>
					<v-icon
						class="px-1"
						color="green"
						small
					>
						mdi-check-circle
					</v-icon>
					<span
						v-if="$vuetify.breakpoint.mdAndUp"
						class="green--text text-darken-2 button-span"
					>Approve</span>
				</v-btn>
				<v-btn
					:loading="goingLoading"
					:icon="!$vuetify.breakpoint.mdAndUp"
					:depressed="$vuetify.breakpoint.mdAndUp"
					@click="toggleGoingStatus"
				>
					<v-icon
						color="indigo"
						small
					>
						mdi-walk
					</v-icon>
					<span v-if="$vuetify.breakpoint.mdAndUp">
						<span v-if="statistics['going']"
							class="button-span red--text text--lighten-1"
						>
							Not Going
						</span>
						<span v-else
							class="indigo--text button-span"
						>
							I Am Going
						</span>
					</span>
				</v-btn>
				<v-spacer />
				<div v-if="event['created_by']">
					<v-menu
						v-if="$helper.ifWriterIsCurrentUser(event['created_by']['username'])"
						close-on-click
						offset-y nudge-bottom="5"
						transition="slide-y-transition"
					>
						<template #activator="{on, attrs}">
							<v-btn
								icon
								v-bind="attrs"
								v-on="on"
							>
								<v-icon>mdi-dots-vertical</v-icon>
							</v-btn>
						</template>
						<v-list dense
							color="red lighten-4"
						>
							<v-list-item
								v-for="(item) in menuItems"
								:key="item.icon"
								@click="item.handler"
							>
								<v-list-item-icon>
									<v-icon>{{ item.icon }}</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title>
										{{ item.text }}
									</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
			</v-card-actions>
		</v-card>
		<event-form-dialog :fullscreen="false" />
	</v-col>
</template>

<script>
import {mapGetters} from "vuex";
import Snack from "@/mixins/Snack.js";
import LoadLocationFormMixin from "@/mixins/LoadLocationFormMixin.js";
import EventFormDialog from "@/views/event/EventFormDialog.vue";

export default {
	name: "Actions",
	components: {EventFormDialog},
	mixins: [Snack, LoadLocationFormMixin],
	props: {
		event: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		interestedLoading: false,
		goingLoading: false,
		approvalLoading: false,
	}),
	computed: {
		...mapGetters({
			statistics: "event/statisticsDetail",
		}),
		menuItems() {
			return [
				{icon: "mdi-pencil", text: "Edit", handler: this.openEventEditDialog },
				{icon: "mdi-delete", text: "Delete", handler: this.deleteEventConfirm}
			]
		}
	},
	methods: {
		async deleteEvent() {
			const deleted = await this.$store.dispatch("event/delete", this.event.id)
			if (deleted) {
				await this.openSnack("Event delete success.", "success")
				await this.$router.push("/home/event")
			}
			else await this.openSnack("Event delete failed")
		},
		async deleteEventConfirm() {
			confirm("Are you sure you want to remove this event?") && await this.deleteEvent()
		},
		async openEventEditDialog() {
			await this.loadLocationItems(this.event)
			this.$bus.emit("open-event-form-dialog-edit-item", {
				editedIndex: this.event.id,
				editedItem: Object.assign({}, this.event),
			})
		},
		async toggleInterestedStatus() {
			this.interestedLoading = true
			const toggled = await this.$store.dispatch("event/toggleInterestedStatus", {id: this.event.id})
			if (toggled) await this.$store.dispatch("event/fetchStatistics", { id: this.$route.params.id})
			else await this.openSnack("Added interest to event failed.")
			this.interestedLoading = false
		},
		async toggleGoingStatus() {
			this.goingLoading = true
			const toggled = await this.$store.dispatch("event/toggleGoingStatus", {id: this.event.id})
			if (toggled) await this.$store.dispatch("event/fetchStatistics", { id: this.$route.params.id})
			else await this.openSnack("Added interest to event failed.")
			this.goingLoading = false
		},
		async approve() {
			this.approvalLoading = true
			const toggled = await this.$store.dispatch("event/approve", {id: this.event.id})
			if (toggled) await this.$store.dispatch("event/fetchSingle", { id: this.$route.params.id})
			else await this.openSnack("Event approval failed.")
			this.approvalLoading = false
		},
		async revokeApproval() {
			this.approvalLoading = true
			const toggled = await this.$store.dispatch("event/disapprove", {id: this.event.id})
			if (toggled) await this.$store.dispatch("event/fetchSingle", { id: this.$route.params.id})
			else await this.openSnack("Event approval revoke failed.")
			this.approvalLoading = false
		},
	}
}
</script>

<style scoped lang="scss">
.event-detail-actions {
	display: flex;
	justify-items: center;
	align-items: center;
	flex-wrap: wrap;
	.button-span {
		font-size: 12px;
		padding-left: 2px;
	}
}
</style>
