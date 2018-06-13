<template>
    <transition name="fade">
        <div v-show="isShow" class="progress-bar">
            <div class="progress-bar-inner" :style="styleObj"></div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "progress-bar",
        data() {
            return {
                isShow: false,
                percent: 0
            }
        },
        computed: {
           styleObj() {
               return {
                   width: `${this.percent}%`
               }
           }
        },
        methods: {
            show(percent) {
                this.percent = percent;
                this.isShow = true;
            },
            hide() {
                this.percent = 100;
                setTimeout(() => {
                    this.isShow = false;
                    setTimeout(() => {
                        this.percent = 0;
                    }, 800);
                }, 250);
            }
        }
    }
</script>

<style lang="less" scoped>
    .progress-bar {
        position: fixed;
        top: 50px;
        width: 100%;
        height: 3px;
        opacity: 1;
        z-index: 999;
        .progress-bar-inner {
            height: 3px;
            background: #2d8cf0;
            transition: width .2s linear;
        }
    }
    .fade-enter-active {
        transition: width .2s;
    }
    .fade-leave-active {
        transition: opacity .8s, width .2s;
    }
    .fade-enter {
        width: 0;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>