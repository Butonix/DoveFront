<template>
	<v-card v-if="multimedia">
		<v-card-title>
			<v-btn icon
				to="/admin/multimedia"
			>
				<v-icon small>
					mdi-arrow-left
				</v-icon>
			</v-btn>
			<div class="px-3">
				{{ multimedia.title }}
			</div>
			<v-chip class="ma-1">
				{{ multimedia.type }}
			</v-chip>
			<v-icon v-if="multimedia.is_pinned"
				color="primary"
			>
				mdi-pin
			</v-icon>
			<v-icon v-if="multimedia.is_approved"
				color="success"
			>
				mdi-check
			</v-icon>
		</v-card-title>
		<v-card-subtitle>
			<v-chip small
				class="ma-1"
				color="green lighten-3"
			>
				<v-icon left
					color="green darken-3"
				>
					mdi-account-check
				</v-icon>
				<span class="green--text text--darken-4">{{ multimedia.approved_by.username }}</span>
			</v-chip>
			<v-chip small
				class="ma-1"
				color="green lighten-3"
			>
				<v-icon left
					color="green darken-3"
				>
					mdi-calendar-check
				</v-icon>
				<span class="green--text text--darken-4">{{ $moment(multimedia.approved_at).fromNow() }}</span>
			</v-chip>
			<v-chip small
				class="ma-1"
				color="blue lighten-3"
			>
				<v-icon left
					color="blue darken-3"
				>
					mdi-account-plus
				</v-icon>
				<span class="blue--text text--darken-3">
					{{ multimedia.uploaded_by.username }}
				</span>
			</v-chip>
			<v-chip small
				class="ma-1"
				color="blue lighten-3"
			>
				<v-icon left
					color="blue darken-2"
				>
					mdi-calendar-plus
				</v-icon>
				<span class="blue--text text--darken-3">
					{{ $moment(multimedia.timestamp).fromNow() }}
				</span>
			</v-chip>
		</v-card-subtitle>
		<v-divider />
		<v-card-text v-if="multimedia.description">
			{{ multimedia.description }}
		</v-card-text>
		<v-card-text v-else>
			No description.
		</v-card-text>
		<v-divider />
		<v-list>
			<v-subheader>Media</v-subheader>
			<v-list-item-group>
				<v-subheader>Images ({{ multimedia.multimedia_images.length }})</v-subheader>
				<v-list-item
					v-for="item in multimedia.multimedia_images"
					:key="item.image"
				>
					<v-card height="300"
						dark
						width="100%"
						class="py-1"
					>
						<v-img :src="$helper.replaceBackendHost(item.image)"
							height="300"
						/>
					</v-card>
				</v-list-item>
			</v-list-item-group>
			<v-list-item-group>
				<v-subheader>Videos ({{ multimedia.multimedia_videos.length }})</v-subheader>
				<v-list-item
					v-for="item in multimedia.multimedia_videos"
					:key="item.video"
					class="py-1"
				>
					<v-card height="300"
						dark
						width="100%"
					>
						<video
							height="100%"
							width="100%"
							controls
							crossorigin="anonymous"
							:src="$helper.replaceBackendHost(item.video)"
							@play="onPlay"
						/>
					</v-card>
				</v-list-item>
			</v-list-item-group>
			<v-list-item-group>
				<v-subheader>Youtube Videos ({{ multimedia.multimedia_video_urls.length }})</v-subheader>
				<v-list-item
					v-for="item in multimedia.multimedia_video_urls"
					:key="item.video_url"
					class="py-1"
				>
					<v-card
						dark
						height="300"
						width="100%"
					>
						<youtube
							ref="yt"
							height="100%"
							width="100%"
							:video-id="$youtube.getIdFromUrl(item.video_url)"
							@playing="playing"
						/>
					</v-card>
				</v-list-item>
			</v-list-item-group>
		</v-list>
		<v-divider />
		<v-list
			two-line
			rounded
			dense
		>
			<v-subheader>Comments ({{ multimedia.comments.length }})</v-subheader>
			<v-list-item v-for="item in multimedia.comments"
				:key="item.id"
				two-line
			>
				<v-list-item-avatar
					color="grey darken-1"
					class="white--text"
					size="50"
				>
					<span
						v-if="item.writer"
						class="headline"
					>
						{{ item.writer.username[0].toUpperCase() }}
					</span>
					<span v-else>A</span>
				</v-list-item-avatar>
				<v-list-item-content
					class="comment-item-content"
				>
					<v-list-item-subtitle class="d-flex">
						<div class="chip-like">
							<v-icon size="14"
								class="px-1"
							>
								mdi-account-plus
							</v-icon>
							<div v-if="item.writer">
								{{ item.writer.username }}
							</div>
							<div v-else>
								Anonymous
							</div>
						</div>
						<div class="chip-like">
							<v-icon size="14"
								class="px-1"
							>
								mdi-account-plus
							</v-icon>
							<div>
								{{ $moment(item.created_at).fromNow() }}
							</div>
						</div>
					</v-list-item-subtitle>
					<v-list-item-title class="comment-text">
						{{ item.comment }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import HtmlVideoMixin from "@/mixins/HtmlVideoMixin.js";

export default {
	name: "MultimediaDetail",
	mixins: [HtmlVideoMixin],
	computed: {
		...mapGetters({
			multimedia: "multimedia/inView"
		})
	}
}
</script>

<style scoped lang="scss">
.comment-item-content {
	border-radius: 24px;
	background-color: #eaeaea;
	padding: 6px 12px !important;
	.chip-like {
		display: flex;
		align-items: center;
		justify-items: center;
		justify-content: space-between;
		background-color: #ecf6ff;
		padding: 4px;
		margin: 2px;
		border-radius: 24px;
		font-size: 12px;
	}
	.comment-text {
		background-color: #c6c6c6;
		border-radius: 24px;
		padding: 8px 6px;
	}
}
</style>
