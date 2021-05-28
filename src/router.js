import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Experience from "./views/Experience.vue";
import Projects from "./views/Projects.vue";
import Education from "./views/Education.vue";
import Skills from "./views/Skills.vue";
import Publications from "./views/Publications.vue";


Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
        path: "/education",
        name: "Education",
        component: Education
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills
    },
    {
      path: "/publications",
      name: "Publications",
      component: Publications
    },
  ]
});

export default router;