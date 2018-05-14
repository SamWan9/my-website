<template>
    <div class="home-background">
        <div class="message">
            <p>我见青山多妩媚，料青山见我应如是</p>
        </div>
        <div class="mask"></div>
    </div>
</template>

<script>
    export default {
        name: "home-background"
    }
</script>

<style lang="less" scoped>
    .home-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("/img/bg.jpg") no-repeat center/cover;
        .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, .2);
            z-index: 10;
        }
        .message {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 500px;
            height: 200px;
            border: 5px solid #2d8cf0;
            border-radius: 10px;
            line-height: 200px;
            text-align: center;
            font-weight: 600;
            font-size: 16px;
            z-index: 11;
            background: rgba(255, 255, 255, .5);
        }
    }
</style>