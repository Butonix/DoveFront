<template>
	<div>
		<v-btn
			class="auth-panel-btn"
			fab
			dark
			fixed
			top
			right
			small
			max-height="65"
			max-width="65"
			color="#dba520"
			@click="toggle = !toggle"
		>
			<v-icon size="24">
				mdi-air-conditioner
			</v-icon>
		</v-btn>
		<v-fab-transition>
			<v-btn
				v-if="$helper.isUserLoggedIn() && toggle"
				class="logout"
				fab
				dark
				fixed
				top
				right
				small
				color="teal"
				@click="logout"
			>
				<v-icon size="20">
					mdi-logout-variant
				</v-icon>
			</v-btn>
		</v-fab-transition>
		<v-fab-transition>
			<v-btn
				v-if="!$helper.isUserLoggedIn() && toggle"
				class="register"
				fab
				dark
				fixed
				top
				right
				small
				color="green"
				@click="routeToRegisterPage"
			>
				<v-icon size="20">
					mdi-account-plus
				</v-icon>
			</v-btn>
		</v-fab-transition>
		<v-fab-transition>
			<v-btn
				v-if="!$helper.isUserLoggedIn() && toggle"
				class="login"
				fab
				dark
				fixed
				top
				right
				small
				color="primary"
				to="/auth/login"
			>
				<v-icon size="20">
					mdi-login-variant
				</v-icon>
			</v-btn>
		</v-fab-transition>
	</div>
</template>

<script>
import router from "@/router";
import Snack from "@/mixins/Snack";

export default {
	name: "AuthPanel",
	mixins: [Snack],
	data: () => ({
		toggle: false
	}),
	methods: {
		routeToRegisterPage() {
			router.push({name: "REGISTER"})
		},
		async logout() {
			const currentUser = this.$helper.getCurrentUser()
			if (!currentUser || (typeof currentUser === "object" && !currentUser.username)) {
				this.$helper.clearApplicationData()
				await this.$router.push({name: "LOG IN"})
			} else {
				const isUserLoggedOut = await this.$store.dispatch(
					"auth/logout",
					currentUser.username
				)
				if (isUserLoggedOut === true) await this.$router.push({name: "LOG IN"})
				else await this.openSnack(isUserLoggedOut)
			}
		},
	}
}
</script>

<style scoped lang="scss">
.auth-panel-btn {
	background: rgb(219 165 32 / 52%);
	top: 20px;
	right: 20px;
}
.logout {
	top: 80px !important;
	right: 20px;
}
.register {
	top: 80px !important;
	right: 20px;
}
.login {
	top: 140px !important;
	right: 20px;
}
</style>
