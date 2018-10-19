<template>
    <div class="rank">
        <h1>rank</h1>
        <div class="container">
            <histogram :value="860312" :rate-options="rateOptions" />
        </div>
        <div class="container">
            <histogram :value="603125" :rate-options="rateOptions" />
        </div>
        <div class="container">
            <histogram :value="131253" :rate-options="rateOptions" />
        </div>


        <div class="single-num">
            <div class="checkerboard">
                <div class="row" v-for="(item, index) in singleNumData" :key="index">
                    <div class="col" v-for="(inner, innerIndex) in item" :key="innerIndex">
                        <input @input="handleInput(index, innerIndex, $event)" class="hide-input" type="text" v-model="singleNumData[index][innerIndex]" />
                    </div>
                </div>
            </div>

            <div class="answer" @click="getAnswer">answer</div>
        </div>
    </div>
</template>

<script>
    import Histogram from "./components/histogram";

    const getSingleNumData = length => {
        let arr = [];

        while (arr.length < length) {
            let inner = [];

            while (inner.length < length) {
                inner.push("");
            }

            arr.push(inner);
        }

        return arr;
    };
    const length = 9;

    export default {
        components: {Histogram},
        name: "index",
        data() {
            return {
                rateOptions: {
                    max: 1200000,
                    step: 200000
                },
                singleNumData: getSingleNumData(length)
            }
        },
        methods: {
            checkValue() {
                let flag = true, row = 0, col = 0;
                for (let i = 0; i < length; i++) {
                    let temp = this.singleNumData[i];
                    for (let j = 0; j < length; j++) {
                        if (isNaN(Number(temp[j]))) {
                            flag = false;
                            row = i;
                            col = j;
                            break;
                        }
                    }
                }
                if (!flag) {
                    alert(`第${row + 1}行第${col + 1}列格式不正确，请重写 …（⊙＿⊙；）…`);
                }
                return flag;
            },
            getAnswer() {
                if (!this.checkValue()) return;
                console.log(this.singleNumData);

                // 根据已有值填充剩余数字




            },
            handleInput(index, innerIndex, event) {
                let val = event.data;

                if (val && (!Number(val) || Number(val) < 1 || Number(val) > 9)) {
                    this.singleNumData[index][innerIndex] = "";
                    alert("请输入数字1-9 …（⊙＿⊙；）…");
                    return;
                }

                if (val) {
                    event.target.style.color = "#f29735";
                } else {
                    event.target.style.color = "#4f5868";
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .rank {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            margin-bottom: 20px;
        }
        .container {
            margin-bottom: 20px;
        }
        .single-num {
            text-align: center;

            .checkerboard {
                display: flex;
                flex-direction: column;
                .row {
                    display: flex;
                    .col {
                        width: 50px;
                        height: 50px;
                        border: 1px solid #f29735;
                        .hide-input {
                            display: inline-block;
                            width: 50px;
                            height: 50px;
                            text-align: center;
                            border: 0;
                            outline: none;
                            color: #4f5868;
                            font-size: 24px;
                        }
                    }
                }
            }

            .answer {
                display: inline-block;
                margin-top: 2em;
                font-size: 16px;
                padding: .46em 1.6em;
                border: 3px solid rgba(62, 146, 255, .6);
                border-radius: .4em;
                color: #3e92ff;
                cursor: pointer;
                transition: all .2s ease-in-out;
                &:hover {
                    cursor: pointer;
                    border-color: #3e92ff;
                }
            }
        }
    }
</style>