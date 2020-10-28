<template>
    <div>
        <!-- 官方api最新版使用方式，不适用 -->
        <v-touch v-on:swipeLeft="onSwipeLeft">
            <div style="background:blue;height:100px">center</div>
         </v-touch>

        center
         <el-button type="primary">主要按钮</el-button>
         <mt-button plain>plain</mt-button>
         <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        </div>
   
</template>

<script>
import Vue from 'vue';
var VueTouch = require('vue-touch')
Vue.use(VueTouch,{name: 'v-touch'})

export default {
    beforeEnter: (to, from, next) => {
        console.log("局部盘查")
        if(false){
            next();
        }else{
            next("/login")
        }
        //在渲染该组件的对应路由被confirm前调用
        // 不能！获取该组件实例·this·
        // 因为当守卫执行前，组件实例化还没被创建
    },
    methods: {
        onSwipeLeft(){
            console.log("left");
        },
        onSwipeRight(){
            console.log("right");
        }
    },
}
</script>