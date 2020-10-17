function move(obj,speed,target,cs,back){//参数1要执行的对象,速度，目标位置，样式,回调函数
					clearInterval(obj.timer);//关闭上一个定时器，防止同一对象多次调用叠加速度
					var start = parseInt( getStyle(obj,cs));//获取开始时元素位置
					if(start>target)//判断速度正负，如果目标值比开始值小则速度为负值
					speed = -speed;
					obj.timer = setInterval(function(){//为元素对象添加timer属性并开启定时器
					var old =parseInt( getStyle(obj,cs));//获取元素当前位置并将px截取为整数
					var newv = old+speed;//新值=旧速度加速度
					if(newv<target&&speed<0||speed>0&&newv>target)//判断是否超过目标位置
					newv =target;
					obj.style[cs] = newv +"px";//改变坐标
					if(newv ==target){//判断是否到达目标位置
						clearInterval(obj.timer);
						back&&back();//如果传了回调函数则执行，没有不执行
					}
					},30)		
			}
			function getStyle(obj,na)
			{//obj：要获取样式的元素，name：要获取的样式名
				return window.getComputedStyle?getComputedStyle(obj,null)[na]:obj.currentStyle[na];
				//ie8没有getcomputedStyle方法,ie必须设置好样式值例如left，如果没有设置会获取到auto		