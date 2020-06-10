<template>
  <div id='detail'>
    <!-- 顶部导航栏 -->
    <detail-nav-bar class="detatil-nav" @titleClick='titleClick' ref='nav' />
    <!-- 滚动部分 -->
    <scroll class="detail-content" ref='scroll' :probe-type='3' @scroll='contentscroll'>
      <!-- 轮播图 -->
      <deta-swiper :top-image='topImage' />
      <!-- 商品描述 -->
      <detail-base-info :goods='goods' />
      <!-- 店铺信息 -->
      <detatil-shop-info :shop='shop' />
      <!-- 穿着效果图 -->
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imageload' />
      <!-- 参数尺寸表 -->
      <detail-param-info ref='params' :param-info='paramInfo' />
      <!-- 用户评价 -->
      <detail-comment-info ref='comment' :commentInfo='commentInfo' />
      <!-- 热门推荐 -->
      <goods-list ref='recommend' :goods='recommends' />
    </scroll>
    <back-top @click.native='backclick' v-show='isshowbacktop'></back-top>
    <detail-bottom-bar class="bottombar" />
  </div>
</template>

<script>
  // 导入导航栏
  import DetailNavBar from './childComps/DetailNavBar'
  // 导入轮播图
  import DetaSwiper from './childComps/DetaSwiper'
  // 导入商品描述
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  // 导入店铺信息
  import DetatilShopInfo from './childComps/DetatilShopInfo'
  //导入效果图
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  //导入尺寸表
  import DetailParamInfo from './childComps/DetailParamInfo'
  //导入用户评价
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'
  //导入封装好的goodslist 传入新的参数 显示热门推荐
  import GoodsList from 'components/content/goods/GoodsList'

  //导入混入
  import { itemListenerMinxin, backTopMixin } from 'common/mixin'

  //导入better-scroll
  import Scroll from 'components/common/scroll/Scroll'
  //导入获取数据的方法 和对象
  import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
  //导入防抖动
  import { debounce } from "common/utils"
  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetaSwiper,
      DetailBaseInfo,
      DetatilShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    data() {
      return {
        //商品id默认空
        iid: null,
        //轮播图数组默认空
        topImage: [],
        //产品描述信息默认为空对象
        goods: {},
        //店铺信息默认为空对象
        shop: {},
        //穿着效果信息默认为空对象
        detailInfo: {},
        //尺寸信息默认为空对象
        paramInfo: {},
        //用户信息评价默认为空对象
        commentInfo: {},
        //热门推荐信息默认为空数组
        recommends: [],
        //用来记录导航栏的点击跳转的高度
        themeTopYs: [],
        //定义一个函数用来获取导航栏的高度
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    //使用混入
    mixins: [itemListenerMinxin, backTopMixin],
    created() {
      //得到产品id
      this.iid = this.$route.params.iid
      //getdetail 请求 商品id 的全部信息
      getDetail(this.iid).then(res => {
        //定义data 储存信息路径 少写几个路径信息
        const data = res.result;
        //获取 轮播图
        this.topImage = data.itemInfo.topImages
        //用Goods方法定义获取指定商品详情的数据
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //用Shop方法定义获取指定的店铺信息数据
        this.shop = new Shop(data.shopInfo)
        // 获取穿着效果信息
        this.detailInfo = data.detailInfo
        // 用goodsparam方法定义获取指定尺寸的数据
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 判断reta.crate中是否有用户评价，有就获取没有就不获取
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
      // getRecommend请求 热门推荐的 信息
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
      //将防抖动赋值给getThemeTopY，并且带有回调函数，回调函数就是获取对应ref组件的高度
      this.getThemeTopY = debounce(() => {
        //每次进入详情页都重新赋值
        this.themeTopYs = []
        //往themeTopYs中添加对应ref的组件高度  -44是导航的高度
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      }, 300)
    },
    methods: {
      // 穿着效果图太多，请求太慢则scroll不能刷新滚动高度，所以传出图片加载完 刷新可滚动区域的高度
      imageload() {
        //混入里面啊有防抖的refresh 方法所以直接使用
        this.refresh()
        //使用getThemeTopY 函数获取高度并且添加到themeTopYs里面
        this.getThemeTopY()
      },
      titleClick(index) {
        //点击对应的index 跳转到 对应index的高度
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      contentscroll(position) {
        //放回顶部的设置都在mixin中backTopMixin
        this.isshowbacktop = -position.y > 1000
        const positionY = -position.y
        let length = this.themeTopYs.length
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      }
    },
  }
</script>
<style scoped>
  #detail {
    position: fixed;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
    width: 100%;
  }

  .detail-content {
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 50px;
  }

  .detatil-nav {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
</style>