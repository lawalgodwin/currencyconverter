<template>
  <v-app>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
<style lang="css">
body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  background-image: url("../public/img/icons/undraw_bear_market_ania.png");
  background-size: cover;
  filter: grayscale(10%);
  /* background-color: rgba(red, rgb(59, 66, 59), blue, alpha); */
}

h1 {
  font-size: 26px;
  font-weight: 600;
  color: #2c3e5099;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

#app {
  max-width: 30em;
  margin: 1em auto;
}
</style>
