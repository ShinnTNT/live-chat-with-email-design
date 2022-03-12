<template>
  <h4>Sign Up Here</h4>

  <form @submit.prevent="signUp">
    <input type="text" placeholder="Your Name" v-model="displayName">
    <input type="email" placeholder="Email address" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">
      {{error}}
    </div>
    <button>Sign up</button>
  </form>

</template>

<script>
import {ref} from "vue"
import useSignUp from "../composables/useSignUp"
export default {
  name: "SignUp",
  setup(props,context){
    let displayName=ref("");
    let email=ref("");
    let password=ref("");

    let {error,createNewAccount} = useSignUp();

    let signUp= async ()=>{
     let ref = await createNewAccount(email.value,password.value,displayName.value);
     if(ref){
       context.emit("goToMessage")
     }
    };
    return {displayName,email,password,signUp,error}
  }
}
</script>

<style>

</style>