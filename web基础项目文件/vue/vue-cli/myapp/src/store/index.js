import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'
import {HIDE_TABBAR_MUTATTION} from '@/Type/index'
Vue.use(Vuex)
/*状态管理 Vuex
1.Vuex是一个专门为vue.js应用程序开发的状态管理模式
它采用集中式储存管理应用所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

state：单一状态树 每一个应用仅仅只包含一个store实例
 *this.$store.state 状态名字
 *...mapState(["title"])

 getters可以从store中的state中派生出一些状态，getter的返回值会根据他的依赖被缓存起来，
 且只有他的依赖发生了改变才会被重新计算
    可以认为是store的计算属性
    this.$store.getters计算属性名字
    ...mapGatters(["getfilms"])

  mutations:更改vuex的store中状态的唯一方法是提交mutation
      常量的设计风格
      
*/
export default new Vuex.Store({
  state: {
    // 自定义的共享状态，取得的数据是原生状态
    isTabbarShow:true,
    commingList:[]
  },

  getters:{
    // 对原生数据的状态进行改变，只取其中一些数据
      commingListGetter(state){
        return state.commingList.filter((item,index)=>index<10)
      }
  },

  // 是同步的
  mutations: {
    // Es6的写法
    [HIDE_TABBAR_MUTATTION] (state,data){
      //  HideMaizuoTabbar(state,data){

      // console.log("HidemaizuoTabbar");
      // 唯一修改函数的位置
      state.isTabbarShow = data;
    },
    commingListMutation(state,data){
      state.commingList = data;
    }
  },
  actions: {
    // 异步处理
    getCommingListAction(store){
      axios({
        url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8944030",
        headers:{
            'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1603500001143954418860052","bc":"110100"}',
             'X-Host': 'mall.film-ticket.film.list'
        }
    // 天坑，这里不能错一点，直接影响到跨域请求
    // url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8944030",
    // headers:{
    //   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603500001143954418860052","bc":"110100"}',
    //   'X-Host': 'malls.film-ticket.film.list'
    // }

      }).then(res=>{
        console.log(res.data)
         store.commit("commingListMutation",res.data.data.films)
      })

    }
  },
  modules: {
  }
})
