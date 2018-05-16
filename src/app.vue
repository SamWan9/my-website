<template>
    <div class="app">
        <top-nav />
        <router-view class="view" />
    </div>
</template>

<script>
    import TopNav from "./components/top-nav";

    export default {
        components: {TopNav},
        name: "app"
    }
</script>

<style scoped>
    .view {
        padding-top: 50px;
    }
</style>