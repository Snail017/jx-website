import axios from 'axios'
var sub_nav = [{
		"name": "家乡概况",
		"path": "/aboutUs/situation"
	}, {
		"name": "企业文化",
		"path": "/aboutUs/culture"

	}, {
		"name": "员工风采",
		"path": "/aboutUs/mien"
	}, {
		"name": "发展历程",
		"path": "/aboutUs/process"
	}, {
		"name": "资质荣誉",
		"path": "/aboutUs/honor"
	}],
	comp_nav = [{
		"name": "企业信息",
		"path": "/company/information"
	}, {
		"name": "企业管理",
		"path": "/company/management"
	}, {
		"name": "信息披露",
		"path": "/company/publish"
	}],
	nav = [{
		"name": "首页",
		"path": "/",
	}, {
		"name": "关于家乡",
		"path": "/aboutUs/situation",
		"sub_nav": sub_nav
	}, {
		"name": "游戏中心",
		"path": "",
		"url": "https://www.weile.com"
	}, {
		"name": "投资者关系",
		"path": "/company/information",
		"sub_nav": comp_nav
	}, {
		"name": "联系我们",
		"path": "/contact"
	}, {
		"name": "家乡招聘",
		"path": "",
		"url": 'https://www.xmrc.com.cn/net/info/showco.aspx?CompanyID=728649'
	}];
export default {
	state: {
		sub_nav: sub_nav,
		comp_nav: comp_nav,
		nav: nav,
		footer: [{
				"name": '关于家乡',
				"path": "/",
				"sub_nav": sub_nav
			},
			{
				"name": '游戏中心',
				"path": "/",
				"sub_nav": [{
					"name": "游戏中心",
					"path": "",
					"url": "https://www.weile.com"
				}]
			},
			{
				"name": '投资者关系',
				"path": "/company/information",
				"sub_nav": comp_nav
			},
			{
				"name": '联系我们',
				"path": "/",
				"sub_nav": [{
					"name": "联系我们",
					"path": "/contact",
				}]
			},
		],
		policeNumber: {
			icp: '',
			copyright: '',
			keep_on_record: ''
		},
		about_us: [],
		development_history: [],
		certificate: [],
		companyInformation: [],
		contact: {},
		index_content: {},
		board: {},
		management_team: {},
		corporate_culture: {},
		files:{
			company_manage:{},  // 企业资料
			prospectus_supplement:{},//  招股文件
			performance_report :{}  ,// 业绩报告
			notification_letter:{} ,//  公告及通函
		},
		honors:[],
		language:'cn',
		
	},
	mutation: { //必须同步执行
	},
	actions: { //不用同步执行  可以使用ajax
		async language(context, type) {
			if (type == null || type == undefined) {
				await context.dispatch("getCookie", "language");
				if (context.state.language == undefined || context.state.language == '') {
					await context.dispatch('setCookie', {
						'name': "language",
						'value': 'cn'
					});
				}
			} else {
				await context.dispatch('setCookie', {
					'name': "language",
					'value': type
				});
				
			}
			for(let i in context.state.files){
				context.dispatch('notice',{
					type:i,
					p:1,
					language:context.state.language
				})	
			}
			axios.get('http://s.weile.com/webApi/getConfig?language=' + context.state.language + '').then((res) => {
				res = res.data;
				if (res.state == 0) {
					context.state.policeNumber.icp = res.data.icp;
					context.state.policeNumber.copyright = res.data.copyright;
					context.state.policeNumber.keep_on_record = res.data.keep_on_record;
					context.state.development_history = res.data.development_history;
					context.state.certificate = res.data.certificate;
					context.state.honors = res.data.honors;
					context.state.companyInformation = res.data.company;
					context.state.contact = res.data.contact;
					context.state.index_content = res.data.index_content;
					context.state.board = res.data.board;
					context.state.corporate_culture = res.data.corporate_culture;
					context.state.management_team = res.data.management_team;
					for (let i in res.data.enterprise_information_menu) {
						let {
							title
						} = res.data.enterprise_information_menu[i];
						if (context.state.comp_nav[i] != null) {
							context.state.comp_nav[i].name = title
						}
					}
					for (let i in res.data.about_us_menu) {
						let {
							title
						} = res.data.about_us_menu[i];
						if (context.state.sub_nav[i] != null) {
							context.state.sub_nav[i].name = title;
						}
					}
					for (let i in res.data.head_menu) {
						let {
							title
						} = res.data.head_menu[i];
						if (context.state.nav[i] != null) {
							context.state.nav[i].name = title;
						}
					}
					for (let i in res.data.foot_menu) {
						let {
							title,
							menu
						} = res.data.foot_menu[i];
						if (context.state.footer[i] != null) {
							context.state.footer[i].name = title;
							for (let n in menu) {
								if (context.state.footer[i].sub_nav[n] != null) {
									context.state.footer[i].sub_nav[n].name = menu[n].title;
								}
							}
						}
					}
					context.state.about_us = res.data.about_us;
				}
			})
		},
		async notice(context,params){
			let {type,p,language}=params;
			if(type==undefined||type==null){
				type='company_manage'
			}
			if(p==undefined||p==null){
				p='1'
			}
			if(language==undefined||language==null){
				await context.dispatch("getCookie", "language");
			}
			axios({
				method: "post",
				url: 'http://s.weile.com/webApi/getNotices',
				params: {
					p: p,
					type: type ,
					language:context.state.language
				}
			}).then(res => {
				if (res.data.state == 0) {
					context.state.files[type]=res.data.data;
				}
			})
		},
		getCookie(context, cookie_name) {
			var allcookies = document.cookie;
			var cookie_pos = allcookies.indexOf(cookie_name);
			if (cookie_pos != -1) {
				cookie_pos += cookie_name.length + 1;
				var cookie_end = allcookies.indexOf(";", cookie_pos);
				if (cookie_end == -1) {
					cookie_end = allcookies.length;
				}
				var value = unescape(allcookies.substring(cookie_pos, cookie_end));
				context.state.language=value;
			}
		},

		setCookie(context, params) {
			return new Promise((resolve) => {
				var Days = 30;
				var exp = new Date();
				exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
				document.cookie = params.name + "=" + escape(params.value) + ";expires=" + exp.toGMTString();
				context.state.language=params.value;
				resolve();
			})

		}
	}
}
