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
    </div>
</template>

<script>
    import Histogram from "./components/histogram";

    export default {
        components: {Histogram},
        name: "index",
        data() {
            return {
                rateOptions: {
                    max: 1200000,
                    step: 200000
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
    }
</style>