import Vue from "vue";
import app from "./app";
import router from "./router/index";

new Vue({
    el: "#root",
    router,
    render(h) {
        return h(app)
    }
});