<template>
	<div class="mien">
		<table>
			<tr v-for="(item ,index) in $store.state.simplyfy.companyInformation" :key="index">
				<td>{{item.title}}</td>
				<td>{{item.content}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'CompInformation',
		data() {
			return {
				index: 0
			}
		},
		mounted() {},
	}
</script>
<style scoped="scoped">
	.mien {width: 900px;margin:0 auto 80px;}
	.mien table{width: 100%;font-size: 16px;}
	.mien table tr{height: 60px;color: #373434;}
	.mien td{padding: 22px 50px;}
	.st_en .mien table td:nth-of-type(1){text-align: left;    text-align-last: inherit;}
	.mien table td:nth-of-type(1){    text-align: justify; text-justify: distribute-all-lines; text-align-last: justify;-moz-text-align-last: justify;-webkit-text-align-last: justify;}
	.mien table tr:nth-of-type(2n+1){background-color: #ededed;}
	.mien table tr:nth-of-type(2n){background-color: #0065fe;color: #fff;}
	@media screen and (max-width:900px) {
		.mien{width: 90%;}
		.mien td{padding: 10px;}
		.mien td:nth-of-type(1){width: 85px;}
	}
</style>
