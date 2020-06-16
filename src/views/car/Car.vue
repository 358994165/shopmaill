<template>
  <div class='car'>
    <nav-bar class="car-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <scroll class="content" ref='scroll'>
      <cart-list />
    </scroll>
    <cart-bottom-bar class="bottom" />
  </div>
</template>

<script>
  //mapGetters是vuex提供辅助函数. 仅仅将state中的getter映射到局部计算属性中
  // 导入从 vuex中导入 
  import { mapGetters } from 'vuex'
  import Scroll from 'components/common/scroll/Scroll'

  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  export default {
    name: 'Car',
    components: {
      NavBar,
      CartList,
      Scroll,
      CartBottomBar
    },
    computed: {
      //getters 使用 可以为数组或者对象 
      // ...mapGetters(['getcartLength']) 数组直接使用属性
      // 对象可以赋值再使用
      ...mapGetters({
        length: 'getcartLength'
      })
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>
<style scoped>
  .car {
    height: 100vh;
    width: 100vw;
  }

  .car-nav {
    z-index: 9;
    position: relative;
    top: 0;
    left: 0;
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 88px;
    overflow: hidden;
  }

  .bottom {
    position: absolute;
    bottom: 49px;
    left: 0;
  }
</style>