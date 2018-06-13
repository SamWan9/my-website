import Vue from "vue";
import Router from "vue-router";
import home from "../home/index";
import blog from "../blog/index";
import progressBar from "../components/progress-bar/index";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: home
        },
        {
            path: "/blog",
            component: blog
        }
    ],
    linkExactActiveClass: "active"
});

router.beforeEach((to, from, next) => {
    progressBar.start();
    next();
});

router.afterEach(route => {
    progressBar.end();
});

export default router;