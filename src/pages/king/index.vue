<template>

  <div style="width: 1000px;margin: 0 auto">
    {{  heroMessage}}
    <el-card class="box-card">
      <template #header>
        <div class="card-header ">
          <span class="ge"> 王者英雄大全</span>
        </div>
      </template>
      <div class="text item container " v-for="item in heroList.data" :key="item.ename">
          <img :src="item.iconUrl" alt="">
          <p>{{item.cname}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import {useKing} from "../../store/king.ts";
import {storeToRefs} from "pinia";
import {useSound} from "../../store/sound.ts";
export default {
  name: "king",
  setup() {
    //英雄列表
    const king = useKing();
    const {heroList,heroMessage} = storeToRefs(king);
    king.getHeroList();
    king.getHeroMessage();
    return {
      heroList,
      heroMessage
    }
  }
}
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}
.container {
  margin: 15px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  border: 1px solid red;
  img{
    width: 100%;
    height: 100%;
  }
}

.ge {
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 800px;
  height: 100%;
}

</style>