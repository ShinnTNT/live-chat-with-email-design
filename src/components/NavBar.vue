<template>
  <nav v-if="user">
    <div v-if="usage">
      <Usage></Usage>
    </div>
    <button class="btn bg-white fw-bold text-black-50 usage-btn-2" @click="logout" >Log out</button>
    <button class="btn bg-white fw-bold text-black-50 usage-btn" @click="usage=!usage" >Usage</button>


    <div class="p-3 d-flex justify-content-between align-items-center con">
      <div>
        <h5>WELCOME</h5>
        <div class="text">
          {{user.displayName}}
        </div>
      </div>

      <div class="text-end">
        <p class="m-0 text-black-50 fw-bold">Entered Email..</p>
        <p class="text-2 text-black-50 ms-2 mt-2">{{user.email}}</p>
      </div>

    </div>
  </nav>


</template>

<script>
import getUser from "@/composables/getUser";
import Usage from "@/components/Usage";
import {ref} from "vue";
import {auth} from "../firebase/config"
export default {
  name: "NavBar",
  components: {Usage},
  setup(){
   let usage=ref(false);
   let {user} = getUser();
   let logout=async ()=>{
     await auth.signOut();
   }
   return {user,usage,logout}
  }
}
</script>

<style>
h5{
  color: #f3722c;
  font-weight: bold;
}
.text{
  font-weight: bold;
  color: #fff;
  min-width: 50px;
  text-align: center;
  border-radius: 10px;
  background-color: #48cae4;
  box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
}
.text-2{
  font-weight: bold;
}
.circle-pf{
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:#0077b6;
  text-align: center;
  line-height: 40px;
  color: white;
  text-transform: uppercase;
  font-size: 18px;
}
.usage-btn{
  position: absolute;
  top: 9%;
  left: 30%;
  border-radius: 12px;
  box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
}
.usage-btn-2{
  position: absolute;
  top: 9%;
  left: 25%;
  border-radius: 12px;
  box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
}
@media screen and (max-width: 576px){
  .con{
    width: 100% !important;
  }
  .usage-btn{
    position: absolute;
    top: 9%;
    left: 15%;
    border-radius: 12px;
    box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
  }
  .usage-btn-2{
    position: absolute;
    top: 9%;
    left: 39%;
    border-radius: 12px;
    box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
  }
}
@media screen and (min-width: 1080px){
  .usage-btn{
    position: absolute;
    top: 15%;
    left: 15%;
    border-radius: 12px;
    box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
  }
  .usage-btn-2{
    position: absolute;
    top: 15%;
    left: 22%;
    border-radius: 12px;
    box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
  }
}
@media screen and (min-width: 1500px){
  .usage-btn{
    position: absolute;
    top: 16%;
    left: 23%;
    border-radius: 12px;
    box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
  }
  .usage-btn-2{
    position: absolute;
    top: 16%;
    left: 28%;
    border-radius: 12px;
    box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
  }
}
</style>