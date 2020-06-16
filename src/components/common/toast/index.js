import Toast from './Toast'
//创建一个对象
const obj = {}
//将对象安装到 Vue上
obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2. new的方式 根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  //3.将组件手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  //4.把挂载的元素div ，再挂载到body上
  document.body.appendChild(toast.$el)
  //5.最后将toast挂载到Vue原型上
  Vue.prototype.$toast = toast
}
export default obj