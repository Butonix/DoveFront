<template>
	<div>
		<!-- eslint-disable-next-line vue/no-deprecated-v-bind-sync -->
		<v-data-table :options.sync="options"
			:headers="headers"
			:items="items.results"
			:server-items-length="getTotalPaginationData"
			:items-per-page="getItemsPerPageCount"
			:loading="loading"
			loading-text="Loading provinces..."
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
						size="30"
					>
						<v-icon color="white"
							size="15"
						>
							mdi-office-building-marker-outline
						</v-icon>
					</v-avatar>
					<v-toolbar-title
						v-show="$vuetify.breakpoint.smAndUp"
						class="table-title pl-1"
					>
						Provinces
					</v-toolbar-title>
					<v-divider
						class="mx-4 search-follower"
						inset
						vertical
					/>
					<v-text-field
						v-model="search"
						class="search-follower"
						solo
						dense
						hide-details
						label=""
						name="search"
						prepend-inner-icon="mdi-magnify"
						clearable
						placeholder="Search"
					/>
					<v-spacer />
					<v-divider
						class="mx-4 search-follower"
						inset
						vertical
					/>

					<v-btn
						dark
						color="primary"
						@click.prevent="openCreateFormDialog"
					>
						<v-icon
							dark
							:class="$vuetify.breakpoint.smAndUp ? 'mr-2' : ''"
						>
							mdi-plus-circle
						</v-icon>
						<span v-if="$vuetify.breakpoint.smAndUp">Province</span>
					</v-btn>


					<add-province-form-dialog @reload="initialize" />
				</v-toolbar>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.name="props">
				<v-edit-dialog
					v-model:return-value="props.item.name"
					dark
					@save="updateName(props.item)"
					@open="openNameUpdate(props.item.name)"
				>
					{{ props.item.name }}
					<template #input>
						<v-text-field
							v-model="nameToUpdate"
							label="Province Name"
							single-line
							counter
						/>
					</template>
				</v-edit-dialog>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.number="props">
				<v-edit-dialog
					v-model:return-value="props.item.number"
					dark
					@save="updateNumber(props.item)"
					@open="openNumberUpdate(props.item.number)"
				>
					{{ props.item.number }}
					<template #input>
						<v-text-field
							v-model="numberToUpdate"
							label="Province Number"
							single-line
							counter
							type="number"
						/>
					</template>
				</v-edit-dialog>
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.created_at="{item}">
				{{ formatDate(item.created_at) }}
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.updated_at="{item}">
				{{ formatDate(item.updated_at) }}
			</template>
			<!-- eslint-disable-next-line vue/valid-v-slot-->
			<template #item.actions="{item}">
				<v-icon
					small
					color="red"
					@click="openAdminDeleteItemDialog(item.id, item.name)"
				>
					mdi-delete
				</v-icon>
			</template>
		</v-data-table>
		<admin-delete-item-dialog
			model-name="province"
			delete-action="location/deleteProvince"
			@reload="initialize"
		/>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import Snack from "@/mixins/Snack.js";
const urls = require("@/urls.json")
const util = require("util")
import AdminTableList from "@/mixins/AdminTableList.js";
import AdminTableDeleteItemMixin from "@/mixins/AdminTableDeleteItemMixin.js";

export default {
	name: "ProvincesTable",
	components: {
		AddProvinceFormDialog: () => import("@/views/location/AddProvinceFormDialog")
	},
	mixins: [
		AdminTableList,
		AdminTableDeleteItemMixin,
		Snack,
	],
	data() {
		return {
			model: "province",
			headers: [
				{
					text: "actions",
					sortable: false,
					value: "actions",
				},
				{ text: "ID", value: "id" },
				{ text: "NAME", value: "name" },
				{ text: "NUMBER", value: "number" },
				{ text: "CREATED AT", value: "created_at" },
				{ text: "UPDATED AT", value: "updated_at" }
			],
			//edit dialog for field
			nameToUpdate: null,
			numberToUpdate: null,
		}
	},
	computed: {
		...mapGetters({
			provinces: "location/provincesList"
		}),
	},
	methods: {
		openCreateFormDialog() {
			this.$bus.emit("open-add-province-form")
		},
		async initialize(val = null) {
			this.loading = true
			if (!val) val = this.options.page
			await this.$store.dispatch("location/fetchAllProvinces", {page: val})
			this.items = this.provinces
			this.totalItems = this.provinces.count
			this.loading = false
		},
		async updateName(item) {
			try {
				await this.$api.patch(util.format(urls.location.provinceDetail, item.id), {name: this.nameToUpdate})
				await this.openSnack("Province updated successfully", "success")
			} catch (e) {
				const status = parseInt(e.response.status.toString())
				if (status === 400) {
					await this.openSnack(e.response.data["name"][0])
				} else {
					await this.openSnack("Province update failed")
				}
			}
			await this.initialize(this.options.page)
		},
		openNameUpdate(name) {
			this.nameToUpdate = name
		},
		async updateNumber(item) {
			try {
				await this.$api.patch(util.format(urls.location.provinceDetail, item.id), {number: this.numberToUpdate})
				await this.openSnack("Province updated successfully", "success")
				await this.initialize()
			} catch (e) {
				const status = parseInt(e.response.status.toString())
				if (status === 400) {
					await this.openSnack(e.response.data["number"][0])
				} else {
					await this.openSnack("Province update failed")
				}
			}
		},
		openNumberUpdate(number) {
			this.numberToUpdate = number
		}
	}
}
</script>

<style scoped>

</style>
