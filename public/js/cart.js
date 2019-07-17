let div=document.getElementById("shop-cart");
console.log(div)
div.onclick=function(e){
    var btn=e.target;
    
    if(btn.nodeName=="BUTTON"){
        var span=btn.parentNode.children[1];
        // console.log(span)
        var n=parseInt(span.innerHTML);
        // console.log(n)
        if(btn.innerHTML=="+"){
            n++;
        }else if(n>1){
            n--;
         }//else if(btn.innerHTML=="&times"){

        // }
        span.innerHTML=n;
        var tr=btn.parentNode.parentNode;
        // console.log(tr)
        var price=parseFloat(
        tr.children[3].children[0].innerHTML.slice(1));
        var subtotal=price*n;
        // console.log(subtotal)
        tr.children[5].innerHTML=`¥${subtotal.toFixed(2)}`;
        var totalAll=document.getElementById("total");
        
    }else{
        return;
        console.log(111)
    }
    var subtotals=document.getElementsByClassName("cart-six m-0 my_price");
    console.log(subtotals)
     var total=0;
     let val = []; 
     for(let item of subtotals) {
        val.push(parseFloat(item.innerHTML.slice(1)));
         console.log(val)
     }
     for(let item of val) {
         total += item;
     }
      totalAll.innerHTML=`¥${total.toFixed(2)}`
}



//删除一行
let father=document.getElementById("shopcartF2");
// console.log(father)
father.onclick=function(e){
    var btnn=e.target;
  
    if(btnn.nodeName=="BUTTON"){
        if(btnn.innerHTML=="x"){
            var cart_items=document.getElementsByClassName("cart-items")
            for(var cart of cart_items){
             console.log(cart)
             btnn.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        }
        }
    }
}


//删除全选
var deleteAll=document.getElementById("deleteAll");
console.log(deleteAll)
deleteAll.addEventListener("click",function(){
    var btnd=this;
    console.log(1)
    // var items=document.getElementsByClassName("cart-items");
     this.parentNode.parentNode.parentNode.children[1].remove();
    btnd.parentNode.parentNode.previousElementSibling.remove()
    btnd.parentNode.parentNode.remove();
    var empty=document.getElementById("empty");
    empty.className="col-12 p-0"
    // console.log(cart_items)
})