<template>
	<v-card
		flat
		class="mx-auto transparent pa-4"
	>
		<v-card
			v-if="onGoingArticle"
		>
			<v-toolbar
				flat
			>
				<v-app-bar-nav-icon class="editor-nav-icon">
					<v-avatar>
						<v-img :src="require('@/assets/start_writing.png')" />
					</v-avatar>
				</v-app-bar-nav-icon>
				<v-toolbar-title class="pl-1 start-writing">
					Start Writing
				</v-toolbar-title>
				<v-spacer />
				<div class="mx-1" />
				<v-tooltip v-if="mode === 'start'"
					bottom
				>
					<template #activator="{on, attrs}">
						<v-btn
							color="indigo lighten-2"
							fab small
							class="mr-1"
							v-bind="attrs"
							dark
							@click="saveDraft" v-on="on"
						>
							<v-icon class="px-1">
								mdi-content-save
							</v-icon>
						</v-btn>
					</template>
					<span>Draft</span>
				</v-tooltip>
				<v-tooltip bottom>
					<template #activator="{on, attrs}">
						<v-btn
							color="primary"
							dark fab
							small class="post-article"
							v-bind="attrs"
							@click="postArticle"
							v-on="on"
						>
							<v-icon class="publish-icon px-1">
								mdi-send
							</v-icon>
						</v-btn>
					</template>
					<span>Publish</span>
				</v-tooltip>
			</v-toolbar>
			<v-fab-transition>
				<v-card
					v-if="!cover"
					height="300"
					tile
					flat
					class="upload-card"
					:color="(topImage) ? '' : 'grey lighten-2'"
					dark
				>
					<input
						v-show="false"
						id="top-image-input"
						ref="topImageInput"
						class="file-input"
						type="file"
						accept="image/*"
						@change="topImageInputChanged"
					>
					<v-fade-transition>
						<div
							v-if="!topImage"
							class="upload-wrapper"
						>
							<v-img
								class="upload-image"
								contain
								:src="getTopImage"
								height="60"
								@click="openUploader"
							/>
						</div>
						<v-img
							v-else
							contain
							height="300"
							max-width="936"
							:src="topImageUrl"
							class="cover-image"
						>
							<v-btn fab
								x-small
								class="ma-3 clear-image"
								@click="clearTopImage"
							>
								<v-icon
									color="red lighten-4"
								>
									mdi-close
								</v-icon>
							</v-btn>
							<v-btn fab
								x-small
								class="ma-3 set-image"
								@click.stop="setCoverImage"
							>
								<v-icon
									color="green lighten-3"
								>
									mdi-check
								</v-icon>
							</v-btn>
						</v-img>
					</v-fade-transition>
				</v-card>
				<v-card
					v-else
					flat
					tile
					height="400"
					color="grey lighten-1"
				>
					<v-img
						contain
						:src="$helper.replaceBackendHost(cover['image'])"
						height="400"
					>
						<v-btn
							v-if="mode !== 'view'"
							fab
							x-small
							color="red lighten-1"
							class="ma-4"
							@click="deleteCover"
						>
							<v-icon color="grey lighten-2">
								mdi-delete
							</v-icon>
						</v-btn>
					</v-img>
				</v-card>
			</v-fab-transition>
			<v-card flat rounded
				color="transparent"
				max-width="860"
				class="mx-auto"
			>
				<v-text-field
					v-model="headline"
					outlined
					color="grey"
					class="elevation-0 article-headline"
					height="80"
					full-width
					placeholder="YOUR ARTICLE HEADER"
				/>
			</v-card>
			<v-card max-width="860"
				class="mx-auto px-8"
				flat color="transparent"
			>
				<v-combobox
					v-model="tags"
					filled
					label="Set tags for your article"
					multiple
					chips
					full-width
				>
					<template #selection="data">
						<v-chip
							:key="JSON.stringify(data.item)"
							v-bind="data.attrs"
							:input-value="data.selected"
							:disabled="data.disabled"
							@click:close="data.parent.selectItem(data.item)"
						>
							<v-avatar
								class="accent white--text"
								left
								v-text="data.item.slice(0, 1).toUpperCase()"
							/>
							#{{ data.item.toLowerCase() }}
						</v-chip>
					</template>
				</v-combobox>
			</v-card>
			<div
				id="editorjs"
				class="article-editor rounded"
			/>
		</v-card>
	</v-card>
</template>
<script>
import $ from "jquery"
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Underline from "@editorjs/underline";
import TextVariantTune from "@editorjs/text-variant-tune";
const Quote = require("@editorjs/quote");
const Marker = require("@editorjs/marker");
const Checklist = require("@editorjs/checklist");
const Paragraph = require("editorjs-paragraph-with-alignment");
const Embed = require("@editorjs/embed");
import Undo from "editorjs-undo";
const urls = require("@/urls.json")
import DragDrop from "editorjs-drag-drop";
import {getAccessToken} from "@/Helper.js";
import Snack from "@/mixins/Snack.js";
import Table from "@editorjs/table";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
import SocialPost from "editorjs-social-post-plugin";
import * as EditorJSStyle from "editorjs-style";
const RawTool = require("@editorjs/raw");


export default {
	mixins: [Snack],
	props: {
		onGoingArticle: {
			type: Object,
			required: true
		},
		mode: {
			type: String,
			default: "start"
		}
	},
	data: () => ({
		editor: null,
		topImage: null,
		topImageUrl: null,
		headline: null,
		tags: null,
		cover: null
	}),
	computed: {
		getTopImage() {
			return require("@/assets/upload_image_icon.png")
		},
	},
	async created() {
		await this.initialize()
		await this.initEditor(this.onGoingArticle)
	},
	methods: {
		async initialize() {
			this.headline = this.onGoingArticle.title
			if (this.onGoingArticle.tags) {
				this.tags = this.onGoingArticle.tags.split(",")
			}
			if (this.onGoingArticle["cover_image"]) {
				this.cover = this.onGoingArticle["cover_image"]
			}
		},
		initEditor(article) {
			this.editor = new EditorJS({
				onReady: () => {
					const editor = this.editor
					const undo = new Undo({ editor });
					new DragDrop(editor);
				},
				autofocus: true,
				holder: "editorjs",
				tools: {
					textVariant: TextVariantTune,
					alignmentTune: AlignmentBlockTune,
					header: {
						class: Header,
						shortcut: "CMD+SHIFT+H",
						config: {
							placeholder: "Enter a header",
							levels: [1, 2, 3, 4, 5],
							defaultLevel: 2
						},
						tunes: ["alignmentTune"]
					},
					underline: Underline,
					list: List,
					quote: {
						class: Quote,
						inlineToolbar: true,
						shortcut: "CMD+SHIFT+O",
						config: {
							quotePlaceholder: "Enter a quote",
							captionPlaceholder: "Quote's author",
						},
					},
					Marker: {
						class: Marker,
						shortcut: "CMD+SHIFT+M",
					},
					checklist: {
						class: Checklist,
						inlineToolbar: true,
					},
					paragraph: {
						class: Paragraph,
						inlineToolbar: true,
					},
					image: {
						class: ImageTool,
						config: {
							/**
							 * Custom uploader
							 */
							uploader: {
								/**
								 * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
								 * @param {string} url - pasted image URL
								 * @return {Promise.<{success, file: {url}}>}
								 */
								uploadByUrl(url) {
									var formData = new FormData();
									formData.append("image_url", url)
									formData.append("article", article.id)
									return $.ajax({
										url: `${process.env.VUE_APP_BACKEND_HOST}/api/${urls.articleImageUrl.list}`,
										type: "post",
										headers: {
											"Authorization": "Token " + getAccessToken()
										},
										contentType: false,
										data: formData,
										processData: false,
									}).then(res => {
										return {
											success: 1,
											file: {
												url: res.image_url,
											}
										};
									})
								},
								/**
								 * Upload file to the server and return an uploaded image data
								 * @param {File} file - file selected from the device or pasted by drag-n-drop
								 * @return {Promise.<{success, file: {url}}>}
								 */
								uploadByFile(file){
									var formData = new FormData();
									formData.append("image", file)
									formData.append("article", article.id)
									return $.ajax({
										url: `${process.env.VUE_APP_BACKEND_HOST}/api/${urls.articleImage.list}`,
										type: "post",
										headers: {
											"Authorization": "Token " + getAccessToken()
										},
										contentType: false,
										data: formData,
										processData: false,
									}).then(res => {
										return {
											success: 1,
											file: {
												url: $helper.replaceBackendHost(res.image),
											}
										};
									})
								},
							}
						}
					},
					embed: Embed,
					table: {
						class: Table,
						inlineToolbar: true,
						config: {
							rows: 2,
							cols: 3,
						},
					},
					socialPost: SocialPost,
					raw: RawTool,
					style: EditorJSStyle.StyleInlineTool,
				},
				tunes: ["textVariant"],
				data: (this.onGoingArticle.description)
					? JSON.parse(this.onGoingArticle.description)
					: {}
			})
		},
		async saveDraft() {
			if (this.mode !== "start") return
			const outputData = await this.editor.save()
			const res = await this.$store.dispatch("article/patch", {
				id: this.onGoingArticle.id,
				body: {
					title: this.headline,
					description: JSON.stringify(outputData),
					tags: (this.tags.length > 0) ? this.tags.join(",") : null
				}
			})
			if (res) await this.openSnack("Your article is saved as draft successfully.", "success")
			else await this.openSnack("Failed to save article as draft. Please try again.")
		},
		checkHeadline() {
			if(!this.headline) {
				this.openSnack("Please set a headline for your article.")
				return false
			} return true
		},
		async postArticle() {
			if (!this.checkHeadline()) return
			const outputData = await this.editor.save()
			const res = await this.$store.dispatch("article/patch", {
				id: this.onGoingArticle.id,
				body: {
					title: this.headline,
					description: JSON.stringify(outputData)
				}
			})
			if(res) {
				if (this.mode === "start") {
					const res = await this.$store.dispatch("article/completeWriting", {id: this.onGoingArticle.id})
					if (res) {
						await this.openSnack("Your article is published and will be visible after approval.", "success")
						await this.$router.push({name: "HOME"})
					}
					else await this.openSnack("Article failed to be completed. Please try again")
				} else {
					await this.openSnack("Article updated successfully.")
				}
			}
			else await this.openSnack("Article publish failed. Please try again")
		},
		openUploader() {
			this.$refs.topImageInput.click()
		},
		topImageInputChanged(e) {
			if (e.target.getAttribute("id") === "top-image-input") {
				this.topImage = e.target.files[0]
				this.topImageUrl = URL.createObjectURL(this.topImage)
			}
		},
		clearTopImage() {
			this.topImage = null
			this.topImageUrl = null
		},
		async setCoverImage() {
			const formData = this.$helper.getFormData({
				article: this.onGoingArticle.id,
				image: this.topImage
			})
			await this.$store.dispatch("article/addCoverImage", formData)
			await this.$store.dispatch("article/fetchSingle", {id: this.onGoingArticle.id})
			await this.initialize()
		},
		async deleteCover() {
			if (["start", "edit"].includes(this.mode)) {
				await this.$store.dispatch("article/deleteCover", {id: this.cover.id})
				await this.$store.dispatch("article/fetchSingle", {id: this.onGoingArticle.id})
				await this.initialize()
				this.cover = null
			}
		}
	}
}
</script>

<style lang="sass" scoped>
::v-deep.article-headline input
	color: dimgrey !important
	background-color: transparent
	border-radius: 10px
	font-size: 2.1rem
	line-height: 2.5rem
	font-weight: 600
	padding: 2px 4px
	min-height: 70px
.article-editor
	background-color: #f6fafe
	max-width: 800px
	min-height: 50vh
	margin: auto
	padding-top: 40px
.article-headline
	margin: auto
	padding: 30px 30px 0 30px
.upload-image
	filter: grayscale(100%)
	opacity: .8
	cursor: pointer
	transition: all .5s
.upload-image:hover
	filter: grayscale(0)
	opacity: 1
.upload-card
	display: flex
	align-items: center
	justify-content: center
.upload-wrapper
	border: 2px dashed grey
	border-radius: 6px !important
	padding: 12px
	width: 80vw
	max-width: 600px
.start-writing
	color: dimgrey
	font-size: 1rem
	line-height: 1.4rem
	min-height: 1.6rem
	margin-bottom: -4px
.publish-icon
	transform: rotate(340deg)
	margin-top: -4px
.cover-image
	position: relative
	.clear-image
		position: absolute
		left: 20px
	.set-image
		position: absolute
		right: 20px
</style>
<style lang="scss">
.ce-toolbar__plus {
	border: 1px solid #e6f3fd;
	border-radius: 30%;
	background-color: #fdfdfd;
}
.ce-toolbox {
	background-color: #fdfdfd;
	border-radius: 4px;
	border: 1px solid #e4e4ff;
	padding: 4px;
}
.editor-nav-icon {
	font-size: 1.4rem;
}
</style>
