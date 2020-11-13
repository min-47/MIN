<template>
  <div>
    <h2>{{$store.state.number}}</h2>
    <h2>{{$store.getters.more20Per}}</h2>
    <h2>{{$store.getters.more20perLen}}</h2>
    <h2>{{$store.getters.moreAge(18)}}</h2>
    <h2>我是info中的内容</h2>
    <p>{{$store.state.info}}</p>
  </div>
 
</template>

<script>
export default {
  // props:{
  //   cnumber:Number
  // }
}
</script>



