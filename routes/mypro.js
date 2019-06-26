const express=require("express");
//引入连接池模块
const pool=require("../pool.js")
//创建路由器对象
var router=express.Router();
//添加路由
router.get("/v1/login/:uname-:upwd",(req,res)=>{
	var $uname=req.params.uname
	var $upwd=req.params.upwd
	console.log($uname+".."+$upwd)	
	var sql="select * from xz_user where uname=? and upwd=?"
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		//console.log(result,result.length)
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
			}
	})
})
router.get("/v1/list",(req,res)=>{
		var sql="select * from xz_user"
		pool.query(sql,(err,result)=>{
			res.send(result)
		})
	})

//注册
router.post("/v1/reg",(req,res)=>{
//	var $uname=req.body.uname
//	var $upwd=req.body.upwd
//	var $email=req.body.email
//	var $phone=req.body.phone
//	var $user_name=req.body.user_name
//	var $gender=req.body.gender
	//	var obj={
//				uname:$uname,
//				upwd:$upwd,
//				email:$email,
//				phone:$phone,
//				user_name:$user_name,
//				gender:$gender
				//}
		var arr=req.body
	var sql="insert into hammer_user SET ?"
	pool.query(sql,[arr],(err,result)=>{
		console.log(result)
		if(result.affectedRows>0){
			res.send("1")
		}else {res.send("0")}
	})
})
		//用户列表
router.get("/v1/userlist",(req,res)=>{
		var sql="select * from xz_user"
		pool.query(sql,(err,result)=>{
			if(err)throw err
			res.send(result);
			//console.log(result);
		})
	})
//删除
router.delete("/v1/deluser/:uid",(req,res)=>{
	var $uid=req.params.uid
	var sql="delete from xz_user where uid=?"
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err
			//console.log(result,result.length)
			if(result.affectedRows>0){
			res.send("1")
		}
	})
})
	//查询
router.get("/v1/query/:uid",(req,res)=>{
	var $uid=req.params.uid
	var sql="select * from xz_user where uid=?"
		pool.query(sql,[$uid],(err,result)=>{
			   if(err)throw err
				console.log(result)
			   if(result.length>0){
			   res.send(result)
				   }else {res.send("0")}
		})
})
			//修改
router.put("/v1/update",(req,res)=>{
			//获取参数
			var $uid=req.body.uid;
			var $uname=req.body.uname;
			var $email=req.body.email;
			var $phone=req.body.phone;
			var $user_name=req.body.user_name;
			var $gender=req.body.gender;
				//console.log(obj)
				if(!$uid){res.send("uid未找到");return;}
				if(!$uname){res.send("uname未找到");return;}
				if(!$email){res.send("email未找到");return;}
				if(!$phone){res.send("phone未找到");return;}
				if(!$user_name){res.send("user_name未找到");return;}
				if(!$gender){res.send("gender未找到");return;}
			var sql="update xz_user SET uname=?,email=?,phone=?,user_name=?,gender=? where uid=?"
			pool.query(sql,[$uname,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
				if(result.affectedRows>0){
					res.send("1")
				}else {
						res.send("0")
					}
			})
		})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//注册
router.post("/v4/user_reg",(req,res)=>{
	var $uname=req.body.uname
	
	var $email=req.body.email
    var $phone=req.body.phone
		var $upwd=req.body.upwd
//	var $user_name=req.body.user_name
//	var $gender=req.body.gender
	//	var obj={
//				uname:$uname,
//				upwd:$upwd,
//				email:$email,
//				phone:$phone,
//				user_name:$user_name,
//				gender:$gender
				//}
		//var arr=req.body
			//console.log(arr)
	var sql="insert into hammer_user SET uname=?,phone=?,email=?,upwd=?"
	pool.query(sql,[$uname,$phone,$email,$upwd],(err,result)=>{
		console.log(result)
		if(result.affectedRows>0){
			res.send("1")
		}else {res.send("0")}
	})
})
		//用户登录
router.get("/v4/user_login/:uname-:upwd",(req,res)=>{
	var $uname=req.params.uname
	var $upwd=req.params.upwd
	console.log($uname+".."+$upwd)	
	var sql="select * from hammer_user where uname=? and upwd=?"
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		//console.log(result,result.length)
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
			}
	})
})
//导出路由器
module.exports=router;






