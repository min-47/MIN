import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film.vue'
import Center from '@/views/Center.vue'
import Detail from '@/views/Detail.vue'
import Cinema from '@/views/Cinema.vue'
import Login from '@/views/Login.vue'
import City from '@/views/City.vue'
import Commingsoon from '@/views/Film/Commingsoon.vue'
import Nowplaying from '@/views//Film/Nowplaying.vue'

Vue.use(VueRouter)

const auth = {
  islogin(){
    return false;
  }
}

const router = new VueRouter({
  // mode: 'history',
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/film',
      // name: 'Home',
      component: Film,
      children:[
        {
          path:'commingsoon',
          component:Commingsoon
        },
        {
          path:'nowplaying',
          component: Nowplaying
        },
        {
          //重定向
          path:'',
           redirect:"/film/nowplaying"
          
        }
      ]
    },
    {
      path: '/cinema',
      name: ' ',
      component:Cinema
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path:"/center",
      component:Center,
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      
    },

   
    {
      // detail/:aa 动态路由
      path:'/detail/:id',
      name:"myDetail",
      component:Detail,
    },

    {
      path:"/login",
      component:Login,
      
    },

    {
      path:"/city",
      component:City,
      
    },

    {
      path:'*',
       redirect:"Film"
      
    }
  ]
})
// 全局守卫

// router.beforeEach((to,from,next)=>{
//   if(to.path==='/center'){
//     console.log("盘查")

//     if(auth.islogin()){
//       next()
//     }else{
//       next("/login");
//     }
//   }else{
//     next()
//   }
  
// })

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

 export default router