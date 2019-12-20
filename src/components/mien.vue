<template>
	<div class="mien">
		<Carousel v-model="index">
			<Carousel-item>
				<img src="@/assets/img/menu1.png" alt=""        class="pc">
				<img src="@/assets/img/mobile/menu1.png" alt="" class="mobile">
			</Carousel-item>
			<Carousel-item>
				<img src="@/assets/img/menu2.png" alt="" class="pc">
				<img src="@/assets/img/mobile/menu2.png" class="mobile">
			</Carousel-item>
		</Carousel>
		<p class="tag"> <span @click="index=0" :class="{'on':index==0}">01· 办公环境 </span>/<span @click="index=1" :class="{'on':index==1}">
				02· 公司活动</span></p>
	</div>
</template>

<script>
	export default {
		name: 'mien',
		data() {
			return {
				index: 0
			}
		},
		mounted() {},
		watch: {
			index: function index(newVal) {
				console.log(newVal);
			}
		}
	}
</script>
<style scoped="scoped">
	.mien {
		width: 1200px;
		margin:0 auto 80px;
	}

	.tag {
		text-align: right;
		color: #373434;
		font-size: 16px;cursor: pointer;
	}
	img{object-fit: cover;width: 100%;display: block;}
	.tag .on {
		color: #0065fe;
		font-size: 24px;
	}
	.mobile{display: none;}
	@media screen and (max-width:900px) {
		.pc{display: none;}
		.mobile{display: block;}
		.mien{width: 100%;}
	}
</style>
