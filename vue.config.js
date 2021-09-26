module.exports = {
	transpileDependencies: ["vuetify"],
	publicPath: "./",
	devServer: {
		proxy: "https://backend.sachchaikendranepal.org.np"
	}
}
