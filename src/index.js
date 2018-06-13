import Vue from "vue";
import app from "./app";
import router from "./router/index";
import progressBar from "./components/progress-bar/index";

Vue.use(progressBar);

new Vue({
    el: "#root",
    router,
    render(h) {
        return h(app)
    }
});