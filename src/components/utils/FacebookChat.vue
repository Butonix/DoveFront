<template>
	<div>
		<!-- Messenger Chat plugin Code -->
		<div id="fb-root" />

		<!-- Your Chat plugin code -->
		<div id="fb-customer-chat"
			class="fb-customerchat"
		/>
	</div>
</template>

<script>
export default {
	name: "FacebookChat",
	mounted() {
		const chat_box = document.getElementById("fb-customer-chat");
		chat_box.setAttribute("page_id", "2186630364921086");
		chat_box.setAttribute("attribution", "biz_inbox");

		window.fbAsyncInit = function () {
			FB.init({
				xfbml            : true,
				version          : "v11.0"
			});
		};

		(function (d, s, id) {
			let js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, "script", "facebook-jssdk"));
	}
}
</script>

<style scoped>

</style>
