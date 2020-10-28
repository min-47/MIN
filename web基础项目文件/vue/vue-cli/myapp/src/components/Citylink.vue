<template>
    <div>
        <ul>
               <router-link to="/city" tag="li" active-class="myactive " >
             <i class="iconfont icon-guangpan"></i>查找城市 </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .myactive{
        color:red;
        border-bottom: 2px solid red;
    }
 
        ul{
            display: flex;
            li{ 
                flex: 1;
                line-height: 50px;
                text-align: center;
                background-color: wheat;
            }
        }

    // .fixed{
    //     // position: fixed;
    //     left: 0px;
    //     top: 0px;
    //     width:100%;
    //     height: 40px;
    // }

</style>