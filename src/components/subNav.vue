<template>
	<div class="subNav">
		<div id='subNavBox'>
			<router-link v-for='(item,index) in subNav' :key="index" :to="{path:item.path}" :class="{'on':$route.path==item.path}"			 class="subNav-tag">{{item.name}}</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'subNav',
		data() {
			return {}
		},
		props: ['subNav'],
		mounted() {
			this.initSomething();
		},
		methods: {
			initSomething() {
				let a = 0;
				setTimeout(() => {
					for (let i in this.subNav) {
						a += document.getElementsByClassName('subNav-tag')[i].clientWidth;
					}
					document.getElementById('subNavBox').style.width = a + 10 + 'px'
				}, 500)
				
			},
		},
		watch: {
			'$store.state.simplyfy.language': function() {
				this.initSomething();
			}
		}
	}
</script>

<style scoped="scoped">
	.subNav {
		width: 1200px;
		margin: 0 auto 20px;
		font-size: 16px;
	}

	.subNav-tag {
		color: #383535;
		text-decoration: none;
		display: inline-block;
		text-align: left;
		line-height: 40px;
		padding-right: 50px;
		padding-top: 10px;
	}

	.subNav-tag:after {
		content: "";
		display: block;
		background: transparent;
		height: 2px;
		width: 80%;
		margin: 0 10%;
	}

	.subNav-tag:hover {
		color: #383535;
	}

	.subNav-tag.on:after {
		background: #0065fe;
	}

	@media screen and (max-width:900px) {
		.subNav {
			width: 100%;
			overflow: scroll;
			padding: 0 20px;
			background-color: #fbfbfb;
			border-bottom: 1px solid #e6e6e6;
		}

		.subNav>div {
			width: 660px;
		}
	}
</style>
