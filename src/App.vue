<template>
  <navigation />
  <router-view />
</template>
<script>
import navigation from "./components/Navigation.vue";

export default {
  components: {
    navigation,
  },
};
</script>
<style lang="scss">
* {
  box-sizing: content-box;
  font-family: "Signika Negative", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  background-color: #ccdbd4;
}
body {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
#nav {
  padding: 2%;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    color: black;
    list-style: none;
    text-decoration: none;
  }
}
a {
  list-style: none;
  text-decoration: none;
  color: black;
}
li {
  list-style: none;
}
.radius {
  border-radius: 40px;
}
.shadow {
  box-shadow: #c0cac5 2px 2px 10px 2px;
}
</style>
