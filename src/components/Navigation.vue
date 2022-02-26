<template>
  <div>
    <nav id="nav">
      <ul class="gray">
        <router-link class="router-link" to="/">Home</router-link>

        <router-link class="router-link" to="/about">About</router-link>

        <router-link class="router-link" to="/">English</router-link>

        <router-link class="router-link" to="/french">French</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss">
.gray {
  background-color: #ece8e8;
  width: fit-content;
  border-radius: 35px;
  padding: 12px 4px;
}
.router-link {
  border-radius: 25px;
  padding: 6px 15px;
  margin: 4px;
  @media (min-width: 799px) {
    font-size: 1.5em;
  }
  @media (min-width: 1200px) {
    font-size: 2em;
  }
  &:hover {
    background-color: white;
  }
}
</style>
