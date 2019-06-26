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

//引入路由器
var userRouter=require("./public/users.js")
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')), serveIndex('public', {'icons': true, 'view': 'details'}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//使用路由器,添加前缀
app.use("/user",userRouter)
module.exports = app;
