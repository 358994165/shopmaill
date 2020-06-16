<template>
  <div class="tab-bar-item" @click='isclick'>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div> -->
    <slot v-if='!isactive' name='item-icon'></slot>
    <slot v-else name='item-icon-active'></slot>
    <div :style='avtivestyle'>
      <slot name='item-text'></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      avtivecolor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {}
    },
    computed: {
      isactive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      avtivestyle() {
        return this.isactive ? {
          color: this.avtivecolor
        } : {}
      }
    },
    methods: {
      isclick() {
        if (this.$route.path === this.path) {
          return;
        }
        this.$router.replace(this.path)
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    text-align: center;
    flex: 1;
    height: 44px;
    font-size: 13px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>