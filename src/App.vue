<template>
  <transition name="slide">
    <Header :honorifics="[honorifics]" />
  </transition>
  <Posts :posts="posts" />
  <!--<Footer />-->
</template>

<script>
  import Header from './components/Header.vue'  
  import Posts  from './components/Posts.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Posts,
      Footer
    },
    created() {
      this.honorifics = [
        {
          id: 1,
          title: '__marketer',
          color: 'blue'
        },
        {
          id: 2,
          title: '_developer',
          color: 'fuchsia'
        },
        {
          id: 3,
          title: '_architect',
          color: 'grey'
        },
        {
          id: 4,
          title: '____singer',
          color: 'red'
        },
        {
          id: 5,
          title: '____artist',
          color: 'green'
        },
        {
          id: 6,
          title: '_____skier',
          color: 'gainsboro'
        },
        {
          id: 7,
          title: '__futurist',
          color: 'coral'
        },
        {
          id: 8,
          title: 'shitposter',
          color: 'saddlebrown'
        }
      ]
      this.posts = [
        {
          id: 1,
          title: "Lorem Ipsum dolor est",
          type: "gallery",
          copy: "Pariatur eiusmod quis eiusmod enim consectetur in ad nostrud eu dolor nostrud mollit proident. Anim magna tempor excepteur occaecat in nostrud labore consequat incididunt cupidatat dolor mollit. Deserunt aliquip labore labore enim reprehenderit ea laborum anim occaecat id consequat cillum. Mollit laboris fugiat veniam incididunt qui. Amet adipisicing eu est incididunt nulla excepteur nulla elit et.",
          images: [
            "https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png"
          ]
        },
        {
          id: 2,
          title: "Lorem Ipsum dolor est",
          type: "gallery",
          copy: "Pariatur eiusmod quis eiusmod enim consectetur in ad nostrud eu dolor nostrud mollit proident. Anim magna tempor excepteur occaecat in nostrud labore consequat incididunt cupidatat dolor mollit. Deserunt aliquip labore labore enim reprehenderit ea laborum anim occaecat id consequat cillum. Mollit laboris fugiat veniam incididunt qui. Amet adipisicing eu est incididunt nulla excepteur nulla elit et.",
          images: [
            "https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png"
          ]
        },
        {
          id: 3,
          title: "Lorem Ipsum dolor est",
          type: "gallery",
          copy: "Pariatur eiusmod quis eiusmod enim consectetur in ad nostrud eu dolor nostrud mollit proident. Anim magna tempor excepteur occaecat in nostrud labore consequat incididunt cupidatat dolor mollit. Deserunt aliquip labore labore enim reprehenderit ea laborum anim occaecat id consequat cillum. Mollit laboris fugiat veniam incididunt qui. Amet adipisicing eu est incididunt nulla excepteur nulla elit et.",
          images: [
            "https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png"
          ]
        },
        {
          id: 4,
          title: "Lorem Ipsum dolor est",
          type: "gallery",
          copy: "Pariatur eiusmod quis eiusmod enim consectetur in ad nostrud eu dolor nostrud mollit proident. Anim magna tempor excepteur occaecat in nostrud labore consequat incididunt cupidatat dolor mollit. Deserunt aliquip labore labore enim reprehenderit ea laborum anim occaecat id consequat cillum. Mollit laboris fugiat veniam incididunt qui. Amet adipisicing eu est incididunt nulla excepteur nulla elit et.",
          images: [
            "https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png"
          ]
        },
        {
          id: 5,
          title: "Lorem Ipsum dolor est",
          type: "gallery",
          copy: "Pariatur eiusmod quis eiusmod enim consectetur in ad nostrud eu dolor nostrud mollit proident. Anim magna tempor excepteur occaecat in nostrud labore consequat incididunt cupidatat dolor mollit. Deserunt aliquip labore labore enim reprehenderit ea laborum anim occaecat id consequat cillum. Mollit laboris fugiat veniam incididunt qui. Amet adipisicing eu est incididunt nulla excepteur nulla elit et.",
          images: [
            "https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png"
          ]
        },
        {
          id: 6,
          title: "Lorem Ipsum dolor est",
          type: "gallery",
          copy: "Pariatur eiusmod quis eiusmod enim consectetur in ad nostrud eu dolor nostrud mollit proident. Anim magna tempor excepteur occaecat in nostrud labore consequat incididunt cupidatat dolor mollit. Deserunt aliquip labore labore enim reprehenderit ea laborum anim occaecat id consequat cillum. Mollit laboris fugiat veniam incididunt qui. Amet adipisicing eu est incididunt nulla excepteur nulla elit et.",
          images: [
            "https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png"
          ]
        }
      ]
    },
    provide() {
      return {
        honorifics: Vue.computed(() => this.honorifics)
      }
    },
    data() {
      return {
        honorifics: Array,
        posts: Array
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Serif&display=swap');  
  :root{
    --color-one: black;
    --color-two: #EC5829;
    --color-three: #E5E5E5;
    font-family: 'IBM Plex Serif', serif;
  }
  html, body {
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
  }
  @media screen and (max-width: 435px) {
      h1 {
        font-size: 1.65rem;
      }
  }

  p {
    font-size: 1rem;
  }

  a { 
    color: var(--color-two);
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  hr {
    width: 100%;
    margin-top: 1rem;
    border-width: 1px;
    border-style: solid;
    color: var(--color-three);
  }

  #app > * {
    font-family: 'IBM Plex Serif', serif;
  }

</style>