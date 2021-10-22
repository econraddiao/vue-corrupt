<template>
<div
 @click='click()'
 class="post"
 :id="`p-${post.id}`">
    <h3>{{post.title}}</h3>
    <img :src="post.images[0]" alt="">
    <p>{{post.copy}}</p>
</div>
</template>

<script>
    import shave from "shave"

    export default {
        name: 'Post',
        inject: ['shave'],
        props: {
            post: Object,
            key: String
        },
        data() {
            return {
                isExpanded: Boolean
            }
        },
        mounted() {
            this.isExpanded = false;
            shave(`#p-${this.post.id} > p`, 70, {character: '... more'});
        },
        methods: {
            click() { 
                if(!this.isExpanded) {
                    this.$el.querySelector('p').innerHTML = this.$el.querySelector('p > .js-shave').innerHTML;
                    this.isExpanded = true;
                }
            }

        }
    }
</script>

<style>
    .post {
        margin: 1rem;
        max-width: 800px;
    }
    .js-shave-char {
        color: var(--color-three);
    }
</style>