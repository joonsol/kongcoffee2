<template lang="">
  <header>
    <h1>
      <router-link to="/">CoffeeKong</router-link>

    </h1>
    <nav>

      <router-link to="/">product</router-link>
      <router-link to="/company">company</router-link>
      <router-link to="/service">service</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid #eee;
    border-top:3px solid  rgb(107, 51, 160);
  }

  h1 a {
    font-size: 3rem;
    text-transform: uppercase;
  }

  nav a {
    text-transform: uppercase;
    font-size: 1.6rem;
    padding: 0 2rem;
  }

  nav a.router-link-active {
    color: blueviolet
  }

  @media screen and (max-width:70rem) {
    header {
      display: block;
      padding: 0;
      text-align: center;

    }

    header h1 {
      padding: 1.2rem;
    }

    nav {
      text-align: center;
      width: 100%;
      border-top: 1px solid #eee;
      padding: .5rem 0;
    }

    nav a {
      font-size: 1.3rem;
    }
  }
</style>