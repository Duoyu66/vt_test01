<template>
<div>
  obj
  {{obj.url}}
  <img :src="obj.url" alt="">
  <!--  {{// obj.info.tip}}-->
  <!--  {{paiPeople}}-->
  <img :src="paiPeople" alt="">
</div>
</template>

<script>
import {useChat} from "../../store/chat.ts";
import {storeToRefs} from "pinia";
import pcas from '../../assets/jsonFile/pcas-code.json'
export default {
  name: "chat",
  setup() {
    const chat = useChat();
    const {obj,paiPeople} = storeToRefs(chat);
    chat.getChatWord();
    chat.getPaiImg("家人们谁懂啊");
    // onMounted(() => {
    //   console.log("obj的值", this.obj)
    // })
    console.log(pcas)
    return {
      obj,
      paiPeople
    }
  }
}
</script>
<style scoped>

</style>