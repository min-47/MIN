<template>
    <div>
         
        <ul  v-infinite-scroll="loadMore" infinite-scroll-distance="10" infinite-scroll-disabled="loading">

            <li v-for="data in datalist" :key="data.filmId" @click="handleChange(data.filmId)">
            <!-- <li v-for="data in datalist" :key="data " @click="handleChange(data)">{{data}} -->

                <img :src="data.poster" alt="">
                <h3>{{data.name}}</h3>
                <p>观众评分:{{data.grade}}</p> 
                <!-- 过滤器 -->
                <p v-if="data.actors">主演:{{data.actors|actorsfilter}}</p>
                <p v-else>暂无主演</p> 
                
             </li>
        </ul>
        <div>正在加载中...</div>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

// 为什么这里导入接口报错呢
// import { InfiniteScroll } from 'mint-ui'
// Vue.use(InfiniteScroll)

Vue.filter("actorsfilter",function (data) { 
    var newlist = data.map(item=>item.name)
    return newlist.join(' ')
 })

export default {
    data() {
        return {
            datalist:[],
            current:1,
            total:0,
        }
    },
     mounted() {
        // 简写的方式
        // axios.get("https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=4586757")
        // console.log(res.data);

        // 完整的写法
        axios({
            url:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=4586757",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1603500001143954418860052","bc":"440100"}',
                 'X-Host': 'mall.film-ticket.film.list'
            }
            }).then(res=>{
                console.log(res.data)
                this.datalist = res.data.data.films
                this.total = res.data.total
            })
         
    },

    methods: {
        handleChange(id){
            console.log(id);

            // 编程式导航-路径跳转
            // this.$router.push(`/detail/${id}`)

             // 编程式导航- 名字跳转
            this.$router.push({ name:"myDetail",params:{id:id}} )
        },

         loadMore() {
        this.loading = true;
        console.log("hhhh");
         setTimeout(() => {
        //   
        }, 2500);

        this.current++;
        if(this.datalist.length==this.total){
            return;
        }
        axios({
            url:`https://m.maizuo.com/gateway?cityId=440100&pageNum=${this.current}&pageSize=10&type=1&k=4586757`,
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1603500001143954418860052","bc":"440100"}',
                 'X-Host': 'mall.film-ticket.film.list'
            }
            }).then(res=>{
                // console.log(res.data)
                this.datalist =[...this.datalist,...res.data.data.films]
                this.loading = false;
            })

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
        img{
            float: left;
            width: 100px;
        }
    }
}
    
</style>