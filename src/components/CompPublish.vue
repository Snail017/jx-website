<template>
	<div class="content">
		<filesList  :data="$store.state.simplyfy.files.prospectus_supplement"></filesList>
		<filesList  :data="$store.state.simplyfy.files.performance_report"></filesList>
		<filesList  :data="$store.state.simplyfy.files.notification_letter"></filesList>
	</div>
</template>

<script>
	import filesList from '@/components/filesList.vue';
	export default {
		name: 'CompPublish',
		data() {
			return {
				
			}
		},
		components:{
			filesList
		},
		mounted() {
		},
		methods: {
			
		}
	}
</script>
<style scoped="scoped">

	.content {
		margin: 80px auto;
		font-size: 16px;
	}
</style>
