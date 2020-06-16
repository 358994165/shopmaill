import { ADD_COUNT, ADD_ADDTOCART } from './mutations-type'
export default
  {
    [ADD_COUNT](state, payload) {
      payload.count++
    },
    [ADD_ADDTOCART](state, payload) {
      payload.check = true
      state.cartList.push(payload)
    }
  }
