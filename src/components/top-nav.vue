<template>
    <div class="top-nav">
        <router-link tag="span" class="item" to="/">Home</router-link>
        <router-link tag="span" class="item" to="/blog">Blog</router-link>
        <router-link tag="span" class="item" to="/resume">Resume</router-link>
        <router-link tag="span" class="item" to="/chat">Chat</router-link>
        <router-link tag="span" class="item" to="/rank">Rank</router-link>
    </div>
</template>

<script>
    export default {
        name: "top-nav"
    }
</script>

<style lang="less" scoped>
    .top-nav {
        position: absolute;
        top: 0;
        width: 100%;
        height: 50px;
        background: hsla(0, 0%, 100%,.4);
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
        z-index: 100;
        display: flex;
        align-items: center;
        text-indent: 30px;
        .item {
            padding-right: 20px;
            cursor: pointer;
            transition: all .2s ease-in-out;
            &:hover {
                color: #338bff;
            }
            &.active {
                color: #338bff;
            }
        }
    }
    @media screen and (max-width: 520px) {
        .top-nav {
            overflow-x: auto;
            &::-webkit-scrollbar {
                display:none;
            }
        }
    }
</style>