var express=require('express');
var router=express.Router();
const pool=require("../pool.js")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//注册
router.post("/v1/reg",(req,res)=>{
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
	var sql1="select uid from hammer_user where uname=? "
    pool.query(sql1,[$uname],(err,result)=>{
		if(err){res.send("你TM错了")}
		if(result.length>0){
			res.send("200");
				return;
		}else{
			var sql2="insert into hammer_user SET uname=?,phone=?,email=?,upwd=?"
	pool.query(sql2,[$uname,$phone,$email,$upwd],(err,result)=>{
		console.log(result)
			if(err){res.send("你TM错了")}
		if(result.affectedRows>0){
			res.send("1")
		}else {res.send("0")}
	})	
		}
	})

	
})

		//用户登录
router.get("/v1/login/:uname-:upwd",(req,res)=>{
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
//用户列表
router.get("/v1/list",(req,res)=>{
	var sql="select * from hammer_user";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
})
//修改信息前查询
router.get("/v1/check/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname
		console.log($uname)
	var sql="select * from hammer_user where uname=?"
	pool.query(sql,[$uname],(err,result)=>{
		if(err)throw err;
		console.log(result,result.length)
		if(result.length>0){
			res.send(result);
			return;
		}else{res.send("400")}

	})
})
//修改信息
router.put("/v1/update",(req,res)=>{
	var $uname=req.body.uname
	var $phone=req.body.phone
	var $email=req.body.email
	var $upwd=req.body.upwd
	var $uid=req.body.uid
		console.log($uname,$phone,$email,$upwd,$uid)
		var sql="update hammer_user set uname=?,phone=?,email=?,upwd=? where uid=?"
		pool.query(sql,[$uname,$phone,$email,$upwd,$uid],(err,result)=>{
			if(err)throw err;
			console.log(result);
			if(result.affectedRows>0){
				res.send("1")
			}else{res.send("0")}
		})
})
module.exports=router;
