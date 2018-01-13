import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import login from "./loginRouter";
import admin from "./adminrouter";

import myDesignrouter from "./myDesignrouter";
import homes from "@/components/home"
import zou from "./zou";
import about from "./about";
import demo from "./demo";
import cart from "./cart";
import pay from "./pay";
import paymoney from "./paymoney";
import designer from "./designer";
import vr from "./3dvr"
import xwx from './xwx'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:homes,
      meta:{
        isShow:true
      }
    },
    ...login,
    ...admin,
    ...home,
    ...myDesignrouter,

    ...zou,
    ...about,
    ...designer,
    ...cart,
    ...pay,
    ...demo,
    ...paymoney,
    ...xwx,
    ...vr,
  ]
})

