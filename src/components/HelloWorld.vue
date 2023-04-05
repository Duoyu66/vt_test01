<script setup lang="ts ">

</script>

<template>
<div class="big">
  <div class="box">
    <RouterLink to="/game">
      <div class="btn-index">
        <button class="btn-xuan">   点我到game</button>
      </div>
    </RouterLink>

    <RouterLink to="/home">
      <div class="btn-index">

        <div class="btn-xuan">      点我到home</div>
      </div>
    </RouterLink>
    <RouterLink to="/chat">
      <div class="btn-index">

        <div class="btn-xuan">      点我到chat</div>
      </div>
    </RouterLink>
    <RouterLink to="/login">
      <div class="btn-index">

        <div class="btn-xuan">      点我到login</div>
      </div>
    </RouterLink>

  </div>
<div style="width: 1000px;margin: 0 auto">
  <el-carousel :interval="4000" type="card" height="400px" >
    <el-carousel-item >
      <img src="./images/1.png" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="./images/2.png" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="./images/3.png" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="./images/4.png" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="./images/5.png" alt="" style="width: 100%;height: 100%;">
    </el-carousel-item>
    <el-carousel-item >
      <img src="./images/6.png" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
  <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
  </div>
</div>
</template>
<style scoped>
.big{
  font-family: "阿里妈妈数黑体 Bold",fantasy;font-weight: 700;src: url("../assets/font/FsWwOUI62wb8.woff2") format("woff2"),
url("../assets/font/FsWwOUI62wb8.woff")format("woff");
  font-display: swap;
}
/*轮播图*/

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/**/
.box {

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 300px;
}

.btn-index {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 300px;
background: pink;
  border-radius: 10%;
 font-size: 32px;
}

/*
*/
.wrapper {
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: skyblue;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 .5s alternate infinite ease;
}

@keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

.circle:nth-child(2) {
  left: 45%;
  animation-delay: .2s;
}

.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}

.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 .5s alternate infinite ease;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: .7;
  }

  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
}

.shadow:nth-child(4) {
  left: 45%;
  animation-delay: .2s
}

.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}
/**/
.btn-xuan{
  --width: 270px;
  --timing: 2s;
  border: 0;
  width: var(--width);
  padding-block: 1em;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  background: rgb(64, 192, 87);
  transition: all 0.2s;
  border-radius: 3px;
}
.btn-xuan:hover{
  background-image: linear-gradient(to right, rgb(250, 82, 82), rgb(250, 82, 82) 16.65%, rgb(190, 75, 219) 16.65%, rgb(190, 75, 219) 33.3%, rgb(76, 110, 245) 33.3%, rgb(76, 110, 245) 49.95%, rgb(64, 192, 87) 49.95%, rgb(64, 192, 87) 66.6%, rgb(250, 176, 5) 66.6%, rgb(250, 176, 5) 83.25%, rgb(253, 126, 20) 83.25%, rgb(253, 126, 20) 100%, rgb(250, 82, 82) 100%);
  animation: var(--timing) linear dance6123 infinite;
  transform: scale(1.1) translateY(-1px);
}
@keyframes dance6123 {
  to {
    background-position: var(--width);
  }
}

</style>
