<template>
  <div class="home">
    <div class="grid-inside">
      <div class="container">
        <div class="pres radius shadow">
          <presentation />
        </div>

        <div class="projet1 radius shadow">
          <router-link class="router-link p1" to="/projet1">
            <img
              class="img-effect"
              src="../assets/photoorinoco.png"
              alt="photo"
            />
          </router-link>
        </div>
        <div class="plan radius shadow">
          <img
            class="plan_top-image"
            src="../assets/830x532_region-auvergne-rhone-alpes.webp"
            alt=""
          />
          <img
            class="plan_bottom-image"
            src="../assets/auvergne-rhone-alpes.jpeg"
            alt=""
          />
        </div>
        <router-link class="router-link projet2 radius shadow" to="/projet2">
          <img src="../assets/phonedroit.png" alt="" />
        </router-link>
        <div class="more-about-me radius shadow">
          <div class="more-about-me__back-left"></div>
          <router-link class="router-link about shadow" to="/about">
            More about me!</router-link
          >
          <div class="more-about-me__bottom-right"></div>
        </div>
        <div class="twitter radius shadow">
          <a href="https://twitter.com/CaroPi13" target="_blank"
            ><img
              src="../assets/580b57fcd9996e24bc43c53e.png"
              alt="link to twitter"
          /></a>
        </div>
        <div class="linkedin radius shadow">
          <a
            href="https://www.linkedin.com/in/caroline-perret-webdev/"
            target="_blank"
          >
            <img
              src="../assets/Linkedin-logo-on-transparent--background-PNG.png"
              alt="link to linkedIn"
          /></a>
        </div>
        <div class="projet3 radius shadow">
          <p>Projets en cours:</p>
          Optimisation d'un site WordPress, Creation d'un site optimisé et
          responsive sur WordPress
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import presentation from "../components/Presentation.vue";

export default {
  name: "Home",
  components: {
    presentation,
  },
  data() {
    return {
      skills: ["Javascipt", "Vue.Js", "Node.Js", "SQL"],
      futureskills: ["Python", "Django", "React.Js"],
      englishSoftSkills: ["dynamic", "organized", "pro-active", "attentive"],
      frenchSoftSkills: ["dynamique", "organisée", "pro-active", "À l'écoute"],
      expanded: false,
      hover: false,
    };
  },
  methods: {
    toggleHover() {
      this.hover = !this.hover;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/animations";

.pres {
  grid-area: pres;
  background-color: #7fa492;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
}

.about {
  padding: 25px;
  background-color: #7fa492;
  width: fit-content;
  color: #2c3e50;
  border-radius: 20px;
  position: relative;

  z-index: 3;
  overflow: hidden;
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

.about {
  &:hover::before {
    left: 0px;
    top: 0px;
  }
}
.projet1 {
  grid-area: projet1;
  background-color: #3f6357;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .img-effect {
    object-fit: cover;
    width: 100%;
    height: auto;
    position: relative;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: transform 0.4s cubic-bezier(0.65, -0.02, 0.65, 0.64);
    transition: transform 0.4s cubic-bezier(0.65, -0.02, 0.65, 0.64);
    &:hover {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}
.plan {
  background-color: white;
  grid-area: plan;
  overflow: hidden;
  position: relative;

  .plan_top-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: opacity 0.5s cubic-bezier(0.65, -0.02, 0.65, 0.64);
    transition: opacity 0.5s cubic-bezier(0.65, -0.02, 0.65, 0.64);
    &:hover {
      opacity: 0;
      z-index: 3;
    }
  }
  .plan_bottom-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.projet2 {
  grid-area: projet2;
  background-color: #31434e;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    object-fit: cover;
    margin-right: -50px;
    width: 100%;
    height: 80%;
    transform: rotate(-35deg);
    transition: transform 300ms 100ms cubic-bezier(0.65, -0.02, 0.65, 0.64);
  }
  &:hover > img {
    transform: rotate(0deg);
  }
}

.more-about-me {
  grid-area: more-about-me;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.more-about-me__back-left {
  position: absolute;
  background: #31434e;
  top: 0px;
  left: 0px;
  width: 250px;
  height: 120px;
  border-radius: 40px 0 100% 0/ 30% 50% 50% 50%;
}
.more-about-me__bottom-right {
  position: absolute;
  background: #7fa492;
  bottom: 0px;
  right: 0px;
  width: 150px;
  height: 250px;
  border-radius: 50% 50% 50% 50%/ 80% 20% 50% 50%;
}
.twitter {
  grid-area: twitter;
  background-color: white;
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
}
.linkedin {
  grid-area: linkedin;
  background-color: white;
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
}
.projet3 {
  grid-area: projet3;
}

.grid-inside {
  position: relative;
  margin: auto;
  padding-bottom: 80px;
  min-width: 320px;
  max-width: 600px;

  @media (min-width: 799px) {
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
}
.container {
  display: grid;
  grid-template-columns: 140px 140px;
  grid-template-rows: 140px 140px 140px 140px 140px 140px 140px 140px;
  gap: 20px 20px;
  justify-content: center;
  grid-auto-flow: row;
  grid-template-areas:
    "pres pres"
    "pres pres"
    "more-about-me more-about-me"
    "plan projet1"
    "projet2 projet1"
    "projet2 twitter"
    "linkedin ."
    "projet3 projet3";

  margin: 0;
  @media (min-width: 500px) {
    grid-template-columns: 200px 200px;
    grid-template-rows: 200px 200px 200px 200px 200px 200px 200px 200px;
  }
  @media (min-width: 799px) {
    grid-template-columns: 350px 350px;
    grid-template-rows: 350px 350px 350px 350px 350px 350px 350px 350px;
    grid-template-areas:
      "pres projet1 "
      "more-about-me projet1 "
      " plan twitter"
      " projet3 projet3  "
      "projet2 linkedin"
      "projet2 .";

    padding: 35px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 300px 300px 300px 300px 300px 300px 300px;
    grid-template-areas:
      "pres pres pres"
      "more-about-me more-about-me projet1 "
      "plan twitter projet1"
      "plan projet2 linkedin"
      " projet3 projet2 . "
      ". . . "
      " . . . ";
  }
}
.p1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
