<template>
<div class="post">
    <h3>{{post.title}}</h3>
    <img :src="post.images[0]" alt="">
    <p>{{post.copy}}</p>
</div>
</template>

<script>
    export default {
        name: 'Post',
        props: {
            post: Object,
        }
    }
</script>

<style>
    .post {
        margin: 1rem;
        max-width: 800px;
    }
</style>