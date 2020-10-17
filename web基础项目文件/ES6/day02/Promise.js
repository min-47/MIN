//1.引入模块
const  fs = require('fs');
//2.调用方法读取文件
// fs.readFile('为学.md',(err,data)=>{
// 	//如果失败，则抛出错误
// 	if(err) throw err;
// 	console.log(data.toString());
// });

//3.使用Promise 封装
const P  = new Promise(function(resolve,reject){
 fs.readFile("为学.mda",(err,data)=>{
	 //判断如果失败
	 if(err) reject(err);
	 //如果成功
	 resolve(data);
 });
});

P.then(function (value) {  
	console.log(value.toString());
},function (reason) {
	console.log("读取失败了");
	
});