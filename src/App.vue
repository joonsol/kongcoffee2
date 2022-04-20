<template>
  <Banner :BannerState="BannerState" @bannerClose="closeBanner"></Banner>
  <Header />
  <router-view></router-view>
</template>

<script>
  import Header from './components/Header.vue'
  import Banner from './components/Banner'
  export default {
    name: 'App',
    data() {
      return {
        BannerState: true

      }
    },
    methods: {
      closeBanner() {
        this.BannerState = false
      }
    },
    components: {
      Header,
      Banner
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body {
    font-size: 62.5%;

  }

  a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 1.4rem;
  }

  h1 {}

  #container {
    text-align: center;
    margin: 3rem 20px 0;
  }

  h2 {
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 2.3rem;
    text-transform: uppercase;
    background-color: #eee;
    padding: 1rem 0;
    color: #808080
  }

  img {
    width: 200px;
    height: auto;
  }

  h3 {
    color: gray;
    text-transform: uppercase;
    font-size: 1.3rem;
    margin: 3rem 0 1rem;
  }
</style>