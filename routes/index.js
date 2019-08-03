const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
//	var sql=`SELECT hammer_index_product.title,hammer_index_product.details,hammer_index_product.pic,hammer_index_product.price,hammer_index_product.href,hammer_index_F6.title,hammer_index_F6.subtitle,hammer_index_F6.pic FROM  hammer_index_product, hammer_index_F6`
// h.details,h.pic,h.price,h.href,
//h.title htitle,f.title ftitle from hammer_index_product h,hammer_index_F6 f
var sql = `select * from hammer_index_product`;
//		var sql2=`SELECT * FROM hammer_index_F6`
var data = [];
		pool.query(sql,[],(err,result)=>{
			if(err){
				throw err;
//				res.send(err);
//				console.log(err);
			}else{
//				res.send(result);
//				for(var item of result) {
//					data.push(item);
//				}
				res.send(result);
//				data.push(result);
//				var sql = `...`;
//				pool.query(sql,[],(err,result)=>{
//				  if(err) throw err;
//				  else {
//					data.push(result);
//				  }
//				})
			}

			
	})
		
})



module.exports=router;