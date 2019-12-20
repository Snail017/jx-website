<template>
	<div id="aboutUs">
		<Vheader :IsHome='false'></Vheader>
		<img src="@/assets/img/aboutUs_banner.png" alt="" class="st_pc">
		<img src="@/assets/img/mobile/aboutUs_banner.png" alt="" class="st_mobile">
		<subNav :subNav='$store.state.simplyfy.sub_nav'></subNav>
		<router-view />
	</div>
</template>
<script>
	import subNav from '@/components/subNav.vue'
	import Vheader from '@/components/Vheader.vue'
	export default {
		name: "aboutUs",
		data() {
			return {
			}
		},
		components: {
			subNav,Vheader
		},
		mounted() {
		}
	}
</script>
<style scoped="scoped">
	#aboutUs>img{margin: 0 auto;width: 100%;}
</style>
