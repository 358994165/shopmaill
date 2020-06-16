import { ADD_COUNT, ADD_ADDTOCART } from './mutations-type'
export default {
  addCart(context, payload) {
    // let oldProduct = null
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    //返回promise的结果
    return new Promise((resolve, rehect) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNT, oldProduct)
        resolve('当前商品数量加1')
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit(ADD_ADDTOCART, payload)
        resolve('商品添加到购物车')
      }

    })
  }
}