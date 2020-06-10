import { debounce } from "common/utils"
import BackTop from 'components/content/backTop/BackTop'
//设置bus总线中的图片加载完成的 防抖动和 scroll高度刷新
export const itemListenerMinxin = {
  data() {
    return {
      itemImgListene: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImgListene = () => { this.refresh() }
    this.$bus.$on('itemimgload', this.itemImgListene)
  }
}

//设置 点击图片返回顶部
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return { isshowbacktop: false, }
  },
  methods: {
    //将isshowbacktop值设置为true 是在别的方法中定义 所以没有混入
    //一般在 scroll 监听y值的方法中
    backclick() {
      //返回顶部
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
  }

}