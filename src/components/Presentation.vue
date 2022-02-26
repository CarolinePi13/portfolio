<template>
  <div>
    <div class="img-pres">
      <img
        class="profil-pic"
        alt="Photo of dev"
        src="../assets/IMG_4504-removebg-preview.png"
      />
      <h1>Hi! I am <span>Caroline.</span></h1>
    </div>

    <h2>I'm a web Developper</h2>
    <p>
      <strong>What defines me:</strong> Extroverted, enthousiastic, I am a
      perfectionnist, who loves neat and well crafted work.
    </p>
  </div>
</template>

<script>
export default {
  name: "Presentation",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.profil-pic {
  object-fit: cover;
  width: 50%;
  height: auto;
}
.img-pres {
  display: flex;
}
</style>
