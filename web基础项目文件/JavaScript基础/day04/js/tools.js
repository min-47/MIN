//获取对象的样式
function getStyle(obj,name){
			 
			return window.getComputedStyle?getComputedStyle(obj,null)[name]:obj.currentStyle[name];
			
			
		}
		
/**
		 * @param {Object} obj 执行的对象
		 * @param {Object} attr 执行动画的样式 
		 * @param {Object} target 执行动画的目标位置
		 * @param {Object} speed 移动的速度
		 * @param {object} callback 回调函数
		 *  timer需要在全局作用中定义
		 */
		function move(obj,attr,target,speed,callback){
			 
				var current = parseInt(getStyle(obj,"left"));
				if(current > target){
					speed = -speed;
				}
					//关闭上一个定时器
					clearInterval(obj.timer);
					//*******注意************
					//开启一个定时器，用来执行动画效果
					//向执行动画对象中添加一个属性，用来保存它自己的定时器标识
					
					 obj.timer = setInterval(function(){
						//取出字符串的合法树枝，便于计算
						 var value = parseInt(getStyle(obj,attr));
						 var newValue = value + speed;
						 
						 if(speed<0 && newValue<target||speed>0 && newValue>target){
							 newValue = target;
						 }
						 obj.style[attr] = newValue+"px";
						  
						if(newValue == target){
							 clearInterval(obj.timer);
							 //动画结束后执行回调函数
							 callback &&callback();
							 }
						
						
			  },30);
			};

			
 /*定义一个函数，用来向一个元素中添加指定的class属性*/
	 /**
	  * @param {Object} obj 要添加class属性的元素
	  * @param {Object} cn 要添加class的值
	  */
	 function addClass(obj,cn){
		 
		 if(!hasClass(obj,cn)){
		 	 obj.className +=" "+cn;
		 }
		 
	 };
	 /**
	  * @param {Object} obj 要判断是否添加class属性的元素
	  * @param {Object} cn  要判断是否添加lclass的值
	  * 判断一个元素中是否含有指定的class属性值
	  * 如果有，则返回true 没有则返回false
	  */
	 function hasClass(obj,cn){
		 //判断obj中有没有cn class
		 //创建一个正则表达式 \b单词边界
		 //写死了
		 //var reg = /\bb2\b/;
		 var reg= new RegExp("\\b"+cn+"\\b"); 
		 return reg.test(obj.className);
	 }
	 
	 function removeClass(obj,cn){
		 //创建正则表达式
		  var reg= new RegExp("\\b"+cn+"\\b"); 
		  
		  //删除class
		  obj.className = obj.className.replace(reg,"");
		 
	 }
	 /**
	  * @param {Object} obj 要添加class或删除class属性的元素
	  * @param {Object} cn 要添加class的值
	  * toggleClass 可以用来切换一个类
	  * 如果元素中有该类 则删除
	  * 如果元素没有该类 则添加
	  */
	 function toggleClass(obj,cn){
		 //判断obj中是否含有cn 
		 if(hasClass(obj,cn)){
		 	 removeClass(obj,cn);
		 }else{
			 addClass(obj,cn);
		 }
	 }			