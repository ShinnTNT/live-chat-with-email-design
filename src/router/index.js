import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "@/views/Welcome";
import EmailMessage from "@/views/EmailMessage";
import {auth} from "../firebase/config"

const routes = [
  {
    path:'/',
    name:"welcome",
    component:Welcome,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(!user){
        next()
      }else {
        next({name:'EmailMessage'})
      }
    }
  },
  {
    path: '/emailMessage',
    name: "EmailMessage",
    component: EmailMessage,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(user){
        next()
      }else {
        next({name:'welcome'})
      }
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
