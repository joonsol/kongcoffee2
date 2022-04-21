<template lang="">
  <div id="container">
    <h2>coffee list</h2>
    <div class="in_wrap">

      <div v-for="(c,i) in coffees" :key="i" class="content">
        <h3 @click="modalOpen(i)">{{c.title}}</h3>
        <img @click="modalOpen(i)" :src="c.image" :alt="c.id">
      </div>
    </div>
    <button class="more" @click="more"> 더보기</button>
    <Modal :modal="modal" :coffee="coffees" :crt="crt" @closeModal="modalClose"></Modal>

  </div>
</template>
<script>
  import axios from 'axios';
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
      more() {
        axios.get(`https://joonsol.github.io/data/more0.json`)
          .then(result => {
            console.log(result)
            this.coffees.push(result.data);
            // this.더보기++;
          })
      },
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

  .more {
    border: none;
    color: rgb(77, 77, 77);
    border-radius: 2rem;
    padding: 0 1rem;
    display: inline-block;
    margin-top: 3rem;
    padding: 0 2rem;
    line-height: 3rem;
    cursor: pointer;
  }
</style>