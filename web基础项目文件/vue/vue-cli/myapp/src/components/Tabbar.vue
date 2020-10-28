<template>
    <div id="nav">
        <ul>
            <!-- 记得带#号  用a链接不能通过路径切换相应图片 以及不能高亮属性-->
            <!-- <li><a href="#/film">film</a></li>
            <li><a href="#/cinema">cinema</a></li>
            <li><a href="#/center">center</a></li> -->
        <!-- tag属性改变标签样式  activeClass属性高亮显示 -->
            <router-link to="/film" tag="li" active-class="myactive ">
            <i class="iconfont icon-guangpan"></i>film </router-link>

            <router-link to="/center" tag="li" active-class="myactive "> 
            <i class="iconfont icon-caidan"></i>center </router-link>

            <router-link to="/cinema" tag="li" active-class="myactive ">
            <i class="iconfont icon-bofang"></i>cinema </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .myactive{
        color:red;
    }
    #nav{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        background: wheat;
        ul{
            display: flex;
            li{ 
                flex: 1;
                line-height: 50px;
                text-align: center;
            }
        }

    }
</style>