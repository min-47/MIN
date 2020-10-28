<template>
    <div id="myheader">
        <ul>
             <router-link to="/film/nowplaying" tag="li" active-class="myactive ">
            <i class="iconfont icon-guangpan"></i> 正在热映 </router-link>

             <router-link to="/film/commingsoon" tag="li" active-class="myactive ">
            <i class="iconfont icon-guangpan"></i> 即可演出 </router-link>
        </ul>
    </div>
</template>

// <style lang="scss" scoped>
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

    .fixed{
        position: fixed;
        left: 0px;
        top: 0px;
        width:100%;
        height: 40px;

    }
    </style>