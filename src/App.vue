<template>
  <div id="app">
    <keep-alive exclude='Detail'>
      <router-view />
    </keep-alive>
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