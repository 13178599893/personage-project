$(function(){

    $("#sizer").on("click",".text-muted",function(){
        $this=$(this);
        console.log(this)
        if($this.is(".text-muted")){
            $this.addClass("active")
            $this.parent().siblings().children().removeClass("active")
        }else{
            // $this.addClass("active");
           
        }
        
    })
    //不可删
})