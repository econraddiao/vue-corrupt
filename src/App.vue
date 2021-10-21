<template>
  <Header/>
  <Footer/>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Serif&display=swap');  
  :root{
    --color-one: black;
    --color-two: #EC5829;
    --color-three: #E5E5E5;
  }
  html {
    font-size: 18px;
    margin: 0;
  }

  html * {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  a { 
    color: var(--color-two);
  }

  hr {
    widows: 100%;
    border-width: 1px;
    border-style: solid;
    color: var(--color-three);
  }

  #app {
    font-family: 'IBM Plex Serif', serif;
    margin: 1rem;
  }

</style>