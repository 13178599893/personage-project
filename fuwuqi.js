const express=require("express");
const mysql=require("mysql");
const pool=require("./pool.js");
//引入用户路由器
const userRouter=require("./routes/users.js");
//const userRouter=require("./routes/user.js");
//const apiRouter=require("./routes/api.js");
const myproRouter=require("./routes/mypro.js");
//引入body-parser中间件
const bodyParser=require("body-parser");
app=express();
app.listen(8080,function(){
	console.log("服务器启动中")
});

//托管静态资源到public目录下
app.use(express.static("public"));
app.use(express.static("ajax"));
app.use(express.static("mypro"));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
   extended:false  //不使用第三方的qs模块，而是使用querystring模块
}));

//使用路由器
//  /user/reg
app.use("/user",userRouter);
//app.use("/user",userRouter);
//app.use("/api",apiRouter);
app.use("/mypro",myproRouter);













