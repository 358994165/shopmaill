<template>
  <swiper class='deta-swiper'>
    <swiper-item v-for='item in topImage'>
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>
<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'
  export default {
    name: 'DetaSwiper',
    props: {
      topImage: {
        type: Array,
        default() {
          return []
        }
      }
    },

    components: {
      Swiper,
      SwiperItem
    }
  }
</script>
<style scoped>
  .deta-swiper {
    height: 300px;
  }
</style>