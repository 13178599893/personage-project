const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
	var sql=`SELECT * FROM hammer_index_product`
		pool.query(sql,[],(err,result)=>{
			if(err){
				res.send(err);
				console.log(err);
			}else{
				res.send(result);
			}
	})
})

module.exports=router;