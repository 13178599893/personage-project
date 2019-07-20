$(function(){

        $("#banner-details").on("mouseenter","[data-target='#banner-details']",function(){
                $this=$(this);
                $(".md-img").attr("src",`${$this.attr('data-replace')}`)
                console.log($(".md-img"))
                console.log($this.attr('data-replace'))
        })
    //不可删

    $("#btn_change").on("click","button",function(){
            $this=$(this)
            var $details_price=parseInt( $("#details_price").html().slice(1))
            console.log($details_price)
            
            var n=parseInt($("#btn_change>input:text").val())
        if($this.html()=="+"){
             n++;
            $("#btn_change>input:text").val(`${n}`);
            console.log($("#btn_change>input:text"))

            
            
        }else if($this.html()=="-"){
                if(n>1){
                n--;
            }
        }
        var $subprice=$details_price*n
        $("#join_price").html(`¥${ $subprice}`)
        $("#btn_change>input:text").val(`${n}`);
        $("#amount").html(`Smartisan帆布鞋x${n}`)
    })
})