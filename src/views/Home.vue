<template>
  <div class="home">
    <navigation />
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
          <skills
            class="hard-skill"
            v-for="skill in skills"
            :key="skill"
            :skill="skill"
          />
        </div>
        <div class="projet2 radius shadow">
          <router-link class="router-link" to="/projet2">this way!</router-link>
          <img src="../assets/phonedroit.png" alt="" />
        </div>
        <div class="more-about-me radius shadow inside-grid">
          <a
            class="contact"
            onClick="javascript:window.open('mailto:coraline.mo63@gmail.com', 'my-window');event.preventDefault()"
            href="mailto:coraline.mo63@gmail.com"
          >
            Contact</a
          >
          <router-link class="router-link about" to="/about">
            More about me!</router-link
          >
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
import skills from "../components/Skills.vue";

import navigation from "../components/Navigation.vue";
import presentation from "../components/Presentation.vue";

export default {
  name: "Home",
  components: {
    skills,
    navigation,
    presentation,
  },
  data() {
    return {
      skills: ["Javascipt", "Vue.Js", "Node.Js", "SQL"],
      futureskills: ["Python", "Django", "React.Js"],
      englishSoftSkills: ["dynamic", "organized", "pro-active", "attentive"],
      frenchSoftSkills: ["dynamique", "organisée", "pro-active", "À l'écoute"],
      expanded: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "../assets/animations";

.pres {
  grid-area: pres;
  background-color: #7fa492;
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
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    &:hover {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}
.plan {
  background-color: white;
  grid-area: plan;
}

.projet2 {
  grid-area: projet2;
  background-color: white;
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
    transition: transform 300ms 100ms;
  }
  &:hover > img {
    transform: rotate(0deg);
  }
}

.more-about-me {
  grid-area: more-about-me;
  background-color: #31434e;
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
      " more-about-me twitter"
      "plan . "
      "projet2 linkedin"
      "projet2 projet3"
      " . projet3";
    padding: 35px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 300px 300px 300px 300px 300px 300px 300px;
    grid-template-areas:
      "pres pres pres"
      "more-about-me more-about-me projet1 "
      "plan . projet1"
      "plan twitter  ."
      "projet2 . linkedin"
      "projet2 .. "
      "projet3 projet3 . ";
  }
}
.p1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.radius {
  border-radius: 40px;
}
.shadow {
  box-shadow: #c0cac5 2px 2px 10px 2px;
  &:hover {
    box-shadow: #838a86 3px 3px 3px 2px;
  }
}
</style>
