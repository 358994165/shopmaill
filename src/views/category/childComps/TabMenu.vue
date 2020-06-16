<template>
  <scroll ref='scroll' id="tab-menu">
    <div class="menu-list">
      <div v-for='(item,index) in categories' class="menu-list-item" :class='{active: index === currentIndex}'
        @click='isclick(index)' :key='index'>{{item.title}}</div>
    </div>
  </scroll>
</template>
<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "TabMenu",
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {
      Scroll
    },
    updated() {
      this.$refs.scroll.refresh()
    },
    props: {
      categories: {
        type: Array,
      }
    },
    methods: {
      isclick(index) {
        this.currentIndex = index
        this.$emit('selectItem', index)
        this.$refs.scroll.refresh()
      },
    }

  }
</script>
<style scoped>
  #tab-menu {
    font-size: 14px;
    box-sizing: border-box;
    height: 100%;
    width: 100px;
    background-color: #f6f6f6;
    overflow: hidden;

  }

  .menu-list-item {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
  }

  .active {
    color: var(--color-high-text);
    background-color: #fff;
  }
</style>