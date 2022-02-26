<template>
  <div class="home">
    <navigation />
    <div class="grid-inside">
      <div class="container">
        <div class="pres radius">
          <presentation />
        </div>

        <div class="projet1 radius">
          <router-link class="router-link" to="/projet1">Home</router-link>
          <img src="../assets/photoorinoco.png" alt="photo" />
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
          <contact />
        </div>
        <div class="twitter radius"></div>
        <div class="linkedin radius"></div>
        <div class="projet3 radius"></div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "../components/Skills.vue";
import contact from "../components/Contact.vue";
import navigation from "../components/Navigation.vue";
import presentation from "../components/Presentation.vue";

export default {
  name: "Home",
  components: {
    skills,
    contact,
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
.pres {
  grid-area: pres;
  background-color: #7fa492;
}

.projet1 {
  grid-area: projet1;
  background-color: #3f6357;
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
}
.linkedin {
  grid-area: linkedin;
  background-color: white;
}
.grid-inside {
  position: relative;
  margin: -16px auto 0px;
  padding-bottom: 80px;
  max-width: 320px;
  @media (min-width: 799px) {
    max-width: 375px;
  }
  @media (min-width: 799px) {
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 15px 20px;

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
  @media (min-width: 799px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "pres pres projet1"
      "pres pres projet1 "
      "more-about-me more-about-me projet1"
      "plan twitter  ."
      "projet2 . linkedin"
      "projet2 . . "
      ". . . ";
    padding: 35px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "pres pres pres"
      ". . projet1 "
      "more-about-me more-about-me projet1"
      "plan twitter  ."
      "projet2 . linkedin"
      "projet2 . . "
      ". . . ";
  }
}
.radius {
  border-radius: 35px;
}
</style>
