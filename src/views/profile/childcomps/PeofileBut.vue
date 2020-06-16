<template>
  <div class="peo-but">
    <div class="text-font text-bor">
      <div class="img-font"><img src="~assets/img/profile/icon-.png" alt=""></div>
      <span>我的购物车</span>
    </div>
    <div class="text-font">
      <div class="img-font"><img src="~assets/img/profile/xiazai.png" alt=""></div>
      <span>下载购物APP</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PeofileBut'
  }
</script>
<style scoped>
  .peo-but {
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .text-font {
    display: flex;
    height: 40px;
    line-height: 50px;
  }

  .img-font {
    margin: 5px 10px 5px 10px;
    height: 20px;
    width: 20px;
  }

  .text-bor {
    border: 1px solid #f6f6f6;
  }

  .img-font img {
    width: 20px;
    height: 20px;
  }
</style>