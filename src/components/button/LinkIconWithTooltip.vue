<template>
	<v-tooltip bottom>
		<template #activator="{ on, attrs }">
			<a
				v-bind="attrs"
				:color="color"
				:href="to"
				target="_blank"
				class="text-decoration-none"
				v-on="on"
			>
				<v-btn
					:color="color"
					icon
				>
					<v-icon>
						{{ icon }}
					</v-icon>
				</v-btn>
			</a>
		</template>
		<span>{{ tooltip }}</span>
	</v-tooltip>
</template>
<script>
export default {
	name: "LinkIconWithTooltip",
	props: {
		color: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		tooltip: {
			type: String,
			required: true
		},
		to: {
			type: String,
			default: null
		}
	},
	emits: ["click"]
}
</script>
