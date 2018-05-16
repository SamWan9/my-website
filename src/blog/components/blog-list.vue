<template>
    <div class="blog-list">
        <div v-for="(item, index) in blogList" class="blog-item" :key="index">
            <h2 class="title">{{item.title}}</h2>
            <p class="subscribe">{{item.subscribe}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blog-list",
        props: {
            blogList: {
                type: Array,
                default: () => [
                    {
                        title: "",
                        subscribe: ""
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .blog-list {
        margin: 0 auto;
        width: 70%;
        .blog-item {
            margin-top: 30px;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #eee;
            cursor: pointer;
            transition: all .2s ease-in-out;
            &:hover {
                box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
            }
            h2 {
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
                color: #1c2438;
            }
            p {
                line-height: 25px;
                color: #495060;
                padding-top: 10px;
            }
        }
    }
</style>