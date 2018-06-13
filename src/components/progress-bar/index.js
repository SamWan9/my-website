import progressBar from "./progress-bar";
import Vue from "vue";

const GetProgressBarInstance = (function () {
    let instance = null;

    let CreateInstance = function () {
        if (instance) {
            return instance;
        }
        this.init();
        return instance = this;
    };

    CreateInstance.prototype.init = function () {
        const progressBarComponent = new Vue({
            render(h) {
                return h(progressBar);
            }
        });
        const component = progressBarComponent.$mount();
        this.progressBar = progressBarComponent.$children[0];
        document.body.appendChild(component.$el);
    };

    CreateInstance.prototype.start = function () {
        let percent = 0;
        this.progressBar.show(percent);
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            if (percent >= 90) {
                clearInterval(this.timer);
            }
            percent += Math.floor(Math.random() * 5 + 3);
            this.progressBar.show(percent);
        }, 200);
    };

    CreateInstance.prototype.end = function () {
        clearInterval(this.timer);
        this.progressBar.hide();
    };

    return CreateInstance;
})();

let progressBarInstance = null;

const API = {
    start() {
        progressBarInstance = new GetProgressBarInstance();
        progressBarInstance.start();
    },
    end() {
        if (progressBarInstance) {
            progressBarInstance.end();
        }
    }
};

const ProgressBar = Object.assign({
    install(Vue) {
        Vue.prototype.$Loading = API;
    }
}, API);

export default ProgressBar;