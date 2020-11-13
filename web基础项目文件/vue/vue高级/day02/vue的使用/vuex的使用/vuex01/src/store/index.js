import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number:0,
    students:[
      {id:'111',name:'koby1',age:18},
      {id:'112',name:'koby2',age:28},
      {id:'113',name:'koby3',age:8},
      {id:'114',name:'koby4',age:10},

    ],
    info:{
      id:116,
      name:'coby',
      age:45,
      height:1.88
    }
  },
  mutations: {
    increment(state){
      state.number++

    },
    decrement(state){
      state.number--

    },
    // decrementnumber(state,count){
    //   state.number +=count

    // },
    // pyload只是一个参数名，但代表的是一个对象
    decrementnumber(state,pyload){
      state.number +=pyload.count

    },
    addStudents(state,stu){
      state.students.push(stu)
    },

    changeinfoName(state){
      // 已有属性值修改
      state.info.name='coder'
    },
    addinfoAdress(state){
      // 未有的属性，会添加到state状态树里，但不会响应式修改
      // state.info['adress']='阜阳'
      // 使用set方法
      Vue.set(state.info,'address',"阜阳")
    },
    deleteinfoAge(state){
      // state状态树会删除，但是不会响应式修改
      // delete state.info.age
      // 使用vue.delete方法
      Vue.delete(state.info, 'age')
    }
  },
  getters:{
    // getters里面定义的函数，默认第一个参数 是state
    more20Per(state){
      return state.students.filter(s=>s.age>=18)
    },
    // 业务需求：获得大于十八岁的学生
    // getter里面定义的函数 默认第二个参数 是getter本身
    // more20perLen(state){
    //   return state.students.filter(s=>s.age>=18).length
    // }
    more20perLen(state,getters){
      return getters.more20Per.length
    },
    // 业务需求，客户自己定义年龄过滤
    // params是客户的传参
    moreAge(state){
      // return function (param) { 
      //   return state.students.filter(s=>s.age>param)
      //  }
      return params=> state.students.filter(s=>s.age>params)
    }
  },
  actions: {
    // 异步监听 实时获取数据改变
    // context 类等同于store对象
    // action也不能直接修改state数据，必须通过mutation
    aupdateinfo(context){
      setTimeout(()=>{
        context.commit('changeinfoName')
      },1000)

    }
  },
  modules: {
  }
})
