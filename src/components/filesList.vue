<template>
	<div class="text">
		<h1 class="btn_content">{{data.title}}</h1>
		<div class="companyManage">
			<ul class="investorFile" v-if="data!=null">
				<li v-for="(item,index) in data[data.type]" :key="index">
					<div class="fl"><span>{{item.title}}</span></div>
					<div class="fr">
						<a :href="item.file" class="btn-default st_pc" target="_blank">{{data.button_open}}</a>
						<a :href="item.file" class="btn-default st_pc" target="_blank"  :download="item.file">{{data.button_down}}</a>
						<a :href="item.file" class="st_mobile" target="_blank"><img src="@/assets/img/mobile/ico_search.png" alt=""></a>
					</div>
				</li>
			</ul>
			<div class="page" v-if="data.totalPage>1">
				<span v-for="(item,index) in data.totalPage" :key="index" class="btn_page" :class="{'now_page':item==data.p}"  @click="$store.dispatch('notice',{'type':data.type,'p':item})">{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'filesList',
		data() {
			return {
				index: 0
			}
		},
		props: ['data'],
		mounted() {},
	}
</script>

<style scoped="scoped">
	.page {
		text-align: center;
		padding-top: 30px;
	}
	
	.btn_page {
		display: inline-block;
		padding: 0 15px;
		margin: 0 5px;
		cursor: pointer;
		background: #b5b4b4;
		color: #fff;
	}

	.now_page {
		background: #0065fe;
	}


	.st_en .content .btn_content {
		width: 270px;
	}

	.content .btn_content {
		display: block;
		width: 120px;
		text-align: center;
		line-height: 30px;
		margin: auto;
		padding: 10px;
		font-size: 16px;
		color: #ffffff;
		background-color: #0065fe;
		border-radius: 2px;
	}


	.content .investorFile {
		min-height: 255px;
	}
	.content .companyManage{
		width: 1200px;
		padding: 30px 49px;
		margin: 40px auto 60px;
		background-color: #f2f3f5;
	}
	.content .investorFile li {
		margin: auto;
		border-bottom: 1px solid #ccc;
		overflow: hidden;
		padding: 10px;
		color: #373434;
		position: relative;
	}

	.content .investorFile li div:nth-of-type(1) {
		width: 900px;
	}

	.content .investorFile li .fl>span {
		line-height: 30px;
		min-height: 30px;
		display: block;
	}

	.content .investorFile li .fr {
		position: absolute;
		top: 50%;
		right: 0;
		margin-top: -16px;
	}

	.content .investorFile .btn-default {
		cursor: pointer;
		padding: 3px 11px;
		display: inline-block;
		border: 1px solid #0065fe;
		border-radius: 2px;
		background: #ededed;
		color: #0065fe;
		border-radius: 4px;
		font-size: 14px;
	}

	.content .investorFile .btn-default:hover {
		background-color: #0065fe;
		color: #fff;
	}

	.btn-default {
		margin-left: 10px;
	}
	.content .investorFile .st_pc{display:block ;}
	.content .investorFile .st_mobile{display:none;}
	@media  screen and (max-width:900px) {
		.content .investorFile .st_pc{display:none ;}
		.content .investorFile .st_mobile{display:inline-block;width: 30px;	height: 30px;margin-right: 5px;}
		.content .investorFile .st_mobile img{display: block;width: 100%;}
		.content .companyManage{width: 100%;padding: 15px;font-size: 14px;;}
		.content .investorFile li .fl>span{line-height: 25px;}
		.content .investorFile li div:nth-of-type(1){width: 70%;}
		.content .btn_content{padding: 5px;}
	}
</style>
