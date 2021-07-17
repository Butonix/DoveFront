<template>
	<v-dialog
		v-model="createDialog"
		max-width="500px"
	>
		<v-card>
			<v-card-title class="elevation-4">
				<span class="dialog-header">New Province</span>
			</v-card-title>
			<div class="py-6" />

			<v-card-text>
				<v-container>
					<v-row class="ma-0 pa-0">
						<v-col cols="12">
							<country-field
								v-model="editedItem.country"
								:errors="addFormErrors"
							/>
						</v-col>
						<v-col cols="12">
							<text-field
								v-model="editedItem.name"
								name="name"
								label="Name"
								:errors="addFormErrors"
								icon="mdi-format-title"
							/>
						</v-col>
						<v-col cols="12">
							<text-field
								v-model="editedItem.number"
								name="number"
								label="Number"
								:errors="addFormErrors"
								icon="mdi-numeric"
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
					@click="createProvince"
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
	name: "AddProvinceFormDialog",
	mixins: [Snack],
	emits: ["reload"],
	data: function () {
		return {
			createDialog: false,
			editedItem: {
				name: null,
				number: null,
				country: null
			},
			addFormErrors: {},
		};
	},
	async created() {
		this.$bus.on("open-add-province-form", this.openDialog)
	},
	beforeUnmount() {
		this.$bus.off("open-add-province-form")
	},
	methods: {
		openDialog() {
			this.createDialog = true
			this.addFormErrors = {}
		},
		closeDialog() {
			const defaultData = {
				name: null,
				number: null,
				country: null
			}
			this.addFormErrors = defaultData
			this.editedItem = defaultData
			this.createDialog = false
		},
		async createProvince() {
			try {
				await this.$api.post(urls.location.provinceList, {
					name: this.editedItem.name,
					number: this.editedItem.number,
					country: this.editedItem.country
				})
				await this.openSnack("Province added successfully", "success")
				this.closeDialog()
				this.$emit("reload")
			} catch (e) {
				const status = parseInt(e.response.status.toString())
				if (status === 400) {
					this.addFormErrors = e.response.data
				} else {
					await this.openSnack("Province create failed")
				}
			}
		},
	}
}
</script>
