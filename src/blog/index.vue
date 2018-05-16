<template>
    <div class="blog">
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
        mounted() {
            axios.get("/getBlogList").then(res => {
                console.log(res);
                this.BlogList = [...res.data];
            }).catch(error => {
                console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>