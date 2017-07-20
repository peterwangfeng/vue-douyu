import Vue from 'vue'
import Router from 'vue-router'
import Hot from "../pages/Hot"
import Category from "../pages/Category"
import CategoryRoom from "../pages/CategoryRoom"
import Recommend from "../pages/Recommend"
import UserCenter from "../pages/UserCenter"

Vue.use(Router)

export default new Router({
    routes: [
      {
        name: "Hot",
        path: '/',
        component: Hot
      },
      {
        name: "category",
        path: '/category',
        component: Category
      },
      {
        name: "categoryRoom",
        path: '/categoryroom/:categoryid/:gameid',
        component: CategoryRoom
      },
      {
        name: "recommend",
        path: '/recommend',
        component: Recommend
      },
      {
        name: "userCenter",
        path: '/usercenter',
        component: UserCenter
      }
    ]
})
