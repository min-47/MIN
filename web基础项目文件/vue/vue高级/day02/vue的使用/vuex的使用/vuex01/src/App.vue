<template>
  <div id="app">
     
     <h2>我是App的组件</h2>
     {{$store.state.number}}
     <p>{{$store.state.number}}</p>
     <p>{{$store.getters.more20Per}}</p>
     <button @click="addaction">+</button>
     <button @click="subaction">-</button>
     <button @click="subactionnumber(5)">5</button>
     <button @click="subactionnumber(-10)">-10</button>
     <button @click='addStudent'>添加学生</button>

     <h2>________我是info的内容——————————————</h2>
     <p>{{$store.state.info}}</p>
     <button @click='changeName'>改变学生名字</button>
      <button @click='addAdress'>添加学生住址</button>
      <button @click='deleteAge'>删除学生年龄</button>
     <hello-world></hello-world>
     
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      
    }
  },
  components:{
    HelloWorld
  },
  methods: {
    addaction(){
      this.$store.commit('increment')
    },
    subaction(){
      this.$store.commit('decrement')
    },
    
     subactionnumber(count){
     // payload :负载
     // 普通的提交封装
    // this.$store.commit('decrementnumber',count)

    // 特殊的提交封装
     this.$store.commit({
       type:'decrementnumber',
       count
     })
    },

    addStudent(){
       const stu = {id:'115',name:'min',age:47}
       this.$store.commit('addStudents',stu) 
    },
    changeName(){
      // 已有属性值，修改
      this.$store.dispatch('aupdateinfo')
    },
    addAdress(){
      this.$store.commit('addinfoAdress')
    },
    deleteAge(){
      this.$store.commit('deleteinfoAge')
    }
   
  },
}
</script>
<style lang="scss">
 
</style>