import Vue from "vue"
import VueRouter from "vue-router"
import helper from "@/Helper.js";

Vue.use(VueRouter)

const routes = [
	{
		path: "/history",
		component: () => import("@/views/showcase/HistorySlider"),
	},
	{
		path: "/",
		component: () => import("@/layouts/ShowCaseLayout"),
		children: [{
			path: "",
			name: "SACHCHAI SHOWCASE",
			component: () => import("@/views/showcase/ShowCase"),
			meta: {
				authentication: false
			}
		}]
	},
	{
		path: "/home",
		component: () => import("@/layouts/HomeLayout"),
		children: [
			{
				path: "feedbacks",
				name: "Feedback",
				components: {
					default: () => import("@/views/home/office/Feedback"),
					sidebar: () => import("@/views/home/office/FeedbackSidebar")
				},
			},
			{
				path: "a-brief-history",
				name: "ABriefHistory",
				components: {
					default: () => import("@/views/home/office/ABriefHistory"),
					sidebar: () => import("@/views/home/office/HistorySidebar")
				},
			},
			{
				path: "faqs",
				name: "FAQs",
				components: {
					default: () => import("@/views/home/office/FAQs"),
					sidebar: () => import("@/views/home/office/FAQsSidebar.vue")
				},
			},
			{
				path: "start-article",
				name: "Editor",
				component: () => import("@/components/ArticleEditor"),
				meta: {
					authentication: true
				}
			},
			{
				path: "feeds:type?",
				name: "HOME",
				components: {
					default: () => import("@/views/home/feeds/Home"),
					sidebar: () => import("@/views/home/feeds/Sidebar")
				},
				meta: {
					authentication: false
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
				components: {
					default: () => import("@/views/home/article/Articles"),
					sidebar: () => import("@/views/home/article/Sidebar")
				},
				meta: {
					authentication: false
				}
			},
			{
				path: "multimedia",
				components: {
					default: () => import("@/views/home/multimedia/Multimedias"),
					sidebar: () => import("@/views/home/multimedia/Sidebar")
				},
				children: [
					{
						path: "",
						name: "SACHCHAI NEPAL MULTIMEDIAS",
						component: () => import("@/views/home/multimedia/Pins"),
						meta: {
							authentication: false
						}
					},
					{
						path: "images",
						name: "Multimedia Photos",
						component: () => import("@/views/home/multimedia/Images"),
						meta: {
							authentication: false
						}
					},
					{
						path: "videos",
						name: "Multimedia Videos",
						component: () => import("@/views/home/multimedia/Videos"),
						meta: {
							authentication: false
						}
					},
					{
						path: "youtube",
						name: "Youtube",
						component: () => import("@/views/home/multimedia/Youtube"),
						meta: {
							authentication: false
						}
					}
				]
			},
			{
				path: "event",
				name: "SACHCHAI NEPAL EVENTS",
				components: {
					default: () => import("@/views/home/event/EventsHome"),
					sidebar: () => import("@/views/home/event/Sidebar")
				},
				meta: {
					authentication: false
				}
			},
			{
				path: "map/branch",
				name: "BRANCHES MAP",
				component: () => import("@/views/map/Branch"),
				meta: {
					authentication: true
				}
			}
		]
	},
	// Detail Views (Requires Full Page)
	{
		path: "/home/article/:id",
		name: "SACHCHAI NEPAL ARTICLE",
		component: () => import("@/components/article/ArticleDetail"),
		meta: {
			authentication: false
		}
	},
	{
		path: "/home/multimedia/:id",
		name: "SACHCHAI NEPAL MULTIMEDIA",
		component: () => import("@/views/multimedia/MultimediaDetail"),
		meta: {
			authentication: false
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
					authentication: false
				}
			},
			{
				path: "discussion",
				name: "Event Discussion",
				component: () => import("@/views/event/detail_tab/Discussion"),
				meta: {
					authentication: false
				}
			},
			{
				path: "images",
				name: "Event Photos",
				component: () => import("@/views/event/detail_tab/Photos"),
				meta: {
					authentication: false
				}
			},
			{
				path: "multimedias",
				name: "Event Multimedias",
				component: () => import("@/views/event/detail_tab/Multimedia"),
				meta: {
					authentication: false
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
				path: "dashboard",
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
				component: () => import("@/views/settings/CountriesTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "province",
				name: "PROVINCE ADMINISTRATION",
				component: () => import("@/views/settings/ProvincesTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "district",
				name: "DISTRICT ADMINISTRATION",
				component: () => import("@/views/settings/DistrictsTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "municipality",
				name: "MUNICIPALITY ADMINISTRATION",
				component: () => import("@/views/settings/MunicipalitiesTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "municipality-ward",
				name: "MUNICIPALITY WARD ADMINISTRATION",
				component: () => import("@/views/settings/MunicipalityWardsTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "vdc",
				name: "VDC ADMINISTRATION",
				component: () => import("@/views/settings/VDCsTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "vdc-ward",
				name: "VDC WARD ADMINISTRATION",
				component: () => import("@/views/settings/VDCWardsTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "article",
				name: "ARTICLES ADMINISTRATION",
				component: () => import("@/views/settings/ArticlesTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},

			{
				path: "article/:id",
				name: "ARTICLE ADMINISTRATION",
				component: () => import("@/views/settings/ArticleDetail"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "multimedia",
				name: "MULTIMEDIA ADMINISTRATION",
				component: () => import("@/views/settings/MultimediasTable"),
				meta: {
					authentication: true,
					admin: true
				}
			},
			{
				path: "multimedia/:id",
				name: "MULTIMEDIA DETAIL ADMINISTRATION",
				component: () => import("@/views/settings/MultimediaDetail"),
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
				component: () => import("@/views/settings/ShowcaseImage"),
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
