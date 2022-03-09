<template>
  <div class="presentation">
    <div class="pres-img">
      <img
        class="profil-pic"
        alt="Photo of dev"
        src="../assets/img_4504-removebg-preview-2.png"
      />
      <p>
        Hi! I am <strong>Caroline.</strong>I'm a web Developper.
        <strong>What defines me:</strong> Extroverted, enthousiastic, I am a
        perfectionnist, who loves neat and well crafted work.
      </p>
    </div>
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
.presentation {
  font-size: 1.1em;
  p {
    margin-top: 0;
    padding: 0 5px 5px 5px;
    width: 90%;
    margin: auto;

    @media (min-width: 1200px) {
      font-size: 1.6em;
    }
  }
  strong {
    font-family: "Coiny", cursive;
    // font-family: "Bangers", cursive;
  }

  // font-family: "Pacifico", cursive;

  @media (min-width: 1200px) {
    display: flex;
  }
}

.profil-pic {
  object-fit: cover;

  width: 120px;
  max-width: 300px;
  height: auto;
  @media (min-width: 500px) {
    width: 150px;
  }
  @media (min-width: 799px) {
    width: 150px;
  }

  @media (min-width: 1200px) {
    width: 200px;
  }
}
.pres-img {
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
}
</style>
