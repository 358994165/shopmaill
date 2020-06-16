<template>
  <div class="Peofiletop">
    <div class="peotop">
      <div class="peotop-left">
        <img src="~assets/img/profile/wode.png" alt="">
      </div>
      <div class="peotop-cen">
        <div class="land-text">登陆/注册</div>
        <div class="phone"> 暂无绑定手机号</div>
      </div>
      <div class="peo-right"><img src="~assets/img/profile/arrow_right.png" alt=""></div>
    </div>
    <div class="peobut">
      <div class="but-left">
        <div class="text-color">0.00<span>元</span></div>
        <span>我的余额</span>
      </div>
      <div class="but-cen">
        <div class="text-color">0<span>个</span></div>
        <span>我的优惠</span>
      </div>
      <div class="but-right">
        <div class="text-color">0<span>分</span></div>
        <span>我的积分</span>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'PeofileTop'
  }
</script>
<style scoped>
  .peotop {
    background-color: var(--color-tint);
    display: flex;
    padding: 10px;
  }

  .peotop-left {
    width: 50px;
    height: 50px;
    background-color: #f6f6f6;
    border-radius: 50%;
    overflow: hidden;
  }

  .peotop-left img {
    width: 100%;
    height: 100%;
  }

  .peotop-cen {
    padding-left: 10px;
    padding-top: 5px;
    color: #fff;
  }

  .phone {
    text-align: center;
    font-size: 13px;
  }

  .peo-right {
    color: #fff;
    line-height: 50px;
    position: absolute;
    right: 5px;
  }

  .peobut {
    background: #fff;
    padding: 20px 5px 20px 5px;
    display: flex;
    text-align: center;
  }

  .peobut>div {
    flex: 1;
  }

  .peobut>div>span {
    font-size: 13px;
  }

  .text-color {
    font-size: 16px;
    color: red;
  }
</style>