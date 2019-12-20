<template>
	<div id="footer">
		<div class="fooet_cont">
			<div v-for="(items,indexs) in footerNav" :key='indexs'>
				<p class="footer_title">{{items.name}}</p>
				<p class="st_url" v-for="(item,index) in items.sub_nav" :key="index">
						<a v-if='item.path==""' :href="item.url" target="_blank" class="nav-tag">{{item.name}}</a>
						<router-link v-if='item.path!=""' :to="{path:item.path}" tag="span" class="nav-tag">{{item.name}}</router-link>
				</p>
			</div>
		</div>
		<div class="footer_copyright">
			<div>
				<p><span v-html='policeNumber.icp'></span>{{policeNumber.copyright}}</p>
				<p v-html="policeNumber.keep_on_record"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Vfooter',
		data() {
			return {

			}
		},
		props: ['footerNav', 'policeNumber']
	}
</script>
<style scoped="scoped">
	#footer {
		width: 100%;
		background-color: #313033;
		margin-top: 120px;
	}

	.fooet_cont {
		display: flex;
		margin:0 auto;
		padding: 30px 0;
		width: 1200px;
		color: #fff;
	}

	.fooet_cont>div {
		flex:1;
		display: inline-block;
		width: 18%;
		text-align: center;
		font-size: 13px;
		cursor: default;
	}

	.fooet_cont .footer_title {
		font-size: 14px;
		color: #a7adaf;
	}

	.fooet_cont .st_url,.fooet_cont a {
		font-size: 13px;color: #787b7c;line-height: 28px;cursor: pointer;
	}

	.fooet_cont>div>a:nth-of-type(1),
	.fooet_cont>div>p:nth-of-type(1) {
		/* font-size: 20px; */
		line-height: 51px;
	}

	.footer_copyright {
		text-align: center;
		color: #ffffff;display: table;
		background-color: #262527;
		height: 90px;width: 100%;
		font-size: 12px;
	}
	.footer_copyright >>>a{color: #fff;;}
	.footer_copyright>div{display: table-cell;vertical-align: middle;margin: 23px auto;}
	.footer_copyright>div>p:nth-last-of-type(1){margin-top: 10px;}
	@media screen and (max-width:900px) {
		.fooet_cont{display: none;}
		#footer{margin-top: 60px;background:#262527 ;}
	}
</style>
