<template>
  <div id="about">
    <main>
      <section>
        <div class="intro radius">
          <div class="pic">
            <img src="" alt="" />
          </div>
          <h1>Who am I?</h1>
          <p class="bio">
            Hi! I a web Developer from the center of France. I learned coding
            online, then went trough a official diploma. I used to work as
            manager's assistant.<br /><br />My purpose is to help small
            buisnesses have nice and efficient websites, that have good SEO and
            accessibility. I love making other's lives easier. <br /><br />

            I have always been interested in creating, love a good british
            humour and am outgoing and speak with confidence. <br /><br />
            I am autonomous and like learning by myself. I love challenges and
            will work hard ot push projects trough no matter what. Hit
            <strong>contact</strong> if you want to work with me!
          </p>
          <div class="contact-me-position">
            <div class="contact-me-btn">
              <a
                class="contact"
                onClick="javascript:window.open('mailto:coraline.mo63@gmail.com', 'my-window');event.preventDefault()"
                href="mailto:coraline.mo63@gmail.com"
              >
                Contact</a
              >
            </div>
          </div>
        </div>
        <div class="langages-frameworks radius">
          <div class="mytools radius">
            <h3>My tools :</h3>

            <ul class="hard-skill" v-for="skill in skills" :key="skill">
              <li>{{ skill }}</li>
            </ul>
          </div>
          <div class="working-on radius">
            <h3>What I am working on:</h3>

            <ul
              class="future-skills"
              v-for="futureSkill in futureSkills"
              :key="futureSkill"
            >
              <li>{{ futureSkill }}</li>
            </ul>
          </div>
        </div>
        <div class="softwares-tools">
          <h3>The tools I like to work with:</h3>
          <p>VS Code, GitHub</p>
        </div>
        <div class="langages">
          <h3>The languages I speak:</h3>
          <ul>
            <li>French : Native</li>
            <li>English : C2 Biligual</li>

            <li>Italian: Intermediate</li>
            <li>German: beginner</li>
          </ul>
        </div>
        <div class="links"></div>
      </section>

      <section class="corps">
        <div class="training">
          <h3>What training do I have?</h3>
          <span class="date">2021-2022</span>
          <p>
            Web Developer at <a href="openclassromms.com">OpenClassRooms</a>
          </p>
        </div>
        <div class="abilities"></div>
        <div class="passions">
          <h3>What do I love doing aside from coding?</h3>
          <ul>
            <li>
              <img src="../assets/Theatre.png" alt="image of masks" />
              <p>Writing sketches and directing</p>
            </li>
            <li>
              <img src="../assets/deco.png" alt="image of a sofa" />
              <p>Interior decorating</p>
            </li>
            <li>
              <img
                src="../assets/enfance.png"
                alt="image of a mother cuddling her child"
              />
              <p>motherhood, babycarying, breastfeeding assistance</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        "Javascipt",
        "Typescript",
        "Vue.Js",
        "SQL",
        "Bootstrap",
        "Node.Js",
        "MongoDb",
      ],
      futureSkills: ["Python", "Django", "React.Js", "Java", "PhP"],
      englishSoftSkills: ["dynamic", "organized", "pro-active", "attentive"],
      frenchSoftSkills: ["dynamique", "organisée", "pro-active", "À l'écoute"],
    };
  },
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}
#about {
  width: 90%;
  margin: auto;
}

.passions {
  ul {
    display: flex;
    padding-inline-start: 0px;
    margin: auto;
    li {
      width: 33%;
    }
    img {
      width: 100px;
    }
  }
}

.exp_detail {
  display: flex;
}
.bio {
  font-size: 1.2em;
}
h2 {
  font-size: 1.4em;
}
h3 {
  font-size: 1.1em;
}
h4 {
  font-size: 1em;
}
.date {
  width: 20%;
}
.exp_text {
  width: 80%;
  text-align: left;
  margin-left: 2%;
  h3,
  h4 {
    margin: 0;
  }
}
.bio {
  margin: 3%;
  text-align: left;
}
.intro {
  background-color: white;
}
.langages-frameworks {
  display: flex;
  justify-content: space-around;
  column-gap: 30px;
  margin-top: 30px;
}
.mytools,
.working-on {
  background-color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  ul {
    padding-inline-start: 0px;
  }
}
.contact-me-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}
.contact-me-position {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}
</style>
