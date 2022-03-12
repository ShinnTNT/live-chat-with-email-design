<template>
<div class="con welcome">
   <div v-if="showLogin">
     <Login @goToMessage="goToMessage"></Login>
     <p>Don't have an account ? <span @click="showLogin=!showLogin">create account</span></p>
   </div>
   <div v-else>
     <SignUp @goToMessage="goToMessage"></SignUp>
     <p>Already have an account ? <span @click="showLogin=!showLogin">login there</span></p>
   </div>
</div>
</template>

<script>
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import {ref} from "vue";
import {useRouter} from "vue-router";
export default {
  name: "Welcome",
  components: {SignUp, Login},
  setup(){
    let router=useRouter();
    let showLogin=ref(true);
    let goToMessage=()=>{
      router.push({name:'EmailMessage'})
    }
    return {showLogin,goToMessage}
  }
}
</script>

<style>
.welcome{
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
/* .welcome label {
  display: block;
  margin: 20px 0 10px;
} */
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>