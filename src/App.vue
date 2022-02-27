<template>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
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
  font-size: 2em;
}
</style>
