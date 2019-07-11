(function(){
    var as=document.querySelectorAll("[data-target='lyl']")
    console.log(as)
    for(var a of as){
        a.onclick=function(){
            var a=this;
            var div=document.querySelectorAll("div.tab-content>div.d-none")
            
            if(div.className=="d-none"){
                div.className="";
            }
        }
    }
})()