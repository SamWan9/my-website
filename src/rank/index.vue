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

    /**
     *
     * 0 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     * 1 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     * 2 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     * 3 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     * 4 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     * 5 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     * 6 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     * 7 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     * 8 [0, 1, 2, 3, 4, 5, 6, 7, 8]
     *
     * 0.0-2 0-2
     * 1.3-5 0-2
     * 2.6-8 0-2
     * 3.0-2 3-5
     * 4.3-5 3-5
     * 5.6-8 3-5
     * 6.0-2 6-8
     * 7.3-5 6-8
     * 8.6-8 6-8
     *
     */

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
        computed: {
            colData() {
                let arr = [];
                this.singleNumData.forEach((item, index) => {
                    for (let i = 0; i < length; i++) {
                        if (!Array.isArray(arr[i])) {
                            arr[i] = [];
                        }
                        arr[i][index] = item[i];
                    }
                });

                return arr;
            },
            squareData() {
                let arr = [];
                for (let i = 0; i < length; i++) {
                    let row = this.singleNumData[i];
                    for (let j = 0; j < length; j++) {
                        if (!Array.isArray(arr[j])) {
                            arr[j] = [];
                        }

                        let rI = Math.floor(i / 3),
                            cI = Math.floor(j / 3);

                        arr[rI * 3 + cI].push(row[j]);

                        /*if (i >= 0 && i < 3 && j >= 0 && j < 3) {
                            // i: 0, j: 0
                            arr[0].push(row[j]);
                        }

                        if (i >= 0 && i < 3 && j >= 3 && j < 6) {
                            // i: 0, j: 1
                            arr[1].push(row[j]);
                        }

                        if (i >= 0 && i < 3 && j >= 6 && j < 9) {
                            // i: 0, j: 2
                            arr[2].push(row[j]);
                        }

                        if (i >= 3 && i < 6 && j >= 0 && j < 3) {
                            // i: 1, j: 0
                            arr[3].push(row[j]);
                        }

                        if (i >= 3 && i < 6 && j >= 3 && j < 6) {
                            // i: 1, j: 1
                            arr[4].push(row[j]);
                        }

                        if (i >= 3 && i < 6 && j >= 6 && j < 9) {
                            // i: 1, j: 2
                            arr[5].push(row[j]);
                        }

                        if (i >= 6 && i < 9 && j >=0 && j < 3) {
                            // i: 2, j: 0
                            arr[6].push(row[j]);
                        }*/
                    }
                }

                return arr;
            }
        },
        methods: {
            checkValueFormat() {
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
            isRepeat(arr) {
                let tempArr = [];
                for (let i = 0, len = arr.length; i < len; i++) {
                    let item = Number(arr[i]);
                    if (item !== 0) {
                        if (tempArr.indexOf(item) !== -1) {
                            return true;
                        }
                        tempArr.push(item);
                    }
                }
                return false;
            },
            checkOneValue(rowI, colI) {
                // debugger;
                // 1.验证当前行是否有重复
                if (this.isRepeat(this.singleNumData[rowI])) {
                    return false;
                }
                // 2.验证当前列是否有重复
                if (this.isRepeat(this.colData[colI])) {
                    return false;
                }
                // 3.验证当前九宫格是否有重复
                return !this.isRepeat(this.squareData[Math.floor(rowI / 3) * 3 + Math.floor(colI / 3)]);
            },
            checkAnswer() {
                // debugger;
                // 1.验证每一行是否有重复
                for (let i = 0; i < length; i++) {
                    let temp = this.singleNumData[i];
                    if (this.isRepeat(temp)) {
                        return false;
                    }
                }

                // 2.验证每一列是否有重复
                for (let i = 0; i < length; i++) {
                    let temp = this.colData[i];
                    if (this.isRepeat(temp)) {
                        return false;
                    }
                }

                // 3.验证每一个九宫格是否有重复
                for (let i = 0; i < length; i++) {
                    let temp = this.squareData[i];
                    if (this.isRepeat(temp)) {
                        return false;
                    }
                }

                return true;
            },
            getAnswer() {
                if (!this.checkValueFormat()) return;

                // 根据已有值填充剩余数字

                let preAry = [];

                let tryEveryOne = (rowI, colI, dir) => {
                    // debugger;
                    if (rowI === 9) {
                        return true;
                    }
                    if (rowI === -1) {
                        return false;
                    }
                    let curVal = this.singleNumData[rowI][colI];
                    let preOne = () => {
                        if (colI - 1 < 0) {
                            colI = 8;
                            rowI = rowI - 1;
                        } else {
                            colI = colI -1;
                        }
                    };
                    let nextOne = () => {
                        if (colI + 1 > 8) {
                            colI = 0;
                            rowI = rowI + 1;
                        } else {
                            colI = colI + 1;
                        }
                    };

                    if (typeof curVal === "string" && curVal) {
                        if (dir === "pre") {
                            preOne();
                            return tryEveryOne(rowI, colI, "pre");
                        } else {
                            nextOne();
                            return tryEveryOne(rowI, colI, "next");
                        }
                    }

                    let initVal = 0,
                        mistake = true;
                    if (dir === "pre") {
                        initVal = preAry.pop() + 1;
                    }
                    for (let i = initVal; i < length; i++) {
                        this.singleNumData[rowI][colI] = i + 1;
                        this.singleNumData = [...this.singleNumData];
                        if (this.checkOneValue(rowI, colI)) {
                            mistake = false;
                            preAry.push(i);
                            nextOne();
                            return tryEveryOne(rowI, colI, "next");
                        }
                    }
                    if (mistake) {
                        this.singleNumData[rowI][colI] = "";
                        preOne();
                        return tryEveryOne(rowI, colI, "pre");
                    }
                };

                if (!tryEveryOne(0, 0, "next")) {
                    alert("无解。。。。");
                } else if (!this.checkAnswer()) {
                    alert("无解。。。。");
                }

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