<template>
    <div class="app">
        <top-nav />
        <router-view />
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

</style>