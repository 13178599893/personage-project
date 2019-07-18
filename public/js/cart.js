let div=document.getElementById("shop-cart");
console.log(div)
div.onclick=function(e){
    var btn=e.target;
    
    if(btn.nodeName=="BUTTON"){
        var span=btn.parentNode.children[1];
        // console.log(span)
        var n=parseInt(span.innerHTML);
         console.log(n)
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
        
    }
    var subtotals=document.getElementsByClassName("cart-six m-0 my_price");
    console.log(subtotals)
    // 这里删除了总额
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
             var emptyrow=document.getElementsByClassName(".cart-items")
             if(emptyrow===null){
                
             }
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


 $("#chball-parent").on("click",".checkboxAll,.checkAll-img",function(){
     var $chbss=$(".checkbox");
     var $cha=$(this);
     $chaimg=$(".checkAll-img")
     if($cha.is(".checkboxAll")){
        $chaimg.addClass("block")
         $chbss.next().addClass("block");
     }else if($cha.is(".checkAll-img")){
         $cha.removeClass("block");
         $chbss.next().removeClass("block");
     }
 })

$("#chbs").on("click",".checkbox,.check-img",function(){
    var $chb=$(this);
    console.log($chb)
    var $chbs=$(".checkbox");
    var $chbimg=$(".check-img")
    var $chaimg=$(".checkAll-img")
    var $total=$("#total")
    if($chb.is(".checkbox")){
        $chb.next().addClass("block");
        var $subtotal=$chb.parent().parent().children(".my_price");
        var  totalsum=0
        totalsum+=parseInt($subtotal.html().slice(1))
        console.log($subtotal)
        console.log(totalsum)
        $total.html(`¥${totalsum.toFixed(2)}`)
        }else if($chb.is(".check-img"))
        {
            $chb.removeClass("block");
        }
        console.log($chbimg)
        $chbimg.each(function(i,elem) {
            var $elem=$(elem)
            console.log($elem)
            if($chbimg.hasClass("block")){
                // console.log($elem.hasClass("block")!=true)
                $chaimg.removeClass("block")
            }else {
                $chaimg.addClass("block")
            }
        })
    }
)