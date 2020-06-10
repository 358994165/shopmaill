<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <!-- 在购物街下面复制多一个tab-control 用于屏幕滚动到一定位置在显示， 狸猫换太子 -->
    <tab-control :title="['精选','新款','流行']" @tabClick='tabClick' ref='tabControl1' class='conshow' v-show='istabshow' />
    <!-- 滚动开始 -->
    <scroll class="content" ref='scroll' :probe-type='3' @scroll='contentscroll' :pullUpLoad='true'
      @pullingup='loadMore'>
      <!-- 轮播图 -->
      <home-swiper :banner='banner' @swiperImageLoad='swiperImageLoad' />
      <!-- 十点抢卷 -->
      <recommend-view :recommends='recommends' />
      <!-- 本周流行 -->
      <feature-view />
      <!-- 分类栏 -->
      <tab-control :title="['精选','新款','流行']" @tabClick='tabClick' ref='tabControl2' />
      <!-- 商品显示 -->
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 滚动结束 -->

    <back-top @click.native='backclick' v-show='isshowbacktop' />
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'

  import { getHomeMultidata, getHomeGoods } from 'network/home'
  //导入混入
  import { itemListenerMinxin, backTopMixin } from "common/mixin"

  export default {
    name: 'Home',
    data() {
      return {
        //用来保存网络请求下来的数据
        //轮播图的图片默认为空数组
        banner: [],
        //十点抢卷的图片默认为空数组
        recommends: [],
        //分类栏的默认3中网络请求方式结构
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        //设置默认的网络商品分类
        currentType: 'pop',
        //返回顶部默认 false
        // isshowbacktop: false, 在混入中已经有定义了
        //分类栏距离顶部距离 默认0
        tabOffsetTop: 0,
        //第一个 tab-control是否显示,狸猫换太子
        istabshow: false,
        //用来保存home离开时候的高度

        //停止bus总线的事件需要传入参数，为了方便定义一个属性来接收刷新的方法
        // itemImgListene:null
      }
    },
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins: [itemListenerMinxin, backTopMixin],
    computed: {
      //向商品显示传入分类栏的数据
      showGoods() {
        return this.goods[this.currentType].list
      },
    },

    //这是记录离开的高度 和 进入设置的高度
    // activated() {
    //   this.$refs.scroll.scrollTo(0, this.savey)
    //   this.$refs.scroll.refresh()
    // },
    // deactivated() {
    //   this.savey = this.$refs.scroll.scroll.y
    //   console.log(this.savey)
    // },
    created() {
      //在创建周期发出网咯请求
      //请求多个数据
      this.getHomeMultidata();
      //请求分类栏商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      //  因为detail的组件中有封装的goodslistintem，
      //  GoodsListitem中有图片加载完后在事件总线中传入事件
      //  而detail和home中都需要刷新  所以将防抖动和刷新事件的函数
      //  封装到 mixin 中 （混入） 这样只需要在 需要用到刷新的地方使用mixin（混入）的函数
      //  就可以达到刷新的效果


      //这是没定义混入时用于刷新 scroll高度的方法
      //定义常量来 接收 debounce的返回值（返回值是个函数）
      // let refresh = debounce(this.$refs.scroll.refresh, 200)
      //事件总线 goodslistitem的每一个图片加载完后调用这里的函数
      //使用事件总线 需要到main.js中创建 $bus 的vue实例
      // this.itemImgListene= ()=>{refresh()}
      // this.$bus.$on('itemimgload',  this.itemImgListene)
      //调用scroll里面 refresh刷新方法

      // 直接使用常量 refresh 因为是接收了一个函数所以直接调用
      //  this.$bus.$on('itemimgload',() => {  refresh() })
    },
    deactivated() {
      //因为detail中也有goodslistitem中传出的  图片加载完的bus事件
      //而在detail显示时不要在home刷新高度，所以取消了 home的接收bus事件
      //取消事件后面需要加入 取消的函数 this.itemImgListene
      //this.itemImgListene在 mixin（混入）中有定义所以可以直接使用
      this.$bus.$off('itemimgload', this.itemImgListene)
    },
    methods: {

      /**
       * 网络请求
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          //获取轮播图的图片
          this.banner = res.data.banner.list;
          //获取十点抢卷的图片
          this.recommends = res.data.recommend.list;
        })
      },
      //封装过去商品数据后继续添加数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //上拉加载更多的数据
          this.$refs.scroll.finishPullUp()
        })
      },
      /**
       * 事件监听
       */
      //选择显示的数据
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        //同步两个 tab-control的点击
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      // backclick() {
      //   //返回顶部
      //   this.$refs.scroll.scrollTo(0, 0, 500)
      // },
      //scroll传出来的事件，用于获取滑动的 x， y
      contentscroll(position) {
        //大于1000位true  小于1000为false 判断backtop是否显示
        this.isshowbacktop = (-position.y) > 1000
        //判断 tab-control 是否吸顶
        // this.isTabFixed = (-position.y) > this.tabOffsetTop
        this.istabshow = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        //上拉显示更多
        this.getHomeGoods(this.currentType);
      },
      swiperImageLoad() {
        //获取第二个分类栏距离顶部的距离 来决定要不要显示第一个分类栏
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
    }

  }
</script>
<style scoped>
  #home {
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
    overflow: hidden;
  }

  /* 第一个分类栏的样式 */
  .conshow {
    position: relative;
    top: 0;
    z-index: 8;
  }
</style>