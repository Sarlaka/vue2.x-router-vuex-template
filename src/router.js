/*
 * @Author: duchengdong
 * @Date: 2020-08-28 13:37:32
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 13:51:59
 * @Description: 
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});