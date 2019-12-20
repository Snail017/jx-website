<template>
	<div class="header" :class="{'st_home':IsHome,'st_homeShow':IsHome,'st_untop':offsetTop>200,'st_mobile':mobileNavShow%2==1}" >
	<div class="bg" @click="mobileNavShow=0" v-if="mobileNavShow%2==1"></div>
		<div>
			<p class="mobile_nav" @click="mobileNavShow++"></p>
			<div class="logo">
				<router-link tag="img" to="/" :src="IsHome?require('@/assets/img/logo0.png'):require('@/assets/img/logo1.png')" alt=""></router-link>
				<div class="fl">
					<p v-for="(item,index) in logoTitle[$store.state.simplyfy.language]" :key="index">{{item}}</p>
				</div>
			</div>
			<div class="nav">
				<div v-for="(item,index) in $store.state.simplyfy.nav" :key='index' class="navBox">
					<a v-if='item.path==""' :href="item.url" target="_blank" class="nav-tag">{{item.name}}</a>
					<router-link v-if='item.path!=""' :to="{path:item.path}" class="nav-tag">{{item.name}}</router-link>
					<ul class="sub_list" v-if="item.hasOwnProperty('sub_nav')">
						<router-link v-for="(items,indexs) in item.sub_nav" :key="indexs" tag="li" :to="{path:items.path}">{{items.name}}</router-link>
					</ul>
				</div>
				<div class="navBox">
					<span class="lang" :class="{'on':item.key==$store.state.simplyfy.language}" v-for="(item,index) in language" :key="index+language.length*2"					 @click="$store.dispatch('language',item.key),item.key=='en'&&$router.currentRoute.path.indexOf('/company')==-1?$router.push('/company/information'):false">
						{{item.name}}
						<template v-if='index!=language.length-1'> | </template>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Vheader',
		data() {
			return {
				logoTitle: {
					'en': [
						'Stock Code',
						'HKEx 03798.HK'
					],
					'cn': [
						'股票代码',
						'港交所 03798.HK',
					],
					'tcn': [
						'股票代碼',
						'港交所 03798.HK'
					]
				},
				language: [{
					"name": "简",
					"key": 'cn',
				}, {
					"name": "繁",
					"key": 'tcn',

				}, {
					"name": "EN",
					"key": 'en',
				}],
				offsetTop: 0,
				mobileNavShow:0
			}
		},
		props: ['IsHome'],
		mounted() {
			var _this = this;
			window.addEventListener('scroll', (e) => {
				_this.offsetTop = e.path[1].pageYOffset;
			})
		},

	}
</script>
<style scoped="scoped">
	
	.mobile_nav {
		position: absolute;
		z-index: 9;
		left: 21px;
		height: auto;
		margin: 0;
		padding: 23px 0;
		border: none;
		outline: none;
		background: transparent;
		top: 0;
		display: none;
	}
	.st_mobile .mobile_nav:before{transform-origin: 15% 100%;transform: rotate(45deg);}
	.st_mobile .mobile_nav:after{ transform-origin: 38% 90%; transform: rotate(-45deg);}
	.st_home .mobile_nav:before,.st_home .mobile_nav:after{
		background: #fff;
	}
	.mobile_nav:before,.mobile_nav:after{
		content:'';
		display: block;
		width: 22px;
		height: 2px;
		transition: all .2s;
		transform: rotate(0);
		border-radius: 1px;
		background: #7a7977;
	}
	.mobile_nav:after{
		margin-top: 5px;
	}
	.st_en .sub_list {
		left: 50%;
		width: 200px;
		margin-left: -100px;
	}

	.sub_list {
		position: absolute;
		width: 100%;
		display: none;
		line-height: 40px;
		list-style: none;
		background: #313033;
		padding: 10px 0;
		color: #fff;
		text-align: center;
		z-index: 999;
		animation: a_menu_item_show 0.2s ease-out both;
	}

	.navBox:hover .sub_list {
		display: block;
	}

	.lang {
		color: #000;
		opacity: .5;
	}

	.lang.on {
		opacity: 1;
	}

	.navBox {
		display: inline-block;
		position: relative;
	}
	.navBox:nth-last-of-type(1){
		margin-left: 60px;
	}
	.sub_list li {
		margin: 0;
		line-height: 40px;
		display: block;
		font-size: 13px;
		opacity: 0.7;
	}

	.sub_list li:hover {
		opacity: 1;
	}

	.header {
		width: 100%;
		font-size: 15px;
		left: 0;
		width: 100%;
		z-index: 3;
		background: #fff;
	}

	.st_homeShow {
		position: fixed;
	}

	.st_home.st_untop {
		background: #0065fe;
	}

	.st_home {
		position: fixed;
		z-index: 4;
		left: 0;
		top: 0;
		width: 100%;
		border-bottom: none;
		background: transparent;
	}

	.st_home a.nav-tag:hover,
	.st_home span.lang:hover {
		opacity: .7;
		color: #fff;
	}

	.st_home .menu_hook {
		display: block;
	}

	.st_home.header .nav-tag,
	.st_home.header .lang {
		color: #fff;
	}

	.header>div {
		width: 1200px;
		margin: auto;
		position: relative;
		line-height: 70px;
		color: #000;
	}

	.header .logo {
		height: 50px;
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 10px;
	}

	.header .logo img {
		display: block;
		height: 100%;
		float: left;
	}

	.header .logo>div {
		float: left;
		line-height: 15px;
		color: darkgray;
		font-size: 12px;
		transform: scale(.8);
		margin-top: 11px;
		width: 120px;
	}

	.header.st_home .logo>div {
		color: #fff;
		opacity: .6;
	}

	.header .logo>div:before {
		content: "";
		display: block;
		float: left;
		width: 1px;
		height: 20px;
		background: darkgray;
		margin-right: 13px;
		margin-top: 3px;
	}

	.header .nav {
		cursor: pointer;
		float: right;
		vertical-align: middle;
		text-align: center;
	}

	.header .nav-tag {
		padding: 0 20px;
		cursor: pointer;
		display: inline-block;
		color: #000;
		font-weight: bold;
	}

	.st_home.header .nav-tag:hover {
		background: #fff;
		opacity: 1;
		color: #0065fe;
	}

	.st_home.header .navBox:hover .nav-tag {
		background: #fff;
		opacity: 1;
		color: #0065fe;
	}

	.header .navBox:hover .nav-tag {
		background: #0065fe;
		color: #fff;
	}

	.header .lang:hover {
		color: #0065fe;
	}
	.header .bg{display: none;}
	@media screen and (max-width:900px) {
		.header>div{width: 100%;}
		.header .logo .fl{
			display: none;
		}
		.mobile_nav{display: block;z-index: 9999999;}
		.header .logo{position: inherit;margin: 0;}
		.header .logo img{float: inherit;margin: auto;width: 35%;object-fit: contain;}
		.header {width: 100%;}
		.header .bg{position: fixed;width: 100%;left: 0;top: 0;background-color: rgb(0,0,0,.6);display: block;bottom: 0;z-index: 9999;}
		.header .nav{position: absolute;width: 50%;left: 0;top:0;z-index: 2;background: #fff;display: block;float: inherit;padding-top: 40px;visibility: hidden;transform: translateX(-315px);z-index: 99999;}
		.st_home.header .nav{background: #0065ff;}
		.st_mobile.header .nav,.st_mobile.header:after{display: block;transition: all .2s;visibility: visible;transform: translateX(0px);}
		.navBox{width: 100%;}
		.navBox:nth-last-of-type(1){margin-left: 0;}
		.st_home.header .navBox:hover .nav-tag{color: #fff;background: transparent;}
		.header .navBox:hover .nav-tag{color: #000;background: transparent;}
		.navBox:hover .sub_list{display: none;}
	}
	@keyframes a_menu_item_show {
		0% {
			-webkit-transform: translate(0px, -30px);
			opacity: 0;
		}

		100% {
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
</style>
