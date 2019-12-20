<template>
	<div class="process">
		<div class="bth_change st_mobile">
			<div>
				<span v-for="(item,index) in $store.state.simplyfy.development_history" :key="index" :class="{'active':index<=eq}" :style="{'left':100/($store.state.simplyfy.development_history.length-1)*index+'%'}">{{item.year}}</span>
			</div>
		</div>
		<div class="processBox">
			<div class="processTxt">
				<ul v-for="(item,index) in $store.state.simplyfy.development_history" :key="index" class="event"  :style="{'animation':'show'+index+' linear 2.5s'}">
					<li v-for="(items,indexs) in item.list" :key="indexs"><span class="date">{{items.day}}</span>
						<p>{{items.content}}</p>
					</li>
				</ul>
			</div>
			<p class="timeline"><span v-for="(item,index) in $store.state.simplyfy.development_history" :key="index" :style="{'animation':'show'+index+' linear 2.5s'}">{{item.year}}</span></p>
		</div>
		<p class="bd-line"></p>
	</div>
</template>

<script>
	export default {
		name: 'process',
		data() {
			return {
				index: 0,
				innerWidth:window.innerWidth,
				eq:0
			}
		},
		mounted() {
			var _this=this;
			document.getElementsByClassName('process')[0].addEventListener('scroll',(res)=>{
				_this.eq=parseInt((res.srcElement.scrollLeft+200)/238);
			})
		}
	}
</script>
<style>
	.process {width: 100%;margin:20px auto 160px;position: relative;}
	.processBox{width: 1200px;margin: auto;cursor: default;}
	.processBox .event{border-left:1px solid #0065fe;display: inline-block;width: 238px;padding-top: 20px;position: relative;padding:20px 10px 0 0;}
	.processBox .event:after{content:'';display: block;width: 8px;height: 8px; border-radius: 100%;background:#0065fe;position:absolute;bottom: -3px;left: -5px;;}
	.processBox .event p{margin: 10px;;}
	.processTxt{overflow: hidden;padding: 3px 0 3px 4px ;}
	.processBox .date{background-color: #0065fe;color: #fff;padding:5px 10px;}
	.processBox .date:hover,.processBox .event p:hover,.process .timeline span:hover{position: relative;top:-2px}
	.process .timeline{padding: 20px 0;}
	.process .timeline span{display: inline-block;width: 240px;text-align: center;	color: #373434;font-size: 24px;}
	.process .bd-line{content:'';display: block;background: #0065fe;height: 1px;width: 100%;margin-top: -79px; animation: show linear 3s ;overflow: hidden;}
	.process li{list-style: none;}
	@media screen and (max-width:900px) {
		.process{overflow-x: scroll;padding: 30px 0 60px;overflow-y:hidden;position: inherit;}
		.processTxt{padding-left: 10px;padding-top: 50px;}
		.process .bd-line{width: 1200px;}
		.bth_change {text-align: center;display: block;position: absolute;width: 330px;left: 50%;margin-left: -165px;}
		.bth_change>div{width: 100%;margin: auto;position: relative;}
		.bth_change:after{content: "";display: block;background-color: #cccccc;width: 100%;height: 2px;margin: auto;border-radius:3px ;}
		.bth_change span{display: inline-block;text-align: left;position: absolute;top:-27px;margin-left: -10px;height: 38px;}
		.bth_change span.active:after{background: #0065fe;}
		.bth_change span.active:before{content:'';position:absolute;background-color: #0065fe;width: 250%;height: 2px;bottom: 9px;right: 20px;}
		.bth_change span:nth-of-type(1):before{display: none;}
		.bth_change span:nth-last-of-type(1){left: 96%!important;}
		.bth_change span:after { content: '';cursor: pointer;display:block;width: 20px;height: 20px;background-color: #cccccc;border-radius: 100%;margin: 0 5px;z-index: 999;position: absolute;}
	}
	@keyframes show{
		0%{width: 0px;}
		100%{width: 100%;}
	}
	@keyframes show0{
		0%{opacity: 0;}
		20%{opacity: 0;bottom:-70px;}
		40%{opacity: 1;bottom:0px;}
		100%{opacity: 1;bottom:0px;}
	}
	@keyframes show1{
		0%{opacity: 0;}
		40%{opacity: 0;bottom:-70px;}
		60%{opacity: 1;bottom:0}
		100%{opacity: 1;bottom:0}
	}
	@keyframes show2{
		0%{opacity: 0;}
		60%{opacity: 0;bottom:-70px;}
		80%{opacity: 1;bottom:0;}
		100%{opacity: 1;bottom:0}
	}
	@keyframes show3{
		0%{opacity: 0;}
		80%{opacity: 0;bottom:-70px;}
		99%{opacity: 1;bottom:0;}
		100%{opacity: 1;bottom:0}
	}
	@keyframes show4{
		0%{opacity: 0;}
		90%{opacity: 0;bottom:-70px;}
		100%{opacity: 1;bottom:0}
	}
</style>
