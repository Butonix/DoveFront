<template>
	<div>
		<!-- eslint-disable-next-line vue/no-deprecated-v-bind-sync -->
		<v-data-table v-model="selected" :options.sync="options"
			loading-text="Feedbacks Loading..."
			:headers="headers"
			:items="items.results"
			:server-items-length="getTotalPaginationData"
			:items-per-page="getItemsPerPageCount"
			:loading="loading"
			:search="search"
			multi-sort
			calculate-widths
			show-select
			:single-select="false"
			class="elevation-1"
			:footer-props="{
				showFirstLastPage: true,
				disableItemsPerPage: true,
				itemsPerPageOptions: [1, 5, 10, 50],
				itemsPerPageText: 'Rows per page:',
				pageText: `${options.page}-${getTotalPaginationData} of ${getTotalPaginationData}`
			}"
		>
			<template #top>
				<v-toolbar
					flat
					color="grey lighten-2"
				>
					<v-avatar
						class="elevation-2 table-avatar"
						size="35"
					>
						<v-icon small
							color="white"
						>
							mdi-comment-quote
						</v-icon>
					</v-avatar>
					<v-toolbar-title
						v-show="$vuetify.breakpoint.smAndUp"
						class="table-title pl-4"
					>
						Sachchai Feedbacks
					</v-toolbar-title>
					<v-divider
						class="mx-4"
						inset
						vertical
					/>
					<v-text-field
						v-model="search"
						class="search-feedbacks"
						solo dense
						hide-details
						label="Search"
						name="search"
						prepend-inner-icon="mdi-magnify"
						clearable
						placeholder="Search"
					/>
					<v-spacer />
				</v-toolbar>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.is_main="{ item }">
				<v-checkbox
					v-model="item.is_main"
					color="primary"
					hide-details="auto"
					class="mt-0"
					readonly
				/>
			</template>

			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.type="{ item }">
				<v-chip label>
					{{ (item.type === '0')
						? 'Custom'
						: (item.type === '1')
							? 'Anonymously'
							: 'Login'
					}}
				</v-chip>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.writer_name="{ item }">
				{{ (item.type === '0')
					? item.writer_name
					: (item.type === '1')
						? 'Anonymous'
						: item.writer.full_name
				}}
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.timestamp="{ item }">
				{{ $moment(item.timestamp).fromNow() }}
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.actions="{ item }">
				<v-btn
					icon small
				>
					<v-icon
						v-if="item.seen"
						small
						color="grey"
					>
						mdi-eye
					</v-icon>
					<v-icon
						v-else
						small
						color="orange"
					>
						mdi-eye
					</v-icon>
				</v-btn>
				<v-btn
					icon small
					@click="openAdminDeleteItemDialog(item.id, item.name)"
				>
					<v-icon
						small
						color="red"
					>
						mdi-delete
					</v-icon>
				</v-btn>
			</template>
			<template #no-data>
				<v-btn
					color="primary"
					@click="initialize"
				>
					Reset
				</v-btn>
			</template>
		</v-data-table>
		<admin-delete-item-dialog
			model-name="feedback"
			delete-action="utilities/deleteFeedback"
			@reload="initialize"
		/>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import AdminTableList from "@/mixins/AdminTableList";
import ToggleApproval from "@/mixins/ToggleApproval";
import AdminTableDeleteItemMixin from "@/mixins/AdminTableDeleteItemMixin";
import LoadLocationFormMixin from "@/mixins/LoadLocationFormMixin.js";

export default {
	name: "FeedbacksTable",
	mixins: [
		AdminTableList,
		AdminTableDeleteItemMixin,
	],
	data: () => ({
		model: "feedback",
		selected: [],
		headers: [
			{ text: "ACTIONS", value: "actions", sortable: false },
			{ text: "TYPE", value: "type" },
			{ text: "NAME", value: "writer_name" },
			{ text: "SUBJECT", value: "subject" },
			{ text: "MESSAGE", value: "message" },
			{ text: "TIMESTAMP", value: "timestamp" }
		],
	}),
	computed: {
		...mapGetters({
			feedbacks: "utilities/feedbackList",
		})
	},
	methods: {
		async initialize(val = null) {
			this.loading = true
			if(!val) val = this.options.page
			await this.$store.dispatch("utilities/fetchFeedbacks", {page: val})
			this.items = this.feedbacks
			this.totalItems = this.feedbacks.count
			this.loading = false
		},
	}
}
</script>

<style lang="sass" scoped>

</style>
