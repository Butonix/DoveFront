<template>
	<div>
		<!-- eslint-disable-next-line vue/no-deprecated-v-bind-sync -->
		<v-data-table :options.sync="options"
			:headers="headers"
			:items="items.results"
			:server-items-length="getTotalPaginationData"
			:items-per-page="getItemsPerPageCount"
			:loading="loading"
			loading-text="Loading multimedias..."
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
				<v-toolbar flat
					color="grey lighten-2"
				>
					<v-app-bar-nav-icon>
						<v-avatar
							class="table-avatar elevation-4"
							size="30"
						>
							<v-icon
								color="white"
								size="20"
							>
								mdi-video
							</v-icon>
						</v-avatar>
					</v-app-bar-nav-icon>
					<v-toolbar-title
						v-show="$vuetify.breakpoint.smAndUp"
						class="table-title pl-1"
					>
						Sachchai Nepal Multimedias
					</v-toolbar-title>
					<v-spacer />
					<v-text-field v-model="search"
						solo
						label="Search..."
						dense
						hide-details
						prepend-inner-icon="mdi-magnify"
						color="primary"
						class="mx-2"
					/>
				</v-toolbar>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.approval_status="{ item }">
				<v-switch v-model="item.is_approved"
					color="grey darken-2"
					disabled
				/>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.title="{ item }">
				<v-btn x-small
					text
					@click="toMultimediaDetail(item)"
				>
					{{ item.title }}
				</v-btn>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.timestamp="{ item }">
				{{ $moment(item.timestamp).fromNow() }}
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.approver="{ item }">
				{{ (item.approved_by) ? item.approved_by.username : '-' }}
			</template>
			<!-- eslint-disable-next-line-->
			<template v-slot:item.type="props">
				<!-- eslint-disable-next-line-->
				<v-edit-dialog :return-value.sync="props.item.type"
					large persistent
					@save="saveType"
					@open="openUpdateType(props.item)"
				>
					{{ props.item.type }}
					<template #input>
						<div class="mt-4 text-h6">
							Update Multimedia Type
						</div>
						<v-divider class="mb-4" />
						<v-select
							v-model="updateItemType"
							label="Multimedia Type"
							hide-details
							filled rounded
							single-line
							:items="['satsang', 'bhajan', 'testimonial', 'prayer', 'bachan']"
						/>
					</template>
				</v-edit-dialog>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.actions="{ item }">
				<v-icon
					v-if="!item.is_approved"
					small
					color="green"
					class="mr-2"
					@click="approve(item)"
				>
					mdi-check
				</v-icon>
				<v-icon
					v-if="item.is_approved"
					small
					color="red"
					class="mr-2"
					@click="revokeApprove(item)"
				>
					mdi-close
				</v-icon>
				<v-icon
					small
					color="red"
					@click="openAdminDeleteItemDialog(item.id, item.title)"
				>
					mdi-delete
				</v-icon>
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
			model-name="multimedia"
			delete-action="multimedia/delete"
			@reload="initialize"
		/>
	</div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import AdminTableDeleteItemMixin from "@/mixins/AdminTableDeleteItemMixin";
import ToggleApproval from "@/mixins/ToggleApproval";
import AdminTableList from "@/mixins/AdminTableList";
import multimedia from "@/store/modules/multimedia";

export default {
	name: "MultimediaView",
	mixins: [
		AdminTableList,
		AdminTableDeleteItemMixin,
		ToggleApproval
	],
	data() {
		return {
			updateItemType: null,
			itemForUpdate: null,
			model: "multimedia",
			headers: [
				{ text: "ACTIONS", value: "actions", sortable: false },
				{ text: "ID", value: "id" },
				{ text: "TITLE", value: "title" },
				{ text: "TYPE", value: "type" },
				{ text: "WRITER", value: "uploaded_by.username" },
				{ text: "STATUS", value: "approval_status" },
				{ text: "APPROVER", value: "approver" },
				{ text: "TIMESTAMP", value: "timestamp" },
			],
		}
	},
	computed: {
		... mapGetters({
			multimedias: "multimedia/list"
		})
	},
	async created() {
		await this.initialize()
	},
	methods: {
		...mapMutations("multimedia", ["SET_MULTIMEDIA_TO_VIEW"]),
		async saveType() {
			this.loading = true
			console.log("save", this.updateItemType, this.itemForUpdate)
			await this.$store.dispatch("multimedia/patch", {id: this.itemForUpdate.id, body: {
				type: this.updateItemType
			}})
			await this.initialize()
		},
		openUpdateType(item) {
			this.updateItemType = item.type
			this.itemForUpdate = item
		},
		async initialize(val) {
			this.loading = true
			if (!val) val = 1
			await this.$store.dispatch("multimedia/filter", {
				page: val
			})
			this.items = this.multimedias
			this.totalItems = this.multimedias.count
			this.loading = false
		},
		toMultimediaDetail(item) {
			this.SET_MULTIMEDIA_TO_VIEW(item)
			this.$router.push({ name: "MULTIMEDIA DETAIL ADMINISTRATION", params: {id: item.id}})
		}
	}
}
</script>
<style lang="sass" scoped>

</style>
