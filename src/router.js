import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Resume from '@/components/Resume.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact'


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
