<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for='(item,index) in detailInfo.detailImage[0].list' :src="item" alt="" :key='index' @load='imgLoad'>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      detailInfo: {
        type: Object,
      }
    },

    data() {
      return {

      }
    },
    methods: {
      imgLoad() {
        // console.log( this.$emit('imageLoad'))
        this.$emit('imageLoad')

      },
    }
  }
</script>
<style scoped>
  .info-desc {
    padding: 15px 10px;
  }

  .start,
  .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
    margin: 5px;
  }

  .start {
    float: left;
  }

  .end {
    float: right;
  }

  .start::before,
  .end::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .end::after {
    right: 0;
  }

  .desc {
    font-size: 13px;
    padding: 20px 0 5px 0;
  }

  .info-key {
    padding: 10px;
    color: #222;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>