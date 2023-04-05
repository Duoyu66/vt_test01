import requests from './request'
import * as url from "url";
//每日一言 https://v.api.aa1.cn/api/yiyan/index.php
export const reqWord = ()=>requests({url:'https://v.api.aa1.cn/api/yiyan/index.php',method:'get'})

//王者荣耀英雄列表
export const reqHeroList =()=>requests({url:'https://www.somekey.cn/mini/hero/getHeroList.php',method:'get'})
//王者语音
// export const reqSound=()=>requests({url:'https://xiaobai.klizi.cn/API/other/wzyyb.php?msg=赵云',method:'get'})
export const reqSound=()=>requests({url:'https://api.vvhan.com/api/weather?city=徐州',method:'get'})
//王者英雄讲解
export const reqHeroMessage=()=>requests({url:'https://zj.v.api.aa1.cn/api/wz/?msg=武则天',method:'get'})
//王者语音
export const reqHeroWordList=()=>requests({url:'http://api.btstu.cn/qqxt/api.php?qq=2523890936',method:'get'})

//chatGPT  http://www.emmapi.com/chatgpt?text=你好
// export const reqCeshi =(msg:string) =>requests({url:`http://www.emmapi.com/chatgpt?text=${msg}`,method:'get'})
// export const reqChatGpt =(msg:string) =>requests({url:`/chatgpt?text=${msg}`,method:'get'})
export const reqChatGpt =() =>requests({url:'https://api.vvhan.com/api/yinghua',method:'get'})
//背景图片
export const reqApi=()=>requests({url:'https://v.api.aa1.cn/api/pc-girl_bz/index.php?wpon=json',method:'get'})
//小人举牌
export const reqPeople=(word:String)=>requests({url:`https://v.api.aa1.cn/api/api-jupai/index.php?msg=${word}`,method:'get'})

//qq信息
export const reqQqMessage=(qqNum:number)=>requests({url:`https://api.vvhan.com/api/qq?qq=${qqNum}`,method:'get'})

export const reqBB=()=>requests({url:'/users',method:'get'})