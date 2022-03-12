<template>
<div>
  <h3 class="mt-4 text-white">Chat Room</h3>
  <NavBar></NavBar>
  <AllPost></AllPost>
  <Post></Post>
</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Post from "@/components/Post";
import AllPost from "@/components/AllPost";
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router"
import {watch} from "vue";
export default {
  name: "EmailMessage",
  components: {AllPost, Post, NavBar},
  setup(){
    let {user} = getUser();
    let router = useRouter()
     watch(user,()=>{
       if(!user.value){
         router.push("/")
       }
     });
     return{user}
  }
}
</script>

<style>
h3{
  text-align: center;
}
</style>