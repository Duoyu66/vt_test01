<template>
  <div class="box">
    <h3>我是game</h3>
    <h3>来砍我啊</h3>
    <RouterLink to="/home">去home</RouterLink>
    --
    <RouterLink to="/king">去王者模块</RouterLink>

    <button @click="main.increment">点我counter+1</button>
    <button @click="main.redomizeCounter">随机counter</button>
    <RouterLink to="/chat">点我到chat</RouterLink>
    <div>
      <h3> counter:{{ counter }}</h3>
      <h3>我的名字是{{ name }}</h3>
      weather是:
      {{ weather }}
    </div>
    {{ qqObj }}
    <div class="person">
      <div class="pic">
        <img :src="qqObj.imgurl" alt="" style="width: 50px;
    height: 50px;border-radius: 50%">
      </div>
     &nbsp; {{ qqObj.name }}
    </div>
  </div>

</template>
<script setup lang="ts">

import {useMain} from "../../store/home";
import {useKing} from "../../store/king";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
import {useGame} from "../../store/game";


let qqMessage = {
  qqNum: 2523890936
};


const game = useGame();
const {qqObj} = storeToRefs(game);
game.getQqMessage(qqMessage.qqNum);
const mains = useMain();
const king = useKing();
const {counter, name, weather, obj} = storeToRefs(mains);
const {heroList} = storeToRefs(king);
king.getHeroList();
// console.log(heroList);
onMounted(() => {
  console.log("我是OnMounteddd");
});
console.log("----", counter);
console.log("---", name);
console.log("---", weather);
console.log("main", mains);
mains.getWord();
console.log("obj是", obj);


</script >

<style scoped lang="less">
.box {
  width: 1200px;
  margin: 0 auto;
}
.person{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 50px;
  font-size: 12px;
}
</style>