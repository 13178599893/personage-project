let div = document.getElementById("shop-cart");
console.log(div);
div.onclick = function(e) {
  var btn = e.target;

  if (btn.nodeName == "BUTTON") {
    var span = btn.parentNode.children[1];
    // console.log(span)
    var n = parseInt(span.innerHTML);
    //  console.log(n)
    if (btn.innerHTML == "+") {
      n++;
    } else if (n > 1) {
      n--;
    } //else if(btn.innerHTML=="&times"){

    // }
    span.innerHTML = n;
    var tr = btn.parentNode.parentNode;
    // console.log(tr)
    var price = parseFloat(tr.children[3].children[0].innerHTML.slice(1));
    var subtotal = price * n;
    // console.log(subtotal)
    tr.children[5].innerHTML = `¥${subtotal.toFixed(2)}`;
  } else {
    return;
  }
  // console.log(subtotals)
  // 这里删除了总额
  calc();
};

//删除一行
let father = document.getElementById("shopcartF2");
// console.log(father)
father.onclick = function(e) {
  var btnn = e.target;

  if (btnn.nodeName == "BUTTON") {
    if (btnn.innerHTML == "x" && confirm(`是否删除当前商品`)) {
      var cart_items = document.getElementsByClassName("cart-items");
      for (var cart of cart_items) {
        console.log(cart);
        btnn.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        calc();
        // var emptyrow = document.getElementsByClassName(".cart-items");
        //  if(emptyrow===null){

        //  }
      }
    }
  }
};

//删除选中的
var $deleteAll = $("#deleteAll");
var $deleteAll_img=$(".checkAll-img")
console.log($deleteAll);
$deleteAll.click(function() {
  console.log(1);
  // var items=document.getElementsByClassName("cart-items");
  var $checked = $(".checkbox");
  let flag=false;
  $checked.each(function(i,elem){
        $elem=$(elem)
    if ( $elem.next().hasClass("block")){
        flag=true
    }else{
        flag=false
        return false;
    }    
  })
  if (flag) {
    // console.log($checked.next().hasClass("block")) 
    $checked.parent().parent().parent().parent().parent().remove();
    $deleteAll_img.removeClass("block");
    var $n=$(".shopsum").html().slice(3,4);
    $n=0;
    $(".shopsum").html(`已选择${$n}件商品`);
    $(".shopsun").html(`已选择${$n}件商品`);
    var $total = $("#total");
    $total.html(`¥${0.0}`);
    var $empty=$("#empty");
   $empty.removeClass("empty")
   } else{
    $empty.addClass("empty")
   }
    // console.log(cart_items)
  
   
});

//jQuery
var calc = function() {
  var $total = $("#total");
  var $chbss = $(".checkbox");
  var $chbimg = $(".check-img");
  var $subtotal = $(".my_price");
  $total.html(`¥${0.0}`);
  $totalsum = parseInt($subtotal.html().slice(1));
  console.log($totalsum);

  var $sum = 0;
  $chbss.each(function(i, elem) {
    $elem = $(elem);
    // console.log($chbss[i])
    if ($elem.next().hasClass("block")) {
      $sum += parseInt(
        $elem.parent().parent().children(".my_price").html().slice(1)
      );
      // console.log($elem.parent().parent().children(".my_price").html().slice(1))
      // console.log($subtotal)
      console.log($sum);
    }
    // console.log($elem)
    $total.html(`¥${$sum.toFixed(2)}`);
  });
};
calc();

$("#chball-parent").on("click", ".checkboxAll,.checkAll-img", function() {
  var $cha = $(this);
  var $chbs = $(".checkbox");
  var $n=$(".shopsum").html().slice(3,4);
      $chaimg = $(".checkAll-img");
  if ($cha.is(".checkboxAll")) {
    $chaimg.addClass("block");
    $chbs.next().addClass("block");
    $n=$chbs.length
    // console.log($chbs.length)
    calc();
  } else if ($cha.is(".checkAll-img")) {
    $cha.removeClass("block");
    $chbs.next().removeClass("block");
    let $total = $("#total");
    $total.html(`¥${0}.00`);
}
$(".shopsum").html(`已选择${$n}件商品`);
$(".shopsun").html(`已选择${$n}件商品`);
});

$("#chbs").on("click", ".checkbox,.check-img", function() {
  var $chb = $(this);
  // console.log($chb)
  var $chbs = $(".checkbox");
  var $chbimg = $(".check-img");
  var $chaimg = $(".checkAll-img");
  var $n=$(".shopsum").html().slice(3,4);
  console.log($n)
  if ($chb.is(".checkbox")) {
    $chb.next().addClass("block");
    ++$n; 
    calc();
  } else if ($chb.is(".check-img")) {
    $chb.removeClass("block");
    calc();
    if($n==0){
       $n=0; 
    }else{
        --$n;
    }
  }
  $(".shopsum").html(`已选择${$n}件商品`);
  $(".shopsun").html(`已选择${$n}件商品`);
  // console.log($chbimg)
  let flag = false;
  $chbimg.each(function(i, elem) {
    var $elem = $(elem);
    
    console.log($elem);
    // console.log($chbimg.hasClass("block"))

    if ($elem.hasClass("block")) {
      flag = true;
    } else {
      flag = false;
      return false;
    }
  });
  if (flag) {
    $chaimg.addClass("block");
  } else {
    $chaimg.removeClass("block");
  }
});

// let $checkboxAll=$(".checkboxAll")
// let $chbs = $(".checkbox");
// if($chbs.length<1){
//     $checkboxAll.prop("disable","true")
// }else{
//     $checkboxAll.prop("disable","false")
//     console.log($checkboxAll.attr())
// }