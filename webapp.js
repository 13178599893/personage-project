var createError = require('http-errors');
var express = require('express');
var serveIndex = require('serve-index')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql=require("mysql");
//连接池
var pool=mysql.createPool({
	host:"127.0.0.1",
	port:3306,
	user:"root",
	password:"",
	database:"hammer",
	connectionLimit:15
})

var app = express();
app.listen(8080,function(){
	console.log("端口启动中")
});
app.use(express.static("public"));
//引入路由器
var userRouter=require("./routes/users.js")




//使用路由器,添加前缀
app.use("/user",userRouter)
module.exports = app;
