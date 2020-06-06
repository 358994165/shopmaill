<template>
  <div class="wrepper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //创建 BSceoll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        //scroll内的click事件为有效
        click: true,
        //监听滚动必要的属性
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //传出 监听滚动的位置 x，y 的事件
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      //传出  上拉显示更多的事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      //返回顶部的方法封装
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      //多次上拉显示的方法封装
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      //刷新 scroll可滚动的高度
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>
<style scoped>

</style>