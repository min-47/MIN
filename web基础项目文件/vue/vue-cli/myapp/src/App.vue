<template>
    <div id="app">

      <!-- 路由容器 -->
      <router-view></router-view>
       <!-- <tabbar v-if="isShow"></tabbar> -->

       <!-- 第一种方法 -->
       <!-- <tabbar v-if="$store.state.isTabbarShow"></tabbar> -->

      <!-- 第二种方法 -->
       <!-- <tabbar v-show="isShow"></tabbar> -->

       <!-- 第三种方法 -->
       <tabbar v-show="isTabbarShow"></tabbar>

       
    </div>
</template>

<script>

import tabbar from '@/components/Tabbar'
// import bus from '@/bus/index.js';
import store from '@/store/index.js'

// 第三种方法解决底部栏隐藏
import {mapState} from 'vuex'//es导出

export default {
  data() {
    return {
      // isShow:true, 
    }
  },
  methods: {
     
  },
  // 通过计算属性解决底部隐藏 第二种办法
  // computed: {
  //   isShow(){
  //     return  this.$store.state.isTabbarShow
  //   }
  // },

  // 通过计算属性解决底部隐藏 第三种办法，缺陷，无法和其他计算属性合并
  // computed: mapState(["isTabbarShow"]),

  // 第三种方法变种。Es6 展开合并运算符
  computed: {
    ...mapState(["isTabbarShow"])
  },

  // beforeMount() {
  //   bus.$on("MM",(data)=>{
  //     console.log("MM 被通知了",data)
  //     this.isShow= data;
  //   })
  // }, 
// 局部组件注册
components:{
  tabbar:tabbar,
}

}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;

  }
  ul{
    
    li{
    list-style-type: none;
    // margin-bottom:50px ;
  }
  }
  
</style>