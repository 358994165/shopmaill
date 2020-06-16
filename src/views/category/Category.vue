<template>
  <div class="cate-gory">
    <nav-bar class="cate-top">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories='categories' @selectItem='selectItem' />
    </div>
    <scroll class="subecate" ref='scroll'>
      <subcate-gory :subcategories='showSubcategory' />
      <tab-control :title="['精选','新款','流行']" @tabClick='tabClick' />
      <goods-list :goods='showCategoryDetail' />
    </scroll>
  </div>
</template>

<script>
  import TabMenu from './childComps/TabMenu'
  import SubcateGory from './childComps/SubcateGory'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import { itemListenerMinxin } from "common/mixin"
  import { getCategory, getSubcategory, getCategoryDetail } from 'network/category'
  export default {
    name: 'Category',
    components: {
      NavBar,
      Scroll,
      TabMenu,
      SubcateGory,
      TabControl,
      GoodsList
    },
    mixins: [itemListenerMinxin],
    data() {
      return {
        //分类信息
        categories: [],
        currentIndex: -1,
        categoryData: {
        },
        showCategory: [],
        currentType: 'pop'
      }
    },
    created() {
      this._getCategory()

    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
      _getCategory() {
        getCategory().then(res => {
          this.categories = res.data.category.list
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this._getSubcategories(0)
        })

      },
      _getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = { ...this.categoryData }
          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
      },
      _getCategoryDetail(type) {
        // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = { ...this.categoryData }
        })
      },
      selectItem(index) {
        this._getSubcategories(index)
      },
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
    },

    updated() {
      this.$refs.scroll.refresh()
    },

  }
</script>
<style scoped>
  .cate-gory {
    height: 100vh;
  }

  .content {
    width: 80px;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 44px;
    overflow: hidden;
    display: flex;
  }

  .subecate {
    position: fixed;
    top: 44px;
    left: 80px;
    right: 0;
    bottom: 44px;
    overflow: hidden;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>