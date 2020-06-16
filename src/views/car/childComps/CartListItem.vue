<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button :ischeck='product.check' @click.native='checkclick' />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-text">
      <div class="text-title">{{product.title}}</div>
      <div class="text-desc">产品描述:{{product.desc}}</div>
      <div class='text-bottom'>
        <div class="text-price left">￥{{product.price}}</div>
        <div class="text-count right">X{{product.count}}</div>
      </div>
    </div>
    <div></div>
  </div>

</template>
<script>
  import CheckButton from './CheckButton'
  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkclick() {
        this.product.check = !this.product.check
      }
    }
  }
</script>
<style scoped>
  .cart-list-item {
    padding: 10px 5px 2px 5px;
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .item-img img {
    width: 68px;
    height: 85px;
    border-radius: 4px;
  }

  .item-text {
    padding-left: 10px;
    position: relative;
    /* padding: 5px; */
    overflow: hidden;
  }

  .text-title {
    padding-top: 5px;
    font-size: 14px;
    color: black;
  }

  .text-desc {
    color: #666;
    font-size: 11px;
    padding-top: 15px;

  }

  .text-title,
  .text-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .text-bottom {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 4px;
    font-size: 14px;
  }

  .text-price {
    color: #fd4148;
  }

  .item-selector {
    padding-right: 5px;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>