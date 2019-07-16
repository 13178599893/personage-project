var div=document.getElementById("shop-cart");
div.onclick=function(e){
    var btn=e.target;
    if(btn.nodeName=="BUTTON"){
        var span=btn.parentNode.children[1];
        console.log(span)
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
        console.log(tr)
        var price=parseFloat(
        tr.children[3].children[0].innerHTML.slice(1));
        var subtotal=price*n;
        tr.children[5].innerHTML=`¥${subtotal.toFixed(2)}`;
        var totalAll=document.getElementById("total");
        console.log(totalAll);
        // var prices=parseFloat(btn.parentNode.nextElementSibling.innerHTML.slice(1));
        var prices=div.querySelectorAll("td.cart-six");

        console.log(prices)
        var total=0;
        for(var c of prices){
            total+=c.innerHTML.slice(1)
        }
        console.log(c.innerHTML.slice(1))
        // console.log(total)
        // var total=0;
        // for(var p of prices){
        // total+=p.children[0].innerHTML;
        //   }
        // // console.log(total)
        // totalAll.innerHTML=`¥${total.toFixed(2)}`
    }
}