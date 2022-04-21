<template lang="">
  <div class="modal_Container" v-if="modal">
    <div class="modal">
      <div class="modal">

        <h4>{{coffee[crt].title}}</h4>
        <img :src="coffee[crt].image" :alt="coffee[crt].id">
        <p>{{coffee[crt].text}}</p>
        <span @click="mClose" class="close material-icons">
          close
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      coffee: Array,
      crt: Number,
      modal: Boolean
    },
    methods: {
      mClose() {
        this.$emit('closeModal')
       
      }
    },
  }
</script>
<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60rem;
    max-width: 90vw;
    min-height: 60rem;
    overflow-y: auto;
    background-color: rgb(255, 255, 255);
    z-index: 3;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 3rem;
  }

  .modal_Container {
    z-index: 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.856);
    display: block;
    width: 100%;
    height: 100%;
  }

  h3 {
    font-size: 3rem;
  }

  img {
    width: 30rem;
    display: inline-block;
  }

  h4 {
    font-size: 2.5rem;
  }

  p {
    margin-top: 3rem;
    font-size: 2rem;
    padding: 0 3rem;
  }

  .close {
    border: none;
    color: rgb(77, 77, 77);
    border-radius: 2rem;
    padding: 0 1rem;
    display: inline-block;
    margin-top: 3rem;
    line-height: 3rem;
  }
</style>