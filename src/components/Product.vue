<template lang="">
  <div id="container">
    <h2>coffee list</h2>
    <div class="in_wrap">

      <div v-for="(c,i) in coffees" :key="i" class="content">
        <h3 @click="modalOpen(i)">{{c.title}}</h3>
        <img @click="modalOpen(i)" :src="c.image" :alt="c.id">
      </div>
    </div>
    <Modal :modal="modal" :coffee="coffees" :crt="crt" @closeModal="modalClose"></Modal>

  </div>
</template>
<script>
  import coffee from '../assets/coffee.js'
  import Modal from './Modal'

  export default {
    data() {
      return {
        coffees: coffee,
        crt: 0,
        modal: false,
      }
    },

    methods: {
      modalOpen(i) {
        this.crt = i
        this.modal = true
      },
      modalClose() {
        this.modal = false
      }
    },

    components: {
      Modal
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