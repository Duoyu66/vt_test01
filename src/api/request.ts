//对axios二次封装
import axios from "axios"
//利用axios方法创建一个axios实例
const service = axios.create({
    baseURL:"/",
    timeout:5000
})
//请求拦截器
service.interceptors.request.use((config)=>{

    return config;
})
//响应拦截器
service.interceptors.response.use((res)=>{
    return res.data;
},(err)=>{
    console.log("响应失败"+err)
})
export default service