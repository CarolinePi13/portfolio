<template>
  <div class="home">
    <navigation />
    <div class="grid-inside">
      <div class="container">
        <div class="pres radius">
          <presentation />
        </div>

        <div class="projet1 radius">
          <img src="../assets/photoorinoco.png" alt="photo" />
          <div class="rond-blanc">
            <router-link class="router-link" to="/projet1"></router-link>
          </div>
        </div>
        <div class="plan radius">
          <skills
            class="hard-skill radius"
            v-for="skill in skills"
            :key="skill"
            :skill="skill"
          />
        </div>
        <div class="projet2 radius"></div>
        <div class="more-about-me radius">
          <a
            onClick="javascript:window.open('mailto:coraline.mo63@gmail.com', 'my-window');event.preventDefault()"
            href="mailto:coraline.mo63@gmail.com"
          >
            Contact</a
          >
          <router-link class="router-link" to="/cv"> CV</router-link>
        </div>
        <div class="twitter radius">
          <a href="https://twitter.com/CaroPi13" target="_blank"
            ><img
              src="../assets/580b57fcd9996e24bc43c53e.png"
              alt="link to twitter"
          /></a>
        </div>
        <div class="linkedin radius">
          <a
            href="https://www.linkedin.com/in/caroline-perret-webdev/"
            target="_blank"
          >
            <img
              src="../assets/Linkedin-logo-on-transparent--background-PNG.png"
              alt="link to linked in"
          /></a>
        </div>
        <div class="projet3 radius"></div>
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
      skills: ["Javascipt", "Vue.Js", "Python", "Django", "SQL"],
      englishSoftSkills: ["dynamic", "organized", "pro-active", "attentive"],
      frenchSoftSkills: ["dynamique", "organisée", "pro-active", "À l'écoute"],
    };
  },
};
</script>

<style lang="scss">
.rond-blanc {
  border-radius: 50%;
  background-color: white;
  boder: 1px solid black;
  padding: 20px;
  width: 20px;
}
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
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
}

.plan {
  background-color: white;
  grid-area: plan;
}

.projet2 {
  grid-area: projet2;
  background-color: white;
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
  gap: 15px 20px;
  justify-content: center;
  grid-auto-flow: row;
  grid-template-areas:
    "pres pres"
    "pres pres"
    "more-about-me more-about-me"
    "plan projet1"
    "projet2 projet1"
    "projet2 twitter"
    "linkedin .";

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
      "projet2 ."
      " . .";
    padding: 35px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 300px 300px 300px 300px 300px 300px 300px 300px;
    grid-template-areas:
      "pres pres pres"
      "more-about-me more-about-me projet1 "
      ". . projet1"
      "plan twitter  ."
      "projet2 . linkedin"
      "projet2 . . "
      ". . . ";
  }
}
.radius {
  border-radius: 40px;
}
</style>
