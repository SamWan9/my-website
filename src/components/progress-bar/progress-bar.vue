<template>
    <transition name="fade">
        <div v-show="isShow" class="progress-bar"></div>
    </transition>
</template>

<script>
    export default {
        name: "progress-bar",
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            show() {
                this.isShow = true;
            },
            hide() {
                setTimeout(() => {
                    this.isShow = false;
                }, 1000);
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
        background: #2d8cf0;
        z-index: 999;
    }
    .fade-enter-active {
        transition: width 1s;
    }
    .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter {
        width: 0;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>