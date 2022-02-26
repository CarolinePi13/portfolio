<template>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
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
  padding: 30px;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    color: black;
    list-style: none;
    text-decoration: none;
  }
}
</style>
