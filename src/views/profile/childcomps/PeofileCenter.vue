<template>
  <div class="peofile-center">
    <div class="text-font">
      <div class="img-font">
        <img src="~assets/img/profile/xinxi.png" alt=""></div>
      <span>我的信息</span>
    </div>
    <div class="text-font">
      <div class="img-font">
        <img src="~assets/img/profile/jifen.png" alt=""> </div>
      <span>积分商城</span>
    </div>
    <div class="text-font">
      <div class="img-font">
        <img src="~assets/img/profile/huiyuan.png" alt=""></div>
      <span>会员中心</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "PeofileCenter"
  }
</script>
<style scoped>
  .peofile-center {
    background-color: #fff;
    margin-top: 10px;
  }

  .text-font {
    display: flex;
    height: 40px;
    line-height: 50px;
    border-bottom: 1px solid #f6f6f6;
  }

  .img-font {
    margin: 5px 10px 5px 10px;
    height: 20px;
    width: 20px;
  }

  .img-font img {
    width: 20px;
    height: 20px;
  }
</style>