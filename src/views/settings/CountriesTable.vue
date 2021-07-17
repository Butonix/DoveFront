<template>
	<div>
		<!-- eslint-disable-next-line vue/no-deprecated-v-bind-sync -->
		<v-data-table :options.sync="options"
			:headers="headers"
			:items="items.results"
			:server-items-length="getTotalPaginationData"
			:items-per-page="getItemsPerPageCount"
			:loading="loading"
			loading-text="Loading countries..."
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
							size="20"
						>
							mdi-web
						</v-icon>
					</v-avatar>
					<v-toolbar-title
						v-show="$vuetify.breakpoint.smAndUp"
						class="table-title pl-1"
					>
						Countries
					</v-toolbar-title>
					<v-divider
						class="mx-4"
						inset
						vertical
					/>
					<v-text-field
						v-model="search"
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
						<span v-if="$vuetify.breakpoint.smAndUp">Country</span>
					</v-btn>


					<add-country-form-dialog @reload="initialize" />
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
							label="District Name"
							single-line
							counter
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
			model-name="country"
			delete-action="location/deleteCountry"
			@reload="initialize"
		/>
	</div>
</template>

<script>
import AdminTableList from "@/mixins/AdminTableList.js";
import AdminTableDeleteItemMixin from "@/mixins/AdminTableDeleteItemMixin.js";
import {mapGetters} from "vuex";
import * as util from "util";
import Snack from "@/mixins/Snack.js";
const urls = require("@/urls.json")

export default {
	name: "CountriesTable",
	components: {
		AddCountryFormDialog: () => import("@/views/location/AddCountryFormDialog")
	},
	mixins: [AdminTableList, AdminTableDeleteItemMixin, Snack],
	data() {
		return {
			model: "country",
			headers: [
				{
					text: "actions",
					sortable: false,
					value: "actions",
				},
				{ text: "ID", value: "id" },
				{ text: "NAME", value: "name" },
				{ text: "CREATED AT", value: "created_at" },
				{ text: "UPDATED AT", value: "updated_at" }
			],
			//edit dialog for field
			nameToUpdate: null
		}
	},
	computed: {
		...mapGetters({
			districts: "location/countriesList"
		}),
	},
	methods: {
		openCreateFormDialog() {
			this.$bus.emit("open-add-country-form")
		},
		async initialize(val = null) {
			this.loading = true
			if (!val) val = this.options.page
			await this.$store.dispatch("location/fetchAllCountries", {page: val})
			this.items = this.districts
			this.totalItems = this.districts.count
			this.loading = false
		},
		async updateName(item) {
			try {
				await this.$api.patch(util.format(urls.location.countryDetail, item.id), {name: this.nameToUpdate})
				await this.openSnack("Country updated successfully", "success")
			} catch (e) {
				const status = parseInt(e.response.status.toString())
				if (status === 400) {
					await this.openSnack(e.response.data["name"][0])
				} else {
					await this.openSnack("Country update failed")
				}
			}
			await this.initialize(this.options.page)
		},
		openNameUpdate(name) {
			this.nameToUpdate = name
		},
	},
}
</script>

<style scoped>

</style>
