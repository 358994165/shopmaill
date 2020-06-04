<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <home-swiper :banner='banner' />
    <recommend-view :recommends='recommends' />
    <feature-view />
    <tab-control class="tab-control" :title="['精选','新款','流行']" @tabClick='tabClick' />

    <goods-list :goods="showGoods" />

  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import { getHomeMultidata, getHomeGoods } from 'network/home'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList
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
        currentType: 'pop'
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
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page + 1
        })
      },


      /**
       * 事件监听
       */
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
      }
    }

  }
</script>
<style scoped>
  #home {
    padding-top: 40px;
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
    top: 40px;
  }
</style>