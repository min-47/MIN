<template>
    <div class="cinema" :style="mystyle">
        <ul >
            <li v-for="data in datalist" :key="data.cinemaId">
                {{data.name}}
                <p style="font-size:5px">{{data.address}}</p>
            </li>

        </ul >
    </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
    data() {
        return {
            datalist:[],
            mystyle:{
                 height:'0px'
            }
        }
    },
    mounted() {
        this.mystyle.height = document.documentElement.clientHeight-50+"px";

        var id = localStorage.getItem("cityId")
        axios({
            url:`https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=6159855`,
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603500001143954418860052","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            console.log(res.data)
            this.datalist = res.data.data.cinemas
             

            this.$nextTick(()=>{
                new BetterScroll(".cinema",{
                    scrollbar:{
                        fade:true,
                        interactive:false 
                    }
                    
                })
            })
        })

        
    },
    
}
</script>

<style lang="scss" scoped>
    li{
        height: 50px;
    }
    .cinema{
        height: 500px;
        overflow: hidden;
        //修正滚动条位置
        position: relative;
    }
</style>