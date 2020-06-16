<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button :ischeck='ischeck' @click.native='checkClick' />
      <span>全选</span>
    </div>
    <div class='price'>合计:<span class="colors">¥{{Number(totalPrice).toFixed(2)}}</span>元</div>
    <div class="compo" @click='isclick'>去计算({{checkleng}})</div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      //通过计算属性
      //获取是商品总价
      totalPrice() {
        //筛选cartlist中check选中的商品
        return this.$store.state.cartList.filter(item => {
          return item.check
        // 通过.reduce方法 将选中商品的价格相加
        }).reduce((prevalue, item) => {
          return prevalue + item.price * item.count
        }, 0)
      },
      //获取 vuex中cartlist商品check 选中的数量
      checkleng() {
        return this.$store.state.cartList.filter(item => item.check).length
      },
      //判断全选
      ischeck() {
        // return (this.$store.state.cartList.filter(item => item.check).length) == this.$store.state.cartList.length

        //如果cartlist中check选中的商品为 0 那么 传入子组件的ischeck为false 不添加背景样式
        if (this.$store.state.cartList.length === 0) return false
        //部位0则进入下面判断
        //find当数组中的元素在测试条件时返回 true 时, 
        //find() 返回符合条件的元素，之后的值不会再调用执行函数。
        //查找到有一个商品为不选时 find 返回true ，return再取反为false
        //同理找不到有一个商品为不选时 find返回false, return再取反为true 给全选添加样式
        return !this.$store.state.cartList.find(item => !item.check)
      }
    },
    methods: {
      //全选点击方法
      checkClick() {
        //如果ischeck方法为true时
        if (this.ischeck) {
          //那么 使用forEach()方法用于调用数组的每个元素，将商品遍历把选中的商品设置为不选中
          this.$store.state.cartList.forEach(item => item.check = false)
        } else {
          //反过来
          this.$store.state.cartList.forEach(item => item.check = true)
        }
      },
      //点击结算方法
      isclick() {
        //如果选中的商品数量为0那么显示下面弹窗
        //￥toast 注册在vue实例中的组件可以直接调用 路径；components/common/toast
        if (this.checkleng == 0) {
          this.$toast.show('您还没有选中商品', 1500)
        } else {
          this.$toast.show('正在前往结算中', 1500)
        }
      }
    }
  }
</script>
<style scoped>
  .bottom-bar {
    background-color: #fff;
    height: 40px;
    width: 100%;
    border-top: 1px solid #ccc;
    display: flex;

  }

  .check {
    height: 40px;
    padding: 10px 10px;
    display: flex;
    flex: 1;
  }

  .check span {
    padding-top: 2px;
    padding-left: 5px;
  }

  .price {
    margin-left: -60px;
    font-size: 13px;
  }

  .price,
  .compo {
    flex: 1;
    line-height: 40px;
    text-align: center;
  }

  .compo {
    background-color: red;
    color: #fff;
    font-size: 14px;
  }

  .colors {
    padding: 0 5px;
    color: red;
  }
</style>