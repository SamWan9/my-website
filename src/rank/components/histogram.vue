<template>
    <div class="container" :style="styleObj">
        <div class="rate" :style="rateStyleObj"></div>
    </div>
</template>

<script>

    let checkPattern = function (val) {
        let notNumber = isNaN(Number(val));
        if (notNumber) {
            let trueSize = /^\d+(px|em|rem|%|in|cm|mm|pt|pc|ex|ch|vw|vh|vmin|vmax)$/.test(val);
            if (trueSize) {
                return "string";
            } else {
                throw new Error("传入的长度单位不正确，请以[px|em|rem|%|in|cm|mm|pt|pc|ex|ch|vw|vh|vmin|vmax]作为单位");
            }
        } else {
            return "number";
        }
    };

    let formatSize = function (val) {
        let type = checkPattern(val);
        if (type === "number") {
            // 不带单位，默认加px
            return val + "px";
        } else if (type === "string") {
            return val;
        }
    };

    let computedRadius = function (height) {
        let type = checkPattern(height);
        if (type === "number") {
            return height / 2 + "px";
        } else if (type === "string") {
            let numStr = "";
            let unit = height.replace(/\d/g, s => {
                numStr += s;
            });
            return numStr / 2 + unit;
        }
    };

    // 定义不同等级的颜色
    const LEVEL_COLOR = {
        "1": "purple",
        "2": "red",
        "3": "orange",
        "4": "green",
        "5": "blue",
        "6": "#80848f"
    };

    export default {
        props: {
            width: {
                type: [String, Number],
                default() {
                    return 150;
                }
            },
            height: {
                type: [String, Number],
                default() {
                    return 6;
                }
            },
            value: {
                type: [String, Number],
                default() {
                    return 0;
                }
            },
            rateOptions: {
                type: Object,
                default() {
                    return {
                        max: 100,
                        step: 20
                    }
                }
            }
        },
        name: "histogram",
        computed: {
            styleObj() {
                return {
                    width: formatSize(this.width),
                    height: formatSize(this.height),
                    borderRadius: computedRadius(this.height)
                }
            },
            rateStyleObj() {
                let rate = Math.round(this.value / this.rateOptions.max * 100);
                rate = rate > 100 ? 100 : rate;
                return {
                    width: rate + "%",
                    borderRadius: computedRadius(this.height),
                    backgroundColor: LEVEL_COLOR[this.colorLevel]
                }
            },
            colorLevel() {
                let curLevel = "",
                    step = this.rateOptions.step,
                    max = this.rateOptions.max,
                    value = Number(this.value),
                    totalLevel = max / step;
                for (let i = totalLevel; i > 0; i--) {
                    if (value < i * step && value > (i - 1) * step) {
                        curLevel = i;
                    }
                }
                return totalLevel - curLevel + 1;
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        background: #dddee1;
        .rate {
            height: 100%;
        }
    }
</style>