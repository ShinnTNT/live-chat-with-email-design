<template>
 <div class="con-2 chat-window">
   <div>
     <h5>Messages</h5>

   </div>
   <div class="posts" ref="msgBox">
     <div class="single d-flex align-items-center" v-for="message in formattedMessages" :key="message.id">

       <div class="d-flex">
         <div class="num-circle">{{message.name.charAt(0)}}</div>
         <span class="name ms-2">{{message.name}}</span>
       </div>

       <div class="custom-mes">
         <span class="d-block text-black-50" style="font-weight: 500;font-size: 14px">{{message.created_at}} ago</span>
         <span style="font-weight: 600;font-size: 19px;">{{message.message}}</span>
       </div>
     </div>
   </div>
 </div>
</template>

<script>

import {computed, onUpdated, ref} from "vue";
import {db} from "../firebase/config"
import {formatDistanceToNow} from "date-fns"

export default {
  name: "AllPost",
  setup(){
   let messages=ref([]);
   let msgBox=ref(null);

   let formattedMessages=computed(()=>{
     return messages.value.map((mes)=>{
       let formatTime=formatDistanceToNow(mes.created_at.toDate())
       return {...mes,created_at:formatTime}
     })
   })

   onUpdated(()=>{
     msgBox.value.scrollTop=msgBox.value.scrollHeight
   })

   db.collection("project-messages").orderBy("created_at").onSnapshot((snap)=>{
     let results=[];
      snap.docs.forEach((doc)=>{
         let document={...doc.data(),id:doc.id};
       doc.data().created_at && results.push(document)
      });
      messages.value=results
   })
   return {messages,formattedMessages,msgBox}
  }
}
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
  box-shadow: 2px 4px 6px  rgba(28,6,49,0.1);
  padding: 10px;
  border-radius: 10px;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  width: 100px;
  font-weight: 600;
  margin-right: 6px;
  line-height: 35px;
  font-size: 18px;
}

.posts {
  max-height: 400px;
  overflow: auto;
}
.num-circle{
  width: 40px;
  height: 40px;
  background-color: #42b983;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  color: white;
  font-size: 24px;
}
.custom-mes{
  width: 808px;
  text-align: end;
}
</style>