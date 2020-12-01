/*
 * @Author: duchengdong
 * @Date: 2020-08-28 12:03:52
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 14:50:32
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')