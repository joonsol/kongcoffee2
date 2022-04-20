<template lang="">
  <div id="container">
    <h2>coffee list</h2>
    <div class="in_wrap">

      <div v-for="(c,i) in coffees" :key="i" class="content">
        <h3 @click="modalOpen(i)">{{c.title}}</h3>
        <img @click="modalOpen(i)" :src="c.image" :alt="c.id">
      </div>
    </div>
</div>
</template>
<script>
  import coffee from '../assets/coffee.js'
  export default {
    data() {
      return {
        coffees: coffee
      }
    }
  }
  </script>
<style scoped>
    #container {
    margin-bottom: 10rem
  }

  .in_wrap {
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
  }

  img {
    /* width: auto; */
    height: auto;
  }

  h3 {
    color: gray;
    font-size: 1.6rem;
    margin: 3rem 0 1rem;
    position: relative
  }

  h3:after {
    display: block;
    content: "";
    width: 10%;
    height: .5rem;
    background-color: gainsboro;
    margin: 1rem auto
  }

</style>