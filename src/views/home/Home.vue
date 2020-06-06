<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>

    <scroll class="content" ref='scroll' :probe-type='3' @scroll='contentscroll' :pullUpLoad='true'
      @pullingUp='loadMore'>
      <home-swiper :banner='banner' />
      <recommend-view :recommends='recommends' />
      <feature-view />
      <tab-control class="tab-control" :title="['精选','新款','流行']" @tabClick='tabClick' />
      <goods-list :goods="showGoods" />
    </scroll>

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
  import BackTop from 'components/content/backTop/BackTop'

  import { getHomeMultidata, getHomeGoods } from 'network/home'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    data() {
      return {
        //用来保存网络请求下来的数据
        banner: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        currentType: 'pop',
        isshowbacktop: false
      }
    },
    created() {
      //在创建周期发出网咯请求
      //请求多个数据
      this.getHomeMultidata();
      //请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      //定义常量来 接收 debounce的返回值（返回值是个函数）
      const refresh = this.debounce(this.$refs.scroll.refresh, 200)
      //事件总线 goodslistitem的每一个图片加载完后调用这里的函数
      //使用事件总线 需要到main.js中创建 $bus 的vue实例
      this.$bus.$on('itemimgload', () => {
        //调用scroll里面 refresh刷新方法

        // 直接使用常量 refresh 因为是接收了一个函数所以直接调用
        refresh();
      })


    },
    methods: {
      /**
       * 网络请求
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },

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
      },
      backclick() {
        //返回顶部
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      //scroll传出来的事件，用于获取滑动的 x， y
      contentscroll(position) {
        //大于1000位true  小于1000为false
        this.isshowbacktop = (-position.y) > 1000
      },
      loadMore() {
        //上拉显示更多
        this.getHomeGoods(this.currentType);
      },
      //封装防抖动函数  返回值是一个函数
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) clearInterval(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      }

    }

  }
</script>
<style scoped>
  #home {
    height: 100vh;
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  .content {
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
    overflow: hidden;
  }
</style>