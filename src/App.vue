<template>
  <div id="app">
    <router-view></router-view>
    <main-item></main-item>
  </div>
</template>

<script>
  import MainItem from 'components/content/mainTabbar/MainItem.vue'
  export default {
    name: 'app',
    components: {
      MainItem,
    }
  }
</script>
<style>
  @import 'assets/css/base.css'
</style>