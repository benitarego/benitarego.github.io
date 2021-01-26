import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
},
{
    path: '/projects',
    name: 'projects',
    component: Projects
},
{
    path: '/education',
    name: 'education',
    component: Education
},
{
    path: '/skills',
    name: 'skills',
    component: Skills
}
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
