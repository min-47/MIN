<template>
    

        <div class="swiper-container a" >
            <div class="swiper-wrapper">
                <slot></slot>
            </div>  
            
            <div class="swiper-pagination"></div>
            
             <!-- <div class="swiper-button-prev"></div>  
             <div class="swiper-button-next"></div>  -->
        </div>
   
</template>

<script>
import Swiper from 'swiper'//js
// import 'swiper/swiper.js'
import 'swiper/dist/css/swiper.css'
// import 'swiper/swiper-bundle.css'
export default {
    mounted(){
    new Swiper('.a',{
            autoplay:true,
            
            // 等同于一下写法
            // autoplay: {
            //     delay: 3000,
            //     stopOnLastSlide: false,
            //     disableOnInteraction: true,
            // }, 
            loop : true,
            
        // 如果需要分页器
        //这个地方出现了天坑，swiper的分页器（组件）只能在版本5.4.5和4
        //高版本6不支持

        //低版本不支持el组件写法         
            pagination: {
                el:'.swiper-pagination'
                },
            //  
             
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    },
}
</script>

<style lang="scss" scoped>
//  .swiper-container{
//           /* --swiper-theme-color: #ff6600; */
//          /* 两种都可以 */
//         //   width: 100%;
//         //   height: 300px;
//         }
//  .swiper-pagination{
//      width: 100px;
//      height: 20px;
//       --swiper-pagination-color: #00ff33;
//  }   
</style>