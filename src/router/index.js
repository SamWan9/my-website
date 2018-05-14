import Vue from "vue";
import Router from "vue-router";
import home from "../home/index";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: home
        }
    ]
});