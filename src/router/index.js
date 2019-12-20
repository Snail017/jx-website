import Vue from 'vue'
import VueRouter from 'vue-router'
import aboutUs from '@/views/aboutUs.vue'
import company from '@/views/company.vue'
import contact from '@/views/contact.vue'
import home from '@/views/home.vue'
import situation from '@/components/situation.vue'
import mien from '@/components/mien.vue'
import culture from '@/components/culture.vue'
import process from '@/components/process.vue'
import honor from '@/components/honor.vue'
import CompInformation from '@/components/CompInformation.vue'
import CompManage from '@/components/CompManage.vue'
import CompPublish from '@/components/CompPublish.vue'
Vue.use(VueRouter)

const routes = [{
	path: "/",
	name:"home",
	component: home
}, {
	path: '/aboutUs',
	name: 'aboutUs',
	component: aboutUs,
	children: [{
		path: 'situation',
		component: situation
	}, {
		path: 'mien',
		component: mien
	}, {
		path: 'culture',
		component: culture
	}, {
		path: 'process',
		component: process
	}, {
		path: 'honor',
		component: honor
	}]
}, {
	path: '/company',
	name: 'company',
	component: company,
	children: [{
		path: 'information',
		component: CompInformation
	}, {
		path: 'management',
		component: CompManage
	},{
		path: 'publish',
		component: CompPublish
	}]
},{
	path:'/contact',
	name:'contact',
	component:contact
},]

const router = new VueRouter({
	routes
})

export default router
