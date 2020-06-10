<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-left">
        <div class="left-sells">
          <div class="middle-t">{{shop.sells | sellCountFilter}}</div>
          <div class="middle-b">总销量</div>
        </div>
        <div class="left-count">
          <div class="middle-t">{{shop.goodsCount}}</div>
          <div class="middle-b">全部宝贝</div>
        </div>
      </div>
      <div class="middle-right">
        <table>
          <tr v-for='item in shop.score'>
            <td class="right-text">{{item.name}}</td>
            <td class="right-score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="right-better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-buttom">
      <div class="buttom-text">进店逛逛</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetatilShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      // 定义过滤器
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value / 10000).toFixed(1) + '万'
      }
    }
  }
</script>
<style scoped>
  .shop-top {
    margin: 30px 0;
    line-height: 45px;
    display: flex;
    align-items: center;
  }

  .shop-top span {
    font-size: 14px;
    margin-left: 10px;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 50%;
    margin-left: 10px;
  }

  .shop-middle {
    display: flex;
    align-items: center;
  }

  .middle-left,
  .middle-right {
    flex: 1;
  }

  .middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }

  .left-sells,
  .left-count {
    flex: 1;
  }

  .middle-t {
    font-size: 17px;
    color: #222;
    padding-bottom: 10px;

  }

  .middle-b {
    font-size: 13px;
    color: black;
  }

  .middle-right {
    font-size: 13px;
    color: #222;

  }

  .middle-right table {
    width: 120px;
    margin-left: 28px;
  }

  .middle-right table td {
    padding: 5px 0;
  }

  .right-score {
    color: #5ea732;
  }

  .score-better {
    color: red;
  }

  .right-better span {
    background-color: #5ea732;
    color: #fff;
  }

  .better-more span {
    background-color: red;
  }

  .shop-buttom {
    text-align: center;
    padding: 10px 0 30px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .buttom-text {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
  }
</style>