<template>
  <div class="sube-center">
    <div class="sube-item" v-for="(item,index) in subcategories.list">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Subcategory',
    components: {
    },
    props: {
      subcategories: {
        tyle: Array,
        default() {
          return []
        }
      }
    },

  }
</script>
<style scoped>
  .sube-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px;
  }

  .sube-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 68px;
    height: 85px;
  }

  .sube-item img {
    width: 55px;
    height: 55px;
  }

  .sube-item p {
    font-size: 13px;
  }
</style>