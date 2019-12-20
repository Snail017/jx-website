<template>
	<div id="aboutUs">
		<Vheader :IsHome='true'></Vheader>
		<img :src="require('@/assets/img/homeTxt'+($store.state.simplyfy.language=='tcn'?'tcn':'')+'.png')" alt="" class="text">
		<video width="100%" id="video" autoplay="autoplay" loop="loop" preload="" muted="" x-webkit-airplay="true" airplay="allow" src="@/assets/img/home.mp4" class="video1 video"></video>
		<img src="@/assets/img/home.gif" alt="" class="mobile_video">
		<router-view />
	</div>
</template>
<script>
	import Vheader from '@/components/Vheader.vue'
	export default {
		name: "home",
		data(){
			return{
				language:[{
					"name":"简",
					"key":'cn',
				},{
					"name":"繁",
					"key":'tcn',
				},{
					"name":"EN",
					"key":'en',
				}]
			}
		},
		components:{
			Vheader
		}
	}
</script>
<style scoped="scoped">
	#aboutUs .video {
		display: block;
	}
	.mobile_video{display: none;}
	.st_home.header .nav-tag {
		color: #fff;
	}
	#aboutUs{margin-bottom: -120px;}
	img.text {
		animation: a_banner 0.5s 0.5s linear forwards;
		opacity: 0;
		position: absolute;
		z-index: 2;
		width: 900px;
		left: 50%;
		top: 50%;
		margin-top: -105px;
		margin-left: -450px;
	}

	.header>div {
		width: 1200px;
		margin: auto;
		height: 100px;
		position: relative;
		line-height: 100px;
	}

	.header .logo {
		height: 65px;
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -36px;
	}

	.header .nav {
		float: right;
		vertical-align: middle;
		text-align: center;
	}

	.header .nav-tag {
		padding: 0 20px;
		cursor: pointer;
		color: #000;
	}

	.header .nav-tag:hover {
		color: #ccc;
	}

	@media screen and (max-width:900px) {
		.header .logo {
			display: none;
		}

		.header {
			width: 100%;
		}
		img.text{width: 80%;left: 10%;margin-left: 0;}
		#aboutUs{margin-bottom: -60px;}
		#aboutUs .video{display: none;}
		.mobile_video{display: block;width: 100%;object-fit: cover;}
	}

	@keyframes a_banner {
		0% {
			transform: translate(0, 20px);
			opacity: 0;
		}

		100% {
			transform: translate(0, 0);
			opacity: 1;
		}
	}
</style>
