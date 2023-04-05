import {defineStore} from "pinia";
import {reqHeroList, reqHeroMessage} from "../api";

export const useKing =defineStore("king",{
    state:()=>{
        return {
            heroList:{},
            heroMessage:{}
        }
    },
    getters:{

    },
    actions:{
        async getHeroList(){
            this.heroList=await reqHeroList()
        },
        async getHeroMessage(){
            this.heroMessage=await reqHeroMessage();
        },
    }
})