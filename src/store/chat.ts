import {defineStore} from "pinia";
import {reqChatGpt, reqPeople} from "../api";

export const useChat =defineStore('chat',{
    state:()=>{
        return{
           obj:{},
        paiPeople:{}
        }
},
    getters:{},
    actions:{
       async getChatWord(){
           console.log("--");
           this.obj=await reqChatGpt();
           console.log("---");
        },

        async getPaiImg(value:String){
           this.paiPeople = await reqPeople(value);
            console.log("@@@@",await reqPeople(value));
        }
    }
})