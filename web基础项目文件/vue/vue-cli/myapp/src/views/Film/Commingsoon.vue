<template>
    <div>  
        <ul>
            <!-- <li v-for="data in $store.state.commingList" :key="data.filmId"   > -->
                <li v-for="data in $store.getters.commingListGetter" :key="data.filmId"  @click="handleClick(data.isPresale,data.filmId)" >
            <!-- <li v-for="data in datalist" :key="data " @click="handleChange(data)">{{data}} -->
                <img :src="data.poster" alt="">
                <h3>{{data.name}}</h3>
                <!-- 过滤器 -->
                <p v-if="data.actors">主演:{{data.actors|actorsfilter}}</p>
                <p v-else>暂无主演</p> 
                
             </li>
        </ul>
    </div>
</template>

<script>

import store from '@/store'
import axios from 'axios'
import { MessageBox } from 'mint-ui';
import {mapState} from 'vuex'

export default {
    // if(store中的list.length为空){
    //     进行数据请求
    // }else{
    //     使用缓存数据
    // }
     data() {
        return {
            comminglist:[]
        }
    },
    
    mounted () {

      if (this.$store.state.commingList.length===0){  
          this.$store.dispatch("getCommingListAction")  
    }else{
         console.log("缓存数据")
    }

    },

    methods: {
            handleClick(data,id){
                if(!data){
                    MessageBox({
                    title: '提示',
                    message: '此电影没有排片哦，小主请看其他的呢',
                    showCancelButton: true
                    }).then(res=>{
                       if (res==="confirm"){
                        console.log("回到首页");
                        this.$router.push(`/film/nowplaying`)
                         }
                    })
                    
                }
                this.$router.push({ name:"myDetail",params:{id:id}} )
            }
        },
}
       
</script>

<style lang="scss" scoped>
ul{
    margin-bottom: 50px;
    li{
        padding: 10px;
        overflow: hidden;
        margin-left: 20px;
        img{
            float: left;
            width: 100px;
            height: 150px;
        }
    }
}
</style>