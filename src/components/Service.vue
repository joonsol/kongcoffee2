<template lang="">
  <div id="container">
    <h2>
      service
    </h2>
    <div class="service_wrap">
      <nav>
        <a href="#" v-for="(tab,i) in service" :key="i"  @click.prevent="tabOpen(i)" v-bind:class="{On:i===crt}">
          {{tab.title}}
        </a>
      </nav>
      <div class="service_content"  v-for="(tab,i) in service" :key="i">
        <div v-if="crt==i">
          <h4> {{tab.content}}</h4>
          <p>{{tab.call}}</p> 
          <span class="material-icons">
            {{tab.icon}}
          </span>
          <button class="svc_btn">
            {{tab.title}} 바로가기
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import service from '../assets/service.js'
  export default {
    data() {
      return {
        service: service,
        crt: 0,
        On: ''
      }
    },
    methods: {
      tabOpen(i) {
        this.crt = i
        console.log(this.crt);
      }
    },
  }
</script>
<style >
  .service_wrap nav {
    display: flex;
    justify-content: space-around;
    height: 5rem;
    align-items: center;
  }

  .service_wrap nav a {
    display: block;
    height: 100%;
    width: 100%;
    line-height: 5rem;
    border-bottom: 3px solid rgb(224, 224, 224)
  }

  .service_wrap nav a.On {
    background-color: rgb(244, 233, 255);
    color: rgb(97, 47, 143);
    border-bottom: 3px solid rgb(97, 47, 143)
  }

  .service_content>div {
    height: 50rem;
    border: 1px solid rgb(224, 224, 224);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5rem;
  }

  .service_content>div p {
    font-weight: 600;
    font-size: 3rem;
  }

  .service_content>div h4 {
    font-size: 1.6rem;
    font-weight: 200;
  }

  .service_content>div span {
    font-size: 10rem;
    display: inline-block;
    margin: 3rem 0;
    color: rgb(97, 47, 143)
  }

  .svc_btn {
    border: none;
    padding: .5rem 2rem;
    border-radius: 3rem;
    cursor: pointer;
  }
</style>