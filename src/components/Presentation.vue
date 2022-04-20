<template>
  <div class="presentation">
    <div class="pres-img">
      <img
        class="profil-pic"
        alt="Photo of dev"
        src="../assets/img_4504-removebg-preview-2.png"
      />
    </div>
    <p>
      Hi! I'm <strong>Caroline. </strong>I'm a web Developper.
      <strong>What defines me:</strong> Extroverted, enthousiastic, a
      perfectionnist, who loves neat and well crafted work!
    </p>
    <div class="contact-me">
      <a
        class="contact"
        onClick="javascript:window.open('mailto:coraline.mo63@gmail.com', 'my-window');event.preventDefault()"
        href="mailto:coraline.mo63@gmail.com"
      >
        Contact</a
      >
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
  font-size: 1em;
  p {
    padding: 0 5px 5px 5px;
    width: 90%;
    margin: auto;
    @media (min-width: 500px) {
      font-size: 1.2em;
    }
    @media (min-width: 799px) {
      font-size: 1em;
    }

    @media (min-width: 1200px) {
      font-size: 1.6em;
      width: 60%;
      margin: 2%;
    }
  }
  strong {
    font-family: "Coiny", cursive;
    // font-family: "Bangers", cursive;
  }

  // font-family: "Pacifico", cursive;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
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
  margin-bottom: 0px;
  @media (min-width: 500px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
}

.contact-me {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.contact {
  color: #2c3e50;
  padding: 3%;
  background-color: #eceef0;
  padding: 25px;
  width: 50%;
  margin-top: 4%;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  @media (min-width: 1200px) {
    margin-top: 0;
    padding: 25px;
    width: 50%;
  }
  &hover {
    color: white;
  }
  &::before {
    content: "";
    position: absolute;
    background-color: rgba(165, 214, 190, 0.5);
    left: -100%;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: -99;
    transition: all 0.7s;
  }
}
.contact {
  &:hover::before {
    left: 0px;
    top: 0px;
  }
}
</style>
