<template>
    <div>
         <citylink></citylink>
         <swiper :key="looplist.length" ref="myswiper">
             <div class="swiper-slide" v-for="data in looplist" :key="data.filmId">
                   <img :src="data.poster" alt="">
                   </div> 
            <!-- <li class="swiper-slide"  v-for="n in 10" :key="n">{{n}}</li> -->
         </swiper>

       <filmheader :class="isFixed?'fixed':'unfixed'"></filmheader>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import swiper from '@/views/Film/Swiper'
import filmheader from '@/views/Film/Filmheader'
import citylink from '@/components/Citylink'
import axios from 'axios'
import store from '@/store/index.js'
import { Indicator } from 'mint-ui';

export default {
    data() {
        return {
            looplist:[],
            isFixed:false
        }
    },
     components:{
         swiper:swiper,
         filmheader,
         citylink
     },
     mounted(){
         Indicator.open();

          axios({
            url:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=4586757",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1603500001143954418860052","bc":"440100"}',
                 'X-Host': 'mall.film-ticket.film.list'
            }

            }).then(res=>{
                // console.log(res.data)
                 
                this.looplist = res.data.data.films
                Indicator.close();
            })
            // 给函数命名
            window.onscroll = this.handleScroll;
            
     },
    // 解绑事件监听
     beforeDestroy() {
         window.onscroll=null;
     },
    // 吸顶效果
     methods: {
         handleScroll(){
            //  console.log( document.documentElement.scrollTop,this.$refs.myswiper.$el.offsetHeight)
            if(document.documentElement.scrollTop>=this.$refs.myswiper.$el.offsetHeight){
                this.isFixed = true;
            }else{
                this.isFixed = false;
            }
         }
     },
}
</script>

<style lang="scss" scoped>
.swiper-slide{
    overflow: hidden;
     height: 150px;
    img{
        width: 100%;
       
    }
}
    
    
    
</style>