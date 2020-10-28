import Vue from 'vue'//Es6模块导入方式 commonJs var Vue = require("Vue")
import App from './App.vue'
import router from './router/index'
import store from './store'

// 引入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入所有的接口，但是未必全能用上
import ALLA from './Module/moduleA'

//可以导入自己想要的接口，但是名字必须一致，但可以重命名，使用as 
import {A1 as myA1} from './Module/moduleB'

// 引入mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false
console.log(ALLA);

// 重命名后只能使用重命名之后的接口
console.log(myA1);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
