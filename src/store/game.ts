import {defineStore} from "pinia";
import {reqQqMessage} from "../api";
export const useGame = defineStore('game', {
    state:()=>{
        return {
            qqObj:{}
        }
    },
    actions:{
        async getQqMessage(qqNum:number){
            this.qqObj = await reqQqMessage(qqNum);
        }
    },
    getters:{

    }
})