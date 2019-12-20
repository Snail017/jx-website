<template>
	<div>
		<Vheader :IsHome='false'></Vheader>
		<div class="contact">
			<img src="@/assets/img/contact_banner.png" alt="" class="banner st_pc">
			<img src="@/assets/img/mobile/contact_banner.png" alt="" class="banner st_mobile">
			<div class="content">
				<!-- <h1 class="title">{{$store.state.simplyfy.contact.title}}</h1> -->
				<div class="text" v-if="$store.state.simplyfy.contact.hasOwnProperty('title')">
					<p class="line">
						<span class="name">{{$store.state.simplyfy.contact.address.title}}  </span>
						<span class="txt">{{$store.state.simplyfy.contact.address.content}}</span>
					</p>
					<p class="line">
						<span class="name">{{$store.state.simplyfy.contact.phone.title}}  </span>
						<span class="phone">{{$store.state.simplyfy.contact.phone.content}}</span>
					</p>
					<p class="line">
						<span class="name">{{$store.state.simplyfy.contact.mail.title}}   </span>
						<span class="txt">{{$store.state.simplyfy.contact.mail.content}}   </span>
					</p>
				</div>
			</div>
			<div id="map"></div>
		</div>
	</div>
</template>

<script>
	import BMap from 'BMap'
	import Vheader from '@/components/Vheader.vue'
	export default {
		name: 'contact',
		data() {
			return {}
		},
		mounted() {
			this.createMap();
		},
		components: {
			Vheader
		},
		methods: {
			createMap() {
				/* eslint-disable */
				// 创建Map实例
				var map = new BMap.Map("map")
				var point = new BMap.Point(118.20285, 24.490195); // 初始化地图,设置中心点坐标和地图级别
				// 初始化地图,设置中心点坐标和地图级别
				map.centerAndZoom(point, 20);
				var marker = new BMap.Marker(point); // 创建标注
				map.setCurrentCity("厦门"); // 设置地图显示的城市 此项是必须
				map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
				map.addOverlay(marker); // 将标注添加到地图中
				var label = new BMap.Label("家乡互动", {
					position: point, // 指定文本标注所在的地理位置
					offset: new BMap.Size(-40, -40) //设置文本偏移量
				});
				label.setStyle({
					border: '1px solid #ccc',
					fontSize: "12px",
					padding: "10px 20px",
					fontFamily: "微软雅黑",
				});
				marker.setLabel(label);
			}
		},
	}
</script>

<style scoped="scoped">
#map {width: 1200px;height: 450px;margin:0 auto;}
.banner{width: 100%;margin: 0;}
.title {font-size: 20px;font-weight: bold;}
.phone {font-size: 18px;}
.txt {font-size: 16px;}
.line{margin: 10px 0;}
.name {font-size: 16px;margin-right: 15px;color: #888888;}
.content {width: 1200px;margin:30px auto 22px;position: relative;}
.text:before {content: "";display: inline-block;width: 2px;height: 20px;background: #0065fe;position: absolute;left: 0;top:3px;}
.text {position: relative;padding-left: 20px;font-family: MicrosoftYaHei;z-index: 2;left: 0;top: 0;font-size: 18px;color: #333;/* padding: 13px 30px 0; */font-family: MicrosoftYaHei;}
.contact {width: 100%;}
@media  screen and (max-width:900px) {
	#map{width: 90%;margin: auto;height: 300px;}
	.content{width: 90%;margin: auto;}
	.text{padding-left: 0;}
	.text:before{display: none;}
	.name:before{content:'';display: inline-block;width: 5px;height: 5px;border-radius: 5px;background: #0065fe;vertical-align: middle;margin-right: 5px;}
	.name{display: block;color: #333;font-size: 20px;font-weight: bold;}
	.txt,.phone{padding-left: 5px;display: block;margin-top: 15px;}
}
</style>
