$("#search").click(function(){
    var $btn=$(this)
    var $val=$(".search").val().trim();
    if($val!==""){
        console.log(`查询${$val}的相关内容`)
    }
})

$(".search").keyup(function(e){
    if(e.keycode==13){
        $("#search").click();
    }
})
.on("input",function(){
    $("#search").click();
})