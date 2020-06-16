<template>
  <div class="icon-selector" :class='{active:ischeck}'>
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>

</template>
<script>
  export default {
    name: 'CheckButton',
    props: {
      ischeck: {
        type: Boolean,
        default: false
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .icon-selector {
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
    overflow: hidden;
  }

  .icon-selector img {
    padding-top: 1px;
    padding-left: 1px;
  }


  .active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>