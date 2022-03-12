import {ref} from "vue"
import {auth} from "../firebase/config"

let error=ref(null);
let createNewAccount=async (email,password,displayName)=>{
    try {
        let res=await auth.createUserWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("could not create this user")
        };
        res.user.updateProfile({displayName});
        return res
    }catch (err){
        error.value=err.message
    }
}
let useSignUp=()=>{
    return {error,createNewAccount}
}
export default useSignUp;
