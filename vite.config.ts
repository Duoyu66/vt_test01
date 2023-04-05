import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createProxyMiddleware} from "http-proxy-middleware";
// https://vitejs.dev/config/
//  http://www.emmapi.com/chatgpt?text=${msg}`
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/':{
        target:'http://localhost:3000',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\//,'')
      }
    }
  }
})
