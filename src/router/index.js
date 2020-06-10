import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home.vue')
const Car = () => import('views/car/Car.vue')
const Profile = () => import('views/profile/Profile.vue')
const Category = () => import('views/category/Category.vue')
const Detail = () => import('views/detail/Detail.vue')
Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/car',
  component: Car
},
{
  path: '/category',
  component: Category
},
{
  path: '/profile',
  component: Profile
},
{
  path: '/detail/:iid',
  component: Detail
}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router