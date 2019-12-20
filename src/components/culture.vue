<template>
	<div class="mien">
		<div class="progress">
			<span class="fl">0{{eq+1}}/0{{$store.state.simplyfy.corporate_culture.length}}</span>
			<p class="fl">
				<span v-for="(item,index) in $store.state.simplyfy.corporate_culture" :key="index" :class="{'active':index==eq}"	></span>
			</p>
		</div>
		<ul class="imgBox">
			<li v-for="(item,index) in $store.state.simplyfy.corporate_culture" :key="index" :class="{'active':index==eq}"			 @mouseenter="eq=index">
				<img :src="require('@/assets/img/culture'+(index+1)+'.jpg')">
				<div class="content">
					<div class="title">
						<p>{{item.title}}</p>
						<p>{{item.sketch}}</p>
					</div>
					<ul class="text">
						<li v-for="(items,indexs) in item.content" :key="indexs">{{items}}</li>
					</ul>
				</div>
			</li>
		</ul>
		<div class="bth_change">
			<span v-for="(item,index) in $store.state.simplyfy.corporate_culture.length" :key="index" :class="{'active':index==eq}"	  @click="eq=index"></span>
		</div>
		<div class="box">
			<img src="@/assets/img/logo.png" alt="">
			<div>
				<p v-for='(item,index) in $store.state.simplyfy.corporate_culture' :key="index"> <b>{{item.title}}</b> —
					{{item.sketch}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'culture',
		data() {
			return {
				eq: 0,
			}
		},
		mounted() {
			var _this=this;
			document.getElementsByClassName('mien')[0].addEventListener('scroll', (e) => {
				_this.eq=parseInt((e.target.scrollLeft+100)/330);
			})
		},
	}
</script>
<style scoped="scoped">
	.mien {
		width: 1200px;
		margin: 0 auto 80px;
	}

	.bth_change {
		text-align: center;
		display: block;
	}


	.bth_change span {
		cursor: pointer;
		display: inline-block;
		width: 8px;
		height: 8px;
		background-color: #8c8c8c;
		border-radius: 100%;
		margin: 0 5px;
	}
	.bth_change span.active {
		width: 30px;
		height: 8px;
		background-color: #0065fe;
		border-radius: 4px;
	}
	.imgBox .content {
		position: absolute;
		z-index: 2;
		top: 90px;
		left: 45px;
		color: #fff;
		font-size: 16px;
	}

	.imgBox .title {
		display: flex;
		float: left;
	}

	.imgBox .title p:nth-of-type(1) {
		font-size: 60px;
		/* writing-mode: vertical-rl; */
		font-family: Alibaba-PuHuiTi-H;
		height: 242px;font-weight: bold;
		line-height: 70px;
		width: 60px;
		margin-right: 10px;
	}

	.imgBox .title p:nth-of-type(2) {
		font-size: 20px;
		writing-mode: vertical-rl;
		font-family: Alibaba-PuHuiTi-L;
		height: 242px;
		line-height: 25px;
		padding-top: 10px;
	}

	.imgBox {
		width: 1200px;
		overflow: hidden;
	}

	.imgBox .text {
		display: none;
		list-style: disc;
		width: 470px;
		margin-left: 90px;
		position: absolute;
		left: 100px;
		top: 10%;
		line-height: 30px;
	}

	.imgBox>li {
		width: 205px;
		float: left;
		transition: all .3s;
		position: relative;
	}

	.imgBox .active {
		width: 790px;
	}

	.imgBox .active .text {
		display: list-item;
	}

	.box {
		width: 600px;
		margin: 48px auto;
		overflow: hidden;
	}

	.box img {
		border-right: 1px solid #e6e6e6;
		object-fit: contain;
		padding: 15px;
		vertical-align: middle;
		float: left;
		padding-right: 40px;
	}

	.box>div {
		margin-left: 30px;
		font-size: 16px;
		line-height: 30px;
		float: left;
	}
	.progress{display: none;}
	@media screen and (max-width:900px) {
		.mien{width: 100%;overflow: scroll;margin:0px auto 0;padding-top: 60px;}
		.imgBox{width: 1020px;height: 500px;margin: 0 20px;list-style: none;}
		.imgBox li,.imgBox .active{margin: auto;height: inherit;margin-right:10px ;width: 330px;}
		.imgBox img{display: block;width: 100%;}
		.imgBox .content{position: initial;height: 600px;}
		.imgBox .title{display: block;text-align: center;position: absolute;top:30px;width: 100%;}
		.imgBox .title p:nth-of-type(1){font-size: 40px;line-height: 50px;width: initial;height: initial;}
		.imgBox .title p:nth-of-type(1):before{content:'';display: inline-block;width: 2px;height: 40px;background: #fff;position: relative;top:6px;right: 34px;}
		.imgBox .title p:nth-of-type(1):after{content:'';display: inline-block;width: 2px;height: 40px;background: #fff;position: relative;top:6px;left: 34px;}
		.imgBox .title p:nth-of-type(2){font-size: 20px;line-height: 30px;writing-mode:inherit;height: inherit;}
		.imgBox .text{position: initial;margin-left: 0;text-align: left;color: #666666;display: inline-block;width: 100%;}
		.imgBox .text li{margin-left: 5%;width: 95%;}
		.progress{display: block;margin: 20px;overflow: hidden;position: absolute;top:340px;left: 0;}
		.progress>span{color: #333333;font-size: 15px;}
		.progress>p{width: 280px;height: 2px;background-color: #e6e6e6;margin-top: 10px;margin-left: 10px;display: flex;}
		.progress .active{background-color: #0065fe;}
		.progress>p>span{flex:1}
		.box{display: none;}
		.bth_change{display: none;}
	}
</style>
