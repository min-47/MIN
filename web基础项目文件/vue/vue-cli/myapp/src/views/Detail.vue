<template>
    <div v-if='filminfo'>
        <!-- 天坑， this.id 并不能使用-->
        detail--{{this.$route.params.id}}  
          <!-- detail--{{id.filmId}} -->
         
        
        <div class="poster">
             <img :src="filminfo.poster" alt="">
        </div>

        <div>
            <h3>{{filminfo.name}}</h3> 
            
            
        </div>
         
        <h3>演职人员</h3>
        
        <swiper perview="4" class="actorswiper" myclassname="actorswiper">
            <div class="swiper-slide" v-for=" data in filminfo.actors " :key="data.name">
                   <img :src=" data.avatarAddress ">
                   <p class="actors-name">{{data.name}}</p>
                   </div>
                    
        </swiper>

        <h3>剧照</h3>
         <swiper perview="3" class="photoswiper" myclassname="photoswiper">
             
            <div class="swiper-slide" v-for=" data  in filminfo.photos " :key="data.name">
                   <img :src="data" alt="">
                   <div>{{data.name}}</div>
                   </div> 
        </swiper>
        
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import swiper from '@/views/Detail/Swiper'
import {HIDE_TABBAR_MUTATTION} from '@/Type/index'

// import bus from '@/bus/index.js';

export default {
    props:['id'],
    // looplist:[],
    data() {
        return {
            filminfo:null
        }
    },
    components:{
        swiper
    },
    //项目功能进入详情页，tabbar隐藏 
    beforeMount(  ) {
        // console.log("隐藏")
        // bus.$emit("MM",false)
        
        // vuex滥用，需要监管
        // this.$store.state.isTabbarShow = false

        // 监管之下修改
        // 第一个参数就是mutatiion名字，
        // 第二个值，是函数的参数，也就是对象

        // 第一种写法
        // this.$store.commit("HideMaizuoTabbar",false);
        this.$store.commit(HIDE_TABBAR_MUTATTION,false);
    },
    mounted() {
        console.log("要id", this.$route.params.id,this.id)//this.id 是不可以使用的
         axios({
            url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=2058790`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603500001143954418860052","bc":"210300"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
            }).then(res=>{
                console.log(res.data)
                this.filminfo = res.data.data.film
            })
    },
    beforeDestroy( ) {
        // console.log("显示");
        //  bus.$emit("MM", true)

        // vuex滥用，需要监管
        // this.$store.state.isTabbarShow = true

        // 监管之下修改// 第一种写法
        // this.$store.commit("HideMaizuoTabbar",true);
        // 第二种方法 ES
        this.$store.commit(HIDE_TABBAR_MUTATTION,true);
    },
}
</script> 

<style lang="scss" scoped>
    .poster{
        height: 200px; 
        overflow: hidden;
            img{
             width: 100%;    
            }
        
    }
    
    .photoswiper{
         overflow: hidden;
     height: 100px;
    img{
        width: 100%; 

    }
    }
    
 
</style>