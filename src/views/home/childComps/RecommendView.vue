<template>
  <div class='recommend'>
    <div class="recommend-item" v-for='item in recommends'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    padding: 10px 0;
    border-bottom: 8px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 90%;
  }
</style>