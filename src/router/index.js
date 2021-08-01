import Vue from "vue"
import VueRouter from "vue-router"
import HomeLayout from "@/layouts/HomeLayout"
import helper from "@/Helper.js";

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		component: () => import("@/layouts/ShowCaseLayout"),
		children: [{
			path: "",
			name: "SACHCHAI SHOWCASE",
			component: () => import("@/views/showcase/ShowCase"),
			meta: {
				authentication: true
			}
		}]
	},
	{
		path: "/home",
		component: HomeLayout,
		children: [
			{
				path: "start-article",
				name: "Editor",
				component: () => import("@/components/ArticleEditor.vue"),
				meta: {
					authentication: true
				}
			},
			{
				path: "feeds",
				name: "HOME",
				component: () => import("@/views/home/Home"),
				meta: {
					authentication: true
				}
			},
			{
				path: "my-posts",
				name: "MY POSTS",
				component: () => import("@/views/member/MyPosts"),
				meta: {
					authentication: true
				}
			},
			{
				path: "article",
				name: "SACHCHAI NEPAL ARTICLES",
				component: () => import("@/views/home/Articles"),
				meta: {
					authentication: true
				}
			},
			{
				path: "multimedia",
				component: () => import("@/views/home/Multimedias"),
				children: [
					{
						path: "",
						name: "SACHCHAI NEPAL MULTIMEDIAS",
						component: () => import("@/views/home/multimedia/Pins.vue"),
						meta: {
							authentication: true
						}
					},
					{
						path: "images",
						name: "Multimedia Photos",
						component: () => import("@/views/home/multimedia/Images"),
						meta: {
							authentication: true
						}
					},
					{
						path: "videos",
						name: "Multimedia Videos",
						component: () => import("@/views/home/multimedia/Videos"),
						meta: {
							authentication: true
						}
					},
					{
						path: "youtube",
						name: "Youtube",
						component: () => import("@/views/home/multimedia/Youtube"),
						meta: {
							authentication: true
						}
					}
				]
			},
			{
				path: "event",
				name: "SACHCHAI NEPAL EVENTS",
				component: () => import("@/views/event/EventsHome"),
				meta: {
					authentication: true
				}
			},
			{
				path: "map/branch",
				name: "BRANCHES MAP",
				component: () => import("@/views/map/Branch"),
				meta: {
					authentication: true
				}
			},
			{
				path: "map/kendra",
				name: "KENDRA MAP",
				component: () => import("@/views/map/Kendra"),
				meta: {
					authentication: true
				}
			},
		]
	},
	// Detail Views (Requires Full Page)
	{
		path: "/home/article/:id",
		name: "SACHCHAI NEPAL ARTICLE",
		component: () => import("@/components/article/ArticleDetail.vue"),
		meta: {
			authentication: true
		}
	},
	{
		path: "/home/multimedia/:id",
		name: "SACHCHAI NEPAL MULTIMEDIA",
		component: () => import("@/views/multimedia/MultimediaDetail"),
		meta: {
			authentication: true
		}
	},
	{
		path: "/home/event/:id",
		component: () => import("@/views/event/EventDetail"),
		children: [
			{
				path: "about",
				name: "EVENT DETAIL HOME",
				component: () => import("@/views/event/detail_tab/About"),
				meta: {
					authentication: true
				}
			},
			{
				path: "discussion",
				name: "Event Discussion",
				component: () => import("@/views/event/detail_tab/Discussion"),
				meta: {
					authentication: true
				}
			},
			{
				path: "images",
				name: "Event Photos",
				component: () => import("@/views/event/detail_tab/Photos"),
				meta: {
					authentication: true
				}
			},
			{
				path: "multimedias",
				name: "Event Multimedias",
				component: () => import("@/views/event/detail_tab/Multimedia"),
				meta: {
					authentication: true
				}
			}
		]
	},
	{
		name: "unauthorized",
		path: "/unauthorized",
		component: () => import("@/views/settings/Unauthorized")
	},
	{
		path: "/auth/",
		component: () => import("@/layouts/AuthLayout"),
		children: [
			{
				path: "login",
				name: "LOG IN",
				component: () => import("@/views/auth/Login")
			},
			{
				path: "reset-password",
				name: "FORGET PASSWORD",
				component: () => import("@/views/auth/ResetPassword")
			},
			{
				path: "register",
				name: "REGISTER",
				component: () => import("@/views/auth/Register")
			},
		],
	},
	// Settings Routes
	{
		path: "/admin",
		component: () => import("@/layouts/Settings"),
		children: [
			{
				path: "home",
				name: "SACHCHAI KENDRA NEPAL ADMINISTRATION",
				component: () => import("@/views/settings/Home"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "follower",
				name: "FOLLOWERS ADMINISTRATION",
				component: () => import("@/views/settings/FollowersTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "member",
				name: "MEMBERS ADMINISTRATION",
				component: () => import("@/views/settings/MembersTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "follower/:id",
				name: "FOLLOWER ADMINISTRATION",
				component: () => import("@/views/member/FollowerDetail"),
				meta: {
					authentication: true
				}
			},
			{
				path: "branch",
				name: "BRANCHES ADMINISTRATION",
				component: () => import("@/views/settings/BranchTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "branch/:id",
				name: "BRANCH ADMINISTRATION",
				component: () => import("@/views/branch/BranchDetail"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "country",
				name: "COUNTRY ADMINISTRATION",
				component: () => import("@/views/settings/CountriesTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "province",
				name: "PROVINCE ADMINISTRATION",
				component: () => import("@/views/settings/ProvincesTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "district",
				name: "DISTRICT ADMINISTRATION",
				component: () => import("@/views/settings/DistrictsTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "municipality",
				name: "MUNICIPALITY ADMINISTRATION",
				component: () => import("@/views/settings/MunicipalitiesTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "municipality-ward",
				name: "MUNICIPALITY WARD ADMINISTRATION",
				component: () => import("@/views/settings/MunicipalityWardsTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "vdc",
				name: "VDC ADMINISTRATION",
				component: () => import("@/views/settings/VDCsTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "vdc-ward",
				name: "VDC WARD ADMINISTRATION",
				component: () => import("@/views/settings/VDCWardsTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "article",
				name: "ARTICLES ADMINISTRATION",
				component: () => import("@/views/settings/ArticlesTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},

			{
				path: "article/:id",
				name: "ARTICLE ADMINISTRATION",
				component: () => import("@/views/settings/ArticleDetail.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "multimedia",
				name: "MULTIMEDIA ADMINISTRATION",
				component: () => import("@/views/settings/MultimediasTable.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "multimedia/:id",
				name: "MULTIMEDIA DETAIL ADMINISTRATION",
				component: () => import("@/views/multimedia/MultimediaDetail.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "event",
				name: "EVENTS ADMINISTRATION",
				component: () => import("@/views/settings/EventsTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "showcase-gallery",
				name: "SHOWCASE GALLERY ADMINISTRATION",
				component: () => import("@/views/settings/ShowcaseImage.vue"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "ad",
				name: "ADS ADMINISTRATION",
				component: () => import("@/views/settings/AdsTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "about-us",
				name: "ABOUT US ADMINISTRATION",
				component: () => import("@/views/settings/AboutUsTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "contact-us",
				name: "CONTACT US ADMINISTRATION",
				component: () => import("@/views/settings/ContactUsTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "service",
				name: "SERVICES ADMINISTRATION",
				component: () => import("@/views/settings/ServicesTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "feedback",
				name: "FEEDBACK ADMINISTRATION",
				component: () => import("@/views/settings/FeedbacksTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "showcase-map",
				name: "MAP ADMINISTRATION",
				component: () => import("@/views/settings/MapAdmin"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "kendra-information",
				name: "KENDRA INFO ADMIN",
				component: () => import("@/views/settings/KendraInformation"),
				meta: {
					authentication: true,
					admin: true
				}
			},
		]
	},
	{
		path: "/profile",
		name: "FOLLOWER PROFILE",
		component: () => import("@/layouts/ProfileLayout"),
		children: [
			{
				path: "event",
				name: "PROFILE EVENTS",
				component: () => import("@/views/profile/EventsTab"),
				meta: {
					authentication: true
				}
			},
			{
				path: "home",
				name: "ABOUT ME",
				component: () => import("@/views/profile/AboutMeTab"),
				meta: {
					authentication: true
				}
			},
			{
				path: "photo",
				name: "MY PHOTOS",
				component: () => import("@/views/profile/PhotosTab"),
				meta: {
					authentication: true
				}
			},
			{
				path: "multimedia",
				name: "MY MULTIMEDIAS",
				component: () => import("@/views/profile/MultimediaTab"),
				meta: {
					authentication: true
				}
			},
			{
				path: "change-password",
				name: "CHANGE PASSWORD",
				component: () => import("@/views/profile/ChangePassword")
			},
			{
				path: "feedback",
				name: "MY FEEDBACKS",
				component: () => import("@/views/profile/MyFeedbacks"),
				meta: {
					authentication: true
				}
			},
			{
				path: "contribution",
				name: "MY CONTRIBUTIONS",
				component: () => import("@/views/profile/MyContributions"),
				meta: {
					authentication: true
				}
			},
			{
				path: "edit-detail",
				name: "EDIT DETAIL",
				component: () => import("@/views/profile/EditProfile"),
				meta: {
					authentication: true
				}
			},
			{
				path: "location",
				name: "LOCATION",
				component: () => import("@/views/profile/LocationInfo"),
				meta: {
					authentication: true
				}
			},
			{
				path: "branch",
				name: "MY BRANCH",
				component: () => import("@/views/profile/MyBranchInfo"),
				meta: {
					authentication: true
				}
			},
			{
				path: "membership",
				name: "MEMBERSHIP INFORMATION",
				component: () => import("@/views/profile/Membership"),
				meta: {
					authentication: true
				}
			},
		],
	},
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
})


router.beforeEach((to, from, next) => {
	if (to.meta.authentication) {
		const token = helper.getAccessToken()
		if (token) {
			if(to.meta.admin) {
				if (helper.getCurrentUser().is_superuser) {
					next();
				} else {
					next("/unauthorized");
				}
			} else {
				next()
			}
		} else {
			next("/auth/login");
		}
	} else {
		next();
	}
});

export default router
