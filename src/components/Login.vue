<template>

  <h4>Login Here</h4>

 <form @submit.prevent="login">

   <input type="email" placeholder="Email address" v-model="email">
   <input type="password" placeholder="Password" v-model="password">
   <button>Log in</button>

   <div v-if="error" class="error">
     {{error}}
   </div>

 </form>

</template>

<script>
import {ref} from "vue"
import useLogin from "@/composables/useLogin";
export default {
  name: "Login",
  setup(props,context){
    let email=ref("");
    let password=ref("");

    let {error,signIn} = useLogin();

    let login= async ()=>{
     let ref = await signIn(email.value,password.value);
     if(ref){
      context.emit("goToMessage")
     }
    };
    return {email,password,login,error}
  }
}
</script>

<style>

</style>