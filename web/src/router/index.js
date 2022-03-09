import Vue from 'vue'
import VueRouter from 'vue-router'

// vue相同路由跳转报错问题处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject){
    return originalPush.call(this, location, onResolve, onReject)
  }else{
    return originalPush.call(this, location).catch(err => err)
  }
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject){
    return originalReplace.call(this, location, onResolve, onReject)
  }else{
    return originalReplace.call(this, location).catch(err => err)
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
    meta: {
      name:"登录"
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    meta: {
      name:"首页"
    }
  }
]


const router = new VueRouter({
  routes
})

//前置守卫
router.beforeEach((to, from, next) => {
  //router.app.$options.store.commit('setCurrentSystem', to.name)
  next()
})
//后置钩子
router.afterEach((to, from) => {
  // ...
})

export default router
