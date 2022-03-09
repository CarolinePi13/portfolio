<template>
  <div class="about">
    <h1>About me</h1>
    <h2 class="name">Name: Caroline Perret</h2>
    <main>
      <aside class="aside radius shadow">
        <div class="pic">
          <img src="" alt="" />
        </div>

        <div class="ask-for-more"></div>
        <div class="langages-frameworks">
          <p class="hard-skill" v-for="skill in skills" :key="skill">
            {{ skill }}
          </p>
          <P>What I am working on:</P>
          <p
            class="future-skills"
            v-for="futureSkill in futureSkills"
            :key="futureSkill"
          >
            {{ futureSkill }}
          </p>
        </div>
        <div class="softwares-tools">
          <p>The tools I like to work with:</p>
        </div>
        <div class="langages">
          <li>French : Native</li>
          <li>English : C2 Biligual</li>

          <li>Italian: Intermediate</li>
          <li>German: beginner</li>
        </div>
        <div class="links"></div>
      </aside>

      <div class="corps">
        <!--<div class="exp">
         <p>My professional journey:</p>
          <div class="uca exp_detail">
            <span class="date">2017-2019</span>
            <div class="exp_text">
              <h3>Université Clermont Auvergne</h3>
              <h4>Adjointe technique de recherche et formation</h4>
              <p>
                Gestion administrative Achat et facturation de service Gestion
                et organisation d’évènement
              </p>
            </div>
          </div>
          <div class="hotel exp_detail">
            <span class="date">2013-2015</span>
            <div class="exp_text">
              <h3>Hotel le Chatel-Royat</h3>
              <h4>Gouvernante/Receptioniste</h4>
              <p>Management d’équipe Relation de clientèle internationale</p>
            </div>
          </div>

          <div class="arenfip exp_detail">
            <span class="date">2011-2012</span>
            <div class="exp_text">
              <h3>
                ARENFIP-Association des Résidences de l'École Nationale des
                Finances Publique
              </h3>
              <h4>Employée polyvalante de restauration</h4>
            </div>
          </div>
          <div class="oceola exp_detail">
            <span class="date">2004-2008</span>
            <div class="exp_text">
              <h3>Hotel Oceola-Floride</h3>
              <h4>employée d'étage</h4>
            </div>
          </div>
          
        </div>-->
        <div class="training">
          <p>What training do I have?</p>
          <span class="date">2021-2022</span>
          <p>
            Web Developer at <a href="openclassromms.com">OpenClassRooms</a>
          </p>
        </div>
        <div class="abilities">
          <p>Who am I?</p>
          <p class="bio">
            I have always been intersted in creating, I love a good british
            humour. I am outgoing and I speak with confidence, I know what I am
            able to do or not. I am autonomous and like learning by myself. I
            love challenges and will work hard ot push projects trough no matter
            what. Hit the contact if you want to work with me!
          </p>
        </div>
        <div class="passions">
          <p>What I love doing aside from coding:</p>
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
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skills: ["Javascipt", "Vue.Js", "SQL", "Bootstrap", "Node.Js", "MongoDb"],
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
  flex-direction: column-reverse;
}
aside {
  background-color: white;
}
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
.exp_detail {
  display: flex;
}

h2 {
  font-size: 1.2em;
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
</style>
