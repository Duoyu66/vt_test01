<template >
<div class="bg" style="width: 100%;height: 100%;position: absolute;z-index: -1">

</div>
<div class="main">
  <h1>欢迎来到智能后台管理系统！</h1>
<div style="background-image: url(../../assets/svg/login-box-bg.svg);width: 200px;height: 200px;border: 1px solid black  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;" >

</div>
</div>
</template>

<script setup>

</script>

<style scoped lang="less">
html{

}
.bg::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: -48%;
  background-image: url(../../assets/svg/login-bg.svg);
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  content: '';
}
.main{
  width: 750px;
  height: 900px;
  border:1px solid red;
  margin-left: 55px;
  padding-top: 5px;
}
</style>