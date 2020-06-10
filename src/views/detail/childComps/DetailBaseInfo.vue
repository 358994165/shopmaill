<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class=" info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span v-for='(item,index) in goods.services.length-1' :key='index'>
        <img :src="goods.services[item-1].icon" alt="">
        <span class="service-text">{{goods.services[item-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object

      }
    }
  }
</script>
<style scoped>
  .base-info {
    margin-top: 10px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222;
  }

  .info-price {
    padding: 10px;
  }

  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 14px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    color: #fff;
    background-color: var(--color-high-text);
    padding: 2px 5px;
    margin-left: 5px;
    border-radius: 8px;
    position: relative;
    top: -8px;
  }

  .info-other {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
  }

  .info-service {
    margin: 10px;
    display: flex;
    justify-content: space-between;
  }

  .info-service .service-text {
    color: #222;
    font-size: 13px;
  }

  .info-service img {
    position: relative;
    top: 2px;
    height: 14px;
    width: 14px;
  }
</style>