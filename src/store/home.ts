import {defineStore} from "pinia";
import {reqApi, reqHeroList, reqWord} from "../api";

export const useMain = defineStore("main", {
    state: () => {
        return {
            //所有这些属性都将自动推断类型
            counter: 0,
            name: "baoer",
            weather: {},
            obj: {
                name: "张三丰",
                age: 88
            },
            ImgUrl:{}

        };
    },
    getters: {
        doubleConut: (state) => {
            return state.counter * 2;
        }
    },
    //相当于vuex的mutation+action，可以同时写同步和异步的而代码
    actions: {
        //天气
        async getWord() {
            let result = await reqWord();
            this.weather = result;
            // console.log("我是actions中的weather",this.weather);
            console.log("我是result", result);
        },
        increment() {
            this.counter++;
        },
        redomizeCounter() {
            setTimeout(() => {
                this.counter = Math.round(100 * Math.random());
            });
        },
        //图片
        async getImg () {
            this.ImgUrl = await reqApi();
        }

    }
});