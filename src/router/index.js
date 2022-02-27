import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import French from '../components/FrenchPresentation.vue'
import project1 from "../components/Project1.vue";
import CvCaro from "../components/CV.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/french',
    name: 'FrenchPresentation',
    component: French
  },
  {
    path: '/projet1',
    name: 'projet1',
    component: project1
  },
  {
    path: '/cv',
    name: 'CV',
    component: CvCaro
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
