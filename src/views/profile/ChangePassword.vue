<template>
	<div>
		<v-card
			class="mx-auto"
			max-width="600"
			flat
		>
			<header-toolbar />
			<div class="py-2" />
			<v-row class="pa-0 ma-0">
				<text-field
					v-model="changePassword.password"
					icon="mdi-lock-open"
					label="Current password"
					type="password"
					:errors="errors"
					name="password"
				/>
				<text-field
					v-model="changePassword.new_password"
					icon="mdi-lock-question"
					label="New password"
					type="password"
					:errors="errors"
					name="new_password"
				/>
				<text-field
					v-model="changePassword.confirm_password"
					icon="mdi-lock-check"
					label="Confirm new password"
					type="password"
					:errors="errors"
					name="confirm_password"
				/>
				<v-col cols="12"
					class="d-flex justify-center pa-4"
				>
					<v-btn
						:loading="updating"
						depressed
						rounded
						outlined
						color="primary"
						height="50"
						@click="updatePassword"
					>
						Update Password
					</v-btn>
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>
<script>
import Snack from "@/mixins/Snack.js";
import {mapGetters} from "vuex";

export default {
	name: "ChangePasswordDialog",
	components: {
		HeaderToolbar: () => import("@/views/profile/HeaderToolbar.vue")
	},
	mixins: [Snack],
	data: () => ({
		updating: false,
		changePassword: {
			password: null,
			new_password: null,
			confirm_password: null
		},
	}),
	computed: {
		...mapGetters({
			errors: "user/formErrors"
		})
	},
	methods: {
		clearForm() {
			this.changePassword = {
				password: null,
				new_password: null,
				confirm_password: null
			}
		},
		async updatePassword() {
			this.updating = true
			const updated = await this.$store.dispatch("user/changePassword", this.changePassword)
			if (updated) {
				this.clearForm()
				await this.$store.dispatch("user/clearFormErrors")
				await this.$router.push({name: "LOG IN"})
				await this.openSnack("Password updated successfully. Please re-login to the system.", "success", 5000)
			} else {
				if (this.errors["non_field_errors"]) {
					await this.openSnack(this.errors["non_field_errors"][0], "error", 5000)
				} else if (this.errors.detail) {
					await this.openSnack(this.errors.detail, "error", 5000)
				} else {
					await this.openSnack("Password update failed. Please try again.")
				}
			}
			this.updating = false
		}
	}
}
</script>
