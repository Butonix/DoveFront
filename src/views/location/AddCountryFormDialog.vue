<template>
	<v-dialog
		v-model="createDialog"
		max-width="500px"
	>
		<v-card min-height="300">
			<v-card-title class="elevation-4">
				<span class="dialog-header">New Country</span>
			</v-card-title>
			<div class="py-6" />

			<v-card-text>
				<v-container>
					<v-row class="ma-0 pa-0">
						<v-col cols="12">
							<text-field
								v-model="editedItem.name"
								name="name"
								label="Name"
								:errors="addFormErrors"
								icon="mdi-format-title"
							/>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

			<v-card-actions class="mx-6">
				<v-spacer />
				<v-btn
					color="error darken-1"
					text
					@click="closeDialog"
				>
					Cancel
				</v-btn>
				<v-btn
					color="blue darken-1"
					text
					@click="createCountry"
				>
					Save
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import Snack from "@/mixins/Snack";
const urls = require("@/urls.json")
const util = require("util")
export default {
	name: "AddCountryFormDialog",
	mixins: [Snack],
	emits: ["reload"],
	data: () => ({
		createDialog: false,
		editedItem: {
			name: null
		},
		addFormErrors: {}
	}),
	async created() {
		this.$bus.on("open-add-country-form", this.openDialog)
	},
	beforeUnmount() {
		this.$bus.off("open-add-country-form")
	},
	methods: {
		openDialog() {
			this.createDialog = true
			this.addFormErrors = {}
		},
		closeDialog() {
			const defaultData = {
				name: null,
			}
			this.addFormErrors = defaultData
			this.editedItem = defaultData
			this.createDialog = false
		},
		async createCountry() {
			try {
				await this.$api.post(urls.location.countryList, {
					name: this.editedItem.name,
				})
				await this.openSnack("Country added successfully", "success")
				this.closeDialog()
				this.$emit("reload")
			} catch (e) {
				const status = parseInt(e.response.status.toString())
				if (status === 400) {
					this.addFormErrors = e.response.data
				} else {
					await this.openSnack("Country create failed")
				}
			}
		}
	}
}
</script>

<style scoped>

</style>
