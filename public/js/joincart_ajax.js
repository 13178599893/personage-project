$(function(){

$.ajax({
    url:"joincart.html",
    type:"get",
    success:function(result){
        $(result).replaceAll("#joincart");
        $(`<link rel="stylesheet" href="css/join_shopcart.css">`).appendTo("head")
        $(`<script src="js/joincart.js"></script>`).replaceAll("#script__js")
    }
})


})