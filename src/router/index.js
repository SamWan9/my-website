import Vue from "vue";
import Router from "vue-router";
import home from "../home/index";
import chat from "../chat/index";
import blog from "../blog/index";
import rank from "../rank/index";
import progressBar from "../components/progress-bar/index";

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: "/",
            component: home
        },
        {
            path: "/blog",
            component: blog
        },
        {
            path: "/rank",
            component: rank
        },
        {
            path: "/chat",
            component: chat
        }
    ],
    linkExactActiveClass: "active"
});

router.beforeEach((to, from, next) => {
    progressBar.start();
    if (to.query && to.query.t === "chat") {
        router.push("/chat");
    }
    next();
});

router.afterEach(route => {
    progressBar.end();
});

export default router;