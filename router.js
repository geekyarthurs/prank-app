import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoveMeter from '@/views/LoveMeter'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path : "/love/:id",
      name: "LoveMeter",
      component: LoveMeter
    }
    
  ]
});
