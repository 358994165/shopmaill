<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'DetailBottomBar'
  }
</script>
<style scoped>
  .bottom-bar {
    height: 44px;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    background: #fff;
    display: flex;
    text-align: center;
  }

  .bottom-left,
  .bottom-right {
    flex: 1;
    display: flex;
  }

  .bottom-left>div {
    flex: 1;
  }

  .text {
    font-size: 13px;
  }

  .icon {
    display: block;
    height: 22px;
    width: 22px;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
    margin: 3px auto 0;
  }

  .service {
    background-position: 0 -54px;
  }

  .shop {
    background-position: 0 -98px;
  }

  .cart,
  .buy {
    flex: 1;
    line-height: 44px;
  }

  .cart {
    background: #ffe817;
    color: #333;
  }

  .buy {
    background-color: #f69;
    color: #fff;
  }
</style>