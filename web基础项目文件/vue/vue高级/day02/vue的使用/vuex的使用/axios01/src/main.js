import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


axios({
  url:'http://123.207.32.32:8000/home/multidata'
}).then(res=>{
  console.log(res);
})


axios({
  url:'http://123.207.32.32:8000/home/data'
}).then(res=>{
  console.log(res);
})

// axios 发送并发请求
axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/home/data'
})]).then(axios.spread((res1,res2) =>{
  console.log(res1);
  console.log(res2)
}))

