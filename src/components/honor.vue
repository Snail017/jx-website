<template>
	<div class="honor">
		<div class="content" v-for="(items ,indexs) in $store.state.simplyfy.certificate" :key="(indexs+1)*2">
			<p class="title">{{items.title}}</p>
			<div class="text">{{items.content}}</div>
		</div>
		<div class="content" v-for="(items ,indexs) in $store.state.simplyfy.honors" :key="indexs">
			<p class="title">{{items.title}}</p>
			<div class="text">{{items.content}}</div>
			<p class="btn_change">
				<span class="btn" @click="eq==0?eq=items.pics.length-1:eq--">
					<img src="@/assets/img/ico_left.png" alt="">
				</span>
				<span class="now_img">0{{eq+1}}</span>/<span>0{{items.pics.length}}</span>
				<span @click="eq+1==items.pics.length?eq=0:eq++" class="btn">
					<img src="@/assets/img/ico_right.png" alt="">
				</span>
			</p>
			<div class="progress st_mobile">
				<span class="fl">0{{eq+1}}/0{{$store.state.simplyfy.honors[0].pics.length}}</span>
				<p class="fl">
					<span v-for="(item,index) in $store.state.simplyfy.honors[0].pics.length" :key="index" :class="{'active':index==eq}"	></span>
				</p>
			</div>
			<div class="st_scroll">
				<div class="imgBox">
					<div class="swiper" :style="{'transform':' translate3d(-'+270*eq+'px, 0px, 0px)'}">
						<div class="img_content st_pc" @click="eq=items.pics.length-1" >
							<p>{{items.pics[items.pics.length-1].title}}</p>
							<img :src="require('@/assets/img/honors'+(items.pics.length)+'.jpg')" :alt="items.pics[items.pics.length-1].title">
						</div>
						<div v-for="(item,index) in items.pics" :key="index" class="img_content" :class="{'on':index==eq}" @click="eq=index">
							<p v-show="index!=eq">{{item.title}}</p>
							<img :src="require('@/assets/img/'+item.url+'')" :alt="item.title">
						</div>
						<div v-for="(item,index) in items.pics.slice(0,2)" :key="index+items.pics.length" class="img_content st_pc" @click="eq=index">
							<p>{{item.title}}</p>
							<img :src="require('@/assets/img/'+item.url+'')" :alt="item.title">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'honor',
		data() {
			return {
				eq: 0,
			}
		},
		mounted() {
			var _this=this;
			document.getElementsByClassName('st_scroll')[0].addEventListener('scroll', (e) => {
				_this.eq=parseInt((e.target.scrollLeft+80)/260);
			})
		},
	}
</script>
<style scoped="scoped">
	.honor {
		width: 1200px;
		margin: 0 auto 80px;
		font-size: 16px;
		color: #373434;
		padding-right: 20px;
	}

	.content {
		margin-bottom: 70px;
		;
	}

	.title {
		color: #373434;
		line-height: 20px;
		font-size: 20px;
		font-weight: bold;
		border-left: 2px solid #0065fe;
		text-indent: 10px;
		margin-bottom: 30px;
	}

	.text {
		line-height: 36px;
		font-size: 16px;
	}

	.imgBox {
		width: 1200px;
		overflow: hidden;
		display: flex;
	}

	.swiper {
		display: flex;
		transition: transform 500ms ease 0s;
		position: relative;
		width: 380000px;
		;
	}

	.img_content {
		width: 260px;
		margin: 0 5px;
		position: relative;
		height: min-content;
		position: relative;
		top: 40px;
	}

	.img_content>p {
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.66);
		width: 100%;
		height: 100%;
		color: #fff;
		text-align: center;
		font-size: 16px;
		padding-top: 30%;
	}

	.img_content.on {
		border: solid 2px #0065fe;
		width: 375px;
		line-height: initial;
		top: 0;
	}

	.img_content img {
		object-fit: contain;
		width: 100%;
		display: inline-block;
		vertical-align: middle;
	}

	.btn_change {
		text-align: right;
	}

	.btn_change .now_img {
		color: #0065fe;
		font-size: 24px;
	}

	.btn_change img {
		display: inline-block;
	}

	.btn_change .btn {
		display: inline-block;
		cursor: pointer;
		vertical-align: middle;
	}
	@media screen and (max-width:900px) {
		.content{margin-bottom: 0;}
		.honor{display: block;width: 100%;padding: 50px 5%;}
		.st_scroll{width: 100%;overflow: scroll;margin:0px auto 0;padding-top: 0px;}
		.imgBox{width: 1350px;list-style: none;}
		.imgBox li,.imgBox .active{margin: auto;height: inherit;margin-right:10px ;width: 330px;}
		.imgBox img{display: block;width: 100%;}
		.progress{display: block;margin: 20px 0;overflow: hidden;}
		.progress>span{color: #333333;font-size: 15px;}
		.progress>p{width: 280px;height: 2px;background-color: #e6e6e6;margin-top: 10px;margin-left: 10px;display: flex;}
		.progress .active{background-color: #0065fe;}
		.progress>p>span{flex:1}
		.box{display: none;}
		.btn_change{display: none;}
		.img_content>p{bottom: 0;top: initial;height: initial;padding: 10px 0;display: block!important;line-height: 24px;font-size: 12px;}
		.img_content.on,.img_content{width: 260px;top:0;border: none;}
		.swiper{transform: none!important;}
	}
</style>
