<template>
	<div id="app" :class="{'st_en':$store.state.simplyfy.language=='en','st_toTop':to_top}">
		<router-view />
		<Vfooter :footerNav="$store.state.simplyfy.footer" :policeNumber="$store.state.simplyfy.policeNumber"></Vfooter>
		<p class="st_mobile to_top" v-if='to_top' onclick='window.scrollTo(0,0)'>回到顶部</p>
	</div>
</template>
<script>
	import Vfooter from '@/components/Vfooter.vue'
	export default {
		name: "App",
		data() {
			return {
				to_top:false
			}
		},
		components: {
			Vfooter
		},
		mounted() {
			var _this=this;
			window.addEventListener('scroll',(e)=>{
				if(e.target.scrollingElement.scrollTop>400){
					_this.to_top=true
				}else{
					_this.to_top=false
				}
			})
		},
	}
</script>
<style scoped="scoped">
	.st_toTop{padding-bottom: 60px;}
	.st_home .to_top{display: none;}
	.to_top{font-size: 15px;color: #333;text-align: center;line-height: 60px;background: #f2f3f5;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 44;}
</style>
