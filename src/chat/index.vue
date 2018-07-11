<template>
    <div class="chat">
        <div class="title">
            <p>小姐姐，我观察你很久了</p>
            <h1>做我女朋友好不好？</h1>
        </div>
        <div class="select">
            <div class="btn" @click="handleOk">{{okText}}</div>
            <div class="btn" @click="handleNo">{{noText}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                index: 0,
                okText: "好",
                noText: "不好"
            }
        },
        methods: {
            handleOk() {
                alert("3号目标已拿下！");
            },
            handleNo() {
                if (this.index === -1) {
                    alert("哈哈，好好好");
                    return;
                }
                this.index += 1;
                switch(this.index) {
                    case 1:
                        alert("我妈会游泳！");
                        break;
                    case 2:
                        alert("跪键盘不疼！");
                        break;
                    case 3:
                        alert("房子写你名！");
                        break;
                    default:
                        alert("那只能用终极技能了！");
                        this.index = -1;
                        this.noText = "Yes";
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .chat {
        padding: 50px;
        .title {
            padding: 20px 0 20px;
            p {
                line-height: 80px;
            }
            h1 {
                line-height: 100px;
            }
        }
        .select {
            display: flex;
            justify-content: center;
            .btn {
                width: 150px;
                height: 50px;
                border: 1px solid #eee;
                border-radius: 5px;
                line-height: 50px;
                text-align: center;
                margin-right: 30px;
            }
        }
    }
</style>