<template>
        <div class="swiper-container a" >
            <div class="swiper-wrapper">
                <slot></slot>
            </div>  
        </div>
   
</template>

<script>
import Swiper from 'swiper'//js
// import 'swiper/swiper.js'
import 'swiper/dist/css/swiper.css'
// import 'swiper/swiper-bundle.css'
export default {

    props:["perview","myclassname"],

    mounted(){
        console.log(this.myclassname);
    new Swiper('.'+this.myclassname,{
            // autoplay:true,
            slidesPerView : this.perview,
            spaceBetween : this.myclassname==='actorswiper'?20:10,
            freeMode : true,
     
        })
    },
}
</script>

<style lang="scss" scoped>
    .swiper-slide{
     
        img{
            width: 100%; 

        }
}
</style>