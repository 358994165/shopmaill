<template>
  <div class="car-list">
    <cart-list-item v-for='(item,index) in list' :product='item' :key='index' />
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import CartListItem from './CartListItem'
  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters({
        list: 'getcartlist'
      })
    }
  }
</script>