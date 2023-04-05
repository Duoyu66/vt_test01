<template>
<div>
  <div class="quan">
    <img :src="ImgUrl.img" alt="">
  </div>
  <h1>我是home</h1>
  <h1>来砍我啊</h1>
  <RouterLink to="/game">去game</RouterLink>
  <button @click="switchImg">点击我换图片</button>
  <RouterLink to="/chat">点我到chat</RouterLink>
</div>

</template>

<script>
import {storeToRefs} from "pinia";
import {useSound} from "../../store/sound.ts";
import {useMain} from "../../store/home.ts";

export default {
  name: "home",
  setup() {
    const sound = useSound();
    const main = useMain();
    const {heroSounds} = storeToRefs(sound);
    const {ImgUrl} = storeToRefs(main);
    sound.getSound();
    main.getImg();

    //
    function switchImg(){
      main.getImg();
    }
    return {
      heroSounds,
      ImgUrl,
      switchImg
    }
  }
}
</script>

<style scoped lang="less">
.quan {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>