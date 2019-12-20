<template>
	<div class="content">
		<h1 class="btn_content" v-if="$store.state.simplyfy.board.hasOwnProperty('title')">{{$store.state.simplyfy.board.title}}</h1>
		<ul class="bord" v-if="$store.state.simplyfy.board.hasOwnProperty('list')">
			<li v-for="(item,index) in $store.state.simplyfy.board.list" :key="index">
				<div class="name" @click="eq=index">
					<p>{{item.name}}</p>
					<p>{{item.title}}</p>
					<div class="btn_flod">
						<img src="@/assets/img/unfold.png" alt="">
					</div>
				</div>
				<div class="text" :class="{'active':eq==index}">
					<div class="bg" @click="eq=null"></div>
					<div class="textShow">
						<img src="@/assets/img/close.png" alt="" class="close" @click="eq=null">
						<p>{{item.name}}</p>
						<p>{{item.title}}</p>
						<p>{{item.content}}</p>
					</div>
				</div>
			</li>
		</ul>
		<h1 class="btn_content" v-if="$store.state.simplyfy.management_team.hasOwnProperty('title')">{{$store.state.simplyfy.management_team.title}}</h1>
		<ul class="bord" v-if="$store.state.simplyfy.management_team.hasOwnProperty('list')">
			<li v-for="(item,index) in $store.state.simplyfy.management_team.list" :key="index">
				<div class="name" @click="eq=index+100">
					<p>{{item.name}}</p>
					<p>{{item.title}}</p>
					<div class="btn_flod">
						<img src="@/assets/img/unfold.png" alt="">
					</div>
				</div>
				<div class="text" :class="{'active':eq==index+100}">
					<div class="bg" @click="eq=null"></div>
					<div class="textShow">
						<img src="@/assets/img/close.png" alt="" class="close" @click="eq=null">
						<p>{{item.name}}</p>
						<p>{{item.title}}</p>
						<p>{{item.content}}</p>
					</div>
				</div>
			</li>
		</ul>
		<filesList :data="$store.state.simplyfy.files.company_manage"></filesList>
	</div>
</template>
<script>
	import filesList from '@/components/filesList.vue';
	export default {
		name: 'CompManage',
		data() {
			return {
				company_manage: this.$store.state.simplyfy.files.company_manage,
				eq: null
			}
		},
		components:{
			filesList
		},
		mounted() {},
		methods: {}
	}
</script>
<style scoped="scoped">
	.content {
		margin: 80px auto;
		font-size: 16px;
	}


	.page {
		text-align: center;
		margin-top: 50px;
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

	.manage {
		width: 1200px;
		margin: 30px auto;
		overflow: hidden;
		background: #fbfbfb;
	}

	.manage .icofile img {
		width: 220px;
		height: 220px;
		display: inline-block;
		background-color: #333333;
	}

	.manage .icofile {
		overflow: hidden;
		color: #373434;
		font-size: 20px;
		position: relative;
	}

	.icofile .text p {
		margin-bottom: 5px;
	}

	.icofile .text p:nth-of-type(2) {
		font-size: 14px;
	}

	.icofile .text p:nth-last-child(1) {
		color: #888888;
		font-size: 14px;
		line-height: 22px;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}



	.manage .textarea {
		display: none;
		width: 600px;
		position: absolute;
		background-color: #f2f3f5;
		padding: 20px;
		color: #373434;
		font-size: 13px;
		line-height: 24px;
		min-height: 280px;
		z-index: 2;
		;
	}

	.st_en .manage .icofile .text {
		padding: 0px 50px 0 50px;
	}

	.manage .icofile .text {
		position: absolute;
		width: 350px;
		padding: 50px 50px 0 50px;
	}

	.manage .manageList:nth-of-type(2n+1) .text {
		right: 50px;
	}

	.manage .manageList:nth-of-type(2n) .text {
		text-align: right;
		left: 50px;
	}

	.manageList {
		width: 600px;
		float: left;
		padding: 30px 0;
		cursor: default;
	}

	.manageList:hover {
		background-color: #f2f3f5;
	}

	.manageList:hover .icofile .text p:nth-of-type(1) {
		color: #0065fe;
	}

	.manageList:hover .textarea {
		display: block;
	}

	.bord {
		width: 1200px;
		margin: 40px auto 60px;
		list-style: none;
		overflow: hidden;
	}

	.bord li {
		width: 290px;
		float: left;
		margin-right: 13px;
		margin-bottom: 13px;
	}

	.btn_flod {
		position: absolute;
		right: 10px;
		bottom: 10px;
		background: #333;
		width: 15px;
		height: 15px;
		border-radius: 100%;
		line-height: 10px;
		text-align: center;
	}

	.bord li:nth-of-type(4n) {
		margin-right: 0;
	}

	.st_en .bord .name {
		padding: 10px 25px;
	}

	.bord .name {
		width: 290px;
		height: 100px;
		background-color: #f2f3f5;
		padding: 27px 49px;
		cursor: pointer;
		position: relative;
	}

	.bord .name:hover {
		background: rgb(248, 248, 248);
	}

	.bord .name:hover .btn_flod {
		background-color: #0065fe;
	}

	.bord .name p:nth-of-type(1) {
		color: #373434;
		font-size: 20px;
	}

	.bord .name p:nth-of-type(2) {
		color: #888888;
		font-size: 14px;
	}

	.bord .text {
		display: none;
		position: fixed;
		left: 0;
		width: 100%;
		top: 0;
		bottom: 0;
		z-index: 2;
	}


	.bord .text .textShow {
		width: 600px;
		position: fixed;
		left: 50%;
		margin-left: -300px;
		margin-top: -250px;
		padding: 30px;
		top: 50%;
		z-index: 2;
		background: #fff;
		position: relative;
	}

	.bord .text .textShow .close {
		position: absolute;
		right: 10px;
		top: 10px
	}

	.bord .text .textShow p:nth-of-type(1) {
		font-size: 20px;
		color: #333333;
		font-weight: bold;
		line-height: 27px;
	}

	.bord .text .textShow p:nth-of-type(2) {
		font-size: 16px;
		color: #666;
		margin-bottom: 10px;
	}

	.bord .text .textShow p:nth-of-type(3)::-webkit-scrollbar {
		display: none;
	}

	.bord .text .textShow p:nth-of-type(3) {
		max-height: 350px;
		overflow-y: scroll;
		font-size: 13px;
		color: #333333;
		line-height: 24px;
	}

	.bord .text .bg {
		background: #000;
		opacity: .4;
		position: fixed;
		left: 0;
		width: 100%;
		top: 0;
		bottom: 0;
	}

	.bord .active {
		display: block;
	}

	.st_en .content .btn_content {
		width: 270px;
	}

	.content .btn_content {
		display: block;
		width: 110px;
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
		margin: 30px auto;
		padding: 30px 49px 60px;
		width: 1200px;
		background-color: #f2f3f5;
		/* min-height: 345px; */
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
		width: 950px;
	}

	.content .investorFile li .fl>span {
		line-height: 30px;
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
	@media screen and (max-width:900px) {
		.content{width: 100%;}
		.bord{width: 94%;margin:20px auto;}
		.bord li{width: 46%;padding:1%;}
		.bord li:nth-of-type(2n){padding-left: 0;}
		.st_en .bord .name{height: 130px;}
		.bord .name{width: 100%;padding:20px 10px;}
		.bord .name p:nth-of-type(1){font-size: 14px;font-weight: bold;}
		.bord .name p:nth-of-type(2){font-size: 12px;}
		.bord .text .textShow{width: 80%;left: 10%;margin-left: 0;}
	}
</style>
