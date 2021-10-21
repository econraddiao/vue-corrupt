<script>
    const badges = [
    ["__marketer", "blue"],
    ["_developer", "fuchsia"],
    ["_architect", "grey"],
    ["____singer", "red"],
    ["____artist", "green"],
    ["_____skier", "gainsboro"],
    ["__futurist", "coral"],
    ["shitposter", "saddlebrown"]
    ];

    export default {
        data() {
            return {
                title: badges[0][0],
                color: {'background-color': badges[0][1]}
            }
        },
        methods: {
            rand() {
                setInterval(() => {
                    this.title = badges[Math.floor(Math.random() * badges.length)][0];
                    this.color = {'background-color': badges[Math.floor(Math.random() * badges.length)][1]}
                }, 200);
                
            }
        }
    }
</script>

<template>
    <span @click="rand" :style="color">&nbsp;{{title}}&nbsp;</span>
</template>

<style scoped>
    span {
        font-family: 'IBM Plex Mono', monospace;
        font-style: normal;
        color: white;
    }
</style>