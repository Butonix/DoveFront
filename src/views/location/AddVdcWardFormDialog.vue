<template>
	<v-dialog
		v-model="createDialog"
		max-width="500px"
	>
		<v-card>
			<v-card-title class="elevation-4">
				<span class="dialog-header">New Vdc Ward</span>
			</v-card-title>
			<div class="py-6" />

			<v-card-text>
				<v-container>
					<v-row class="ma-0 pa-0">
						<v-col cols="12">
							<country-field
								v-model="editedItem.country"
								:province="editedItem.province"
								:errors="addFormErrors"
							/>
						</v-col>
						<v-col cols="12">
							<province-field
								v-model="editedItem.province"
								:country="editedItem.country"
								:district="editedItem.district"
								:errors="addFormErrors"
							/>
						</v-col>
						<v-col cols="12">
							<district-field
								v-model="editedItem.district"
								:province="editedItem.province"
								:vdc="editedItem.vdc"
								:errors="addFormErrors"
							/>
						</v-col>
						<v-col cols="12">
							<vdc-field
								v-model="editedItem.vdc"
								:district="editedItem.district"
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
								type="number"
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
					@click="createVdcWard"
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
	name: "AddVdcWardFormDialog",
	mixins: [Snack],
	emits: ["reload"],
	data: function () {
		return {
			createDialog: false,
			editedItem: {
				name: null,
				number: null,
				vdc: null,
				district: null,
				province: null,
				country: null
			},
			addFormErrors: {},
		};
	},
	async created() {
		this.$bus.on("open-add-vdc-ward-form", this.openDialog)
	},
	beforeUnmount() {
		this.$bus.off("open-add-vdc-ward-form")
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
				vdc: null
			}
			this.addFormErrors = defaultData
			this.editedItem = defaultData
			this.createDialog = false
		},
		async createVdcWard() {
			try {
				await this.$api.post(urls.location.vdcWardList, {
					name: this.editedItem.name,
					number: this.editedItem.number,
					vdc: this.editedItem.vdc
				})
				await this.openSnack("Vdc ward added successfully", "success")
				this.closeDialog()
				this.$emit("reload")
			} catch (e) {
				const status = parseInt(e.response.status.toString())
				if (status === 400) {
					this.addFormErrors = e.response.data
				} else {
					await this.openSnack("Vdc ward create failed")
				}
			}
		},
	}
}
</script>
