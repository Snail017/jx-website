<template>
	<div class="situation">
		<ul class="content">
			<li v-for="(item,index) in $store.state.simplyfy.about_us" :key="index">
				<p v-html="item.content"></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'situation',
	}
</script>

<style  scoped="scoped">
	.situation{margin: 0 auto 80px;}
	.banner {
		display: block;
		width: 1200px;
		height: 340px;
		background-color: #0065fe;
		margin: 0px auto 20px;
	}

	.content {
		width: 1000px;
		color: #373434;
		font-size: 16px;
		padding: 0;
		margin: auto;
	}

	.content li {
		margin-bottom: 30px;
		line-height: 35px;
		display: block;
		padding: 0;
		display: flex;
	}

	.content li:before {
		content: "■";
		color: #0065fe;
		line-height: 30px;
		margin-right: 10px;
		;
	}

	.content li:nth-of-type(1):before {
		/* line-height: 30px; */
	}

	.content p>span {
		color: #0065fe;
		font-size: 24px;
	}
	@media screen and (max-width:900px) {
		.situation{width: 100%;}
		.content{width: 90%;margin: auto;}
	}
</style>
