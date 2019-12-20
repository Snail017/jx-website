import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';   
import '@/assets/css/common.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(iView);
store.dispatch('language');
if(store.state.simplyfy.language=='en'){
	router.push('/company/information')
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
