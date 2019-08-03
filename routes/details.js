const express=require("express");
const router=express.Router();
const pool=require("../pool");


router.get("/",(req,res)=>{
	var lid=req.query.lid
	var sql="SELECT title,subtitle,price,picblack,picwhite,picblue,sku,detailspic FROM hammer_details_products WHERE lid=?"
	pool.query(sql,[lid],(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})
module.exports=router;