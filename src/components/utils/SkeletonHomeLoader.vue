<template>
	<v-card
		light tile
		flat
		height="100vh"
		width="100vw"
		color="#f3edff"
	>
		<v-toolbar>
			<v-skeleton-loader
				type="list-item-avatar"
			/>
			<div
				v-if="$vuetify.breakpoint.mdAndUp"
				class="d-flex align-center"
			>
				<v-skeleton-loader
					v-for="n in 4"
					:key="n"
					class="mx-2"
					type="button"
				/>
			</div>
			<div v-else>
				<v-skeleton-loader
					v-for="n in 1"
					:key="n"
					class="mx-2"
					type="button"
				/>
			</div>
			<v-spacer />
			<v-skeleton-loader
				type="list-item-avatar"
			/>
		</v-toolbar>
		<div class="py-4" />
		<v-card
			class="mx-auto transparent"
			max-width="900"
			flat
		>
			<v-row justify="center">
				<v-col
					v-show="$vuetify.breakpoint.mdAndUp"
					xl="3"
					lg="3"
					md="3"
				>
					<v-card rounded="xl"
						outlined
					>
						<v-list rounded
							color="transparent"
						>
							<v-skeleton-loader
								v-for="n in 8"
								:key="n"
								type="list-item-avatar"
							/>
						</v-list>
					</v-card>
				</v-col>
				<v-col xl="6"
					lg="6"
					md="6"
					sm="10"
					cols="10"
				>
					<v-card rounded="xl">
						<v-card-text>
							<v-skeleton-loader
								type="list-item-avatar"
							/>
						</v-card-text>
						<v-skeleton-loader
							type="divider"
						/>
						<v-card-actions class="justify-space-between">
							<v-skeleton-loader
								v-for="n in 5"
								:key="n"
								type="button"
								class="ma-1"
							/>
						</v-card-actions>
					</v-card>
					<div>
						<v-card
							v-for="n in 2"
							:key="n"
							rounded="xl"
							class="my-4"
						>
							<v-skeleton-loader
								type="list-item-avatar, card"
							/>
						</v-card>
					</div>
				</v-col>
				<v-col
					v-show="$vuetify.breakpoint.mdAndUp"
					xl="3"
					lg="3"
					md="3"
				>
					<v-card rounded="xl"
						outlined
					>
						<v-list rounded
							color="transparent"
						>
							<v-skeleton-loader
								v-for="n in 8"
								:key="n"
								type="list-item-avatar"
							/>
						</v-list>
					</v-card>
				</v-col>
			</v-row>
		</v-card>
	</v-card>
</template>

<script>
export default {
	name: "SkeletonHomeLoader"
}
</script>

<style scoped>

</style>
