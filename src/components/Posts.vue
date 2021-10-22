<script>
import Post from './Post.vue'
    export default {
        name: 'Posts',
        props: {
            posts: Array
        },
        components: {
            Post
        }
    }
</script>

<template>
<div class="posts">
<Post 
    v-for="post in posts" 
    :key="post.id"
    :post="post"
/>
</div>
</template>

<style scoped>
.posts {
    margin-top: 247px;
}
</style>