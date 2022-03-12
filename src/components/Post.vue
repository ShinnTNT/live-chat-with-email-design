<template>
<div class="con-2 d-flex justify-content-around">
  <textarea placeholder="Text message here" v-model="message" @keypress.enter="handleSubmit"></textarea>
  <button class="btn  cus-btn" @click="handleSubmit">Sent</button>
</div>
</template>

<script>
import {ref} from "vue";
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import {timestamp} from "@/firebase/config";
export default {
  name: "Post",
  setup(){
    let message=ref("");
    let {user} = getUser();
    let {error,addDoc} = useCollection("project-messages");
    let handleSubmit=async ()=>{
        let chat={
           message:message.value,
           name:user.value.displayName,
           created_at:timestamp()
        }
        await addDoc(chat)
         message.value=""
    }
    return {message,handleSubmit,user,error}
  }
}
</script>

<style>

textarea{
  width: 80%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 11px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
  height: 46px;
}
.cus-btn{
  width: 58px;
  height: 33px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  background-color: #48cae4;
  color: white;
}

</style>