<template lang="">
    <div>
         
        <mt-index-list>
        <mt-index-section :index='data.index' v-for="(data, index) in datalist" :key="data.index">
            <!-- 在该组件上绑定点击事件需要加上 .native 或者 外面再套上一个div-->
         <div>  <mt-cell :title="city.name" v-for="(city, index) in data.list" :key="city.id" @click.native ="handleClick(city.cityId)"></mt-cell>
        </div> 
         </mt-index-section>
        
        </mt-index-list>
</div>
</template>

<script>
import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
import Vue from 'vue'
import axios from 'axios'


export default {
    data() {
        return {
            datalist:[]
        }
    },

    mounted() {
        axios({
            url:"https://m.maizuo.com/gateway?k=7584230",
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603500001143954418860052","bc":"110100"}',
                "X-Host": 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            // console.log(res.data)
             this.datalist = this.handleCity(res.data.data.cities)
        })

    },

    methods: {
        handleCity(datalist){
            // console.log(datalist)
            var letterArr =[]
            for(var i=65;i<91;i++){
                letterArr.push(String.fromCharCode(i))
            }
        //    console.log(letterArr)

           var newlist =[]
           for(var j=0;j<letterArr.length;j++){
               let arr = datalist.filter(item=>item.pinyin.substring(0,1)==letterArr[j].toLowerCase())
            //    console.log(arr)

                if(arr.length>0){
                     newlist.push({
                   index:letterArr[j],
                   list:arr
                  })
                }
              
           }
           console.log(newlist)
        return newlist

        },
       handleClick(id){
            console.log(id)
            // 浏览器缓存的地方
            localStorage.setItem("cityId",id)
            this.$router.push(`/cinema`)
        }
    },
}
</script>