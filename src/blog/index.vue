<template>
    <div class="blog">
        <button style="width: 100px; height: 30px; margin-top: 30px;" @click="start">start</button>
        <button style="width: 100px; height: 30px; margin-top: 30px;" @click="end">end</button>
        <blog-list :blogList="BlogList" />
    </div>
</template>

<script>
    import BlogList from "./components/blog-list";
    import axios from "axios";

    export default {
        components: {BlogList},
        name: "index",
        data() {
            return {
                BlogList: []
            }
        },
        methods: {
            start() {
                this.$Loading.start();
            },
            end() {
                this.$Loading.end();
            }
        },
        mounted() {
            axios.get("/getBlogList").then(res => {
                this.BlogList = [...res.data];
            }).catch(error => {
                console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>