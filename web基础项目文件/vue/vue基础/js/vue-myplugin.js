/**vue的插件库
 * 
 */
(function(){
    //需要向外暴露的插件对象
    const MyPlugin ={}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log("Vue函数对象的方法myGlobalMethod()");
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', function(el, binding ){
            // 逻辑...
           el.textContent  = binding.value.toUpperCase()
          
        })
      
        // // 3. 注入组件选项
        // Vue.mixin({
        //   created: function () {
        //     // 逻辑...
        //   }
        //   ...
        // })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function ( ) {
          // 逻辑...
          console.log('vue实例对象的方法￥myMEthod()')
        }
    }
    //向外暴露
    window.MyPlugin =MyPlugin

})()