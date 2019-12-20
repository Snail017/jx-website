<template>
	<div>
		<Vheader :IsHome='false'></Vheader>
		<img src="@/assets/img/company_banner.png" alt="" class="st_pc">
		<img src="@/assets/img/mobile/company_banner.png" alt="" class="st_mobile">
		<subNav :subNav='$store.state.simplyfy.comp_nav'></subNav>
		<router-view />
	</div>
</template>
<script>
	import subNav from '@/components/subNav.vue'
	import Vheader from '@/components/Vheader.vue'
	export default {
		name: "company",
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
	img{margin: 0 auto;width: 100%;}
</style>