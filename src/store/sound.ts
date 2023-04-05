import {defineStore, storeToRefs} from "pinia";
import {reqSound} from "../api";

export const useSound=defineStore('sound',{
    state:()=>{
        return {
        heroSounds:{}
        }
    },
    getters:{},
    actions:{
       async  getSound(){
            let result = await reqSound();
            this.heroSounds = result;
           console.log(result);
        }
    }
})