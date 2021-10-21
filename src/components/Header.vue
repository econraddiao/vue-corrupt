<script>
    import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
    import Honorific from './Honorific.vue'
    export default {
        props: {},
        components: {
            FontAwesomeIcon,
            FontAwesomeLayers,
            FontAwesomeLayersText,
            Honorific
        }
    }
</script>

<template>
    <header>
        <h1>
            <span> ~ hi,</span>
            <span> I'm </span>
            <span><a href="#">@econraddiao</a></span>
            <span>, the </span>
            <Honorific title=''/>
            <span>. ~</span>
        </h1>

        <p>
            MarOps & Strategy @ <a href="https://www.salesforce.com/">Salesforce</a>.
            <br>
            B.S. Architecture @ <a href="https://taubmancollege.umich.edu/">Michigan</a>.
            <br>
            <br>
            Previously @ <a href="https://numie.co/">Numie</a>, <a href="https://poshly.com">Poshly</a>, and <a href="https://qb3.org/">QB3</a>.
            <br>
            Find me on 
            <a href="https://www.linkedin.com/in/conraddiao/"><font-awesome-icon :icon="['fab', 'linkedin']" size="1x" /></a>, 
            <a href="https://www.instagram.com/conraddiao/"><font-awesome-icon :icon="['fab', 'instagram-square']" size="1x" /></a>, 
            <a href="https://twitter.com/conraddiao/"><font-awesome-icon :icon="['fab', 'twitter-square']" size="1x" /></a>.
        </p>
        <hr>
    </header>
</template>

<style scoped>
* {
    font-family: 'IBM Plex Serif', serif;
}

h1 > span:first-child {
    color: #EC5829;
}

</style>