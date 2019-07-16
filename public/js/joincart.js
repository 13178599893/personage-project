var div=document.getElementById("joinCartFixed");
var style=getComputedStyle(div);
var onscroll=function(){
    var scrollHeigh=document.documentElement.scrollHeight||document.body.scrollHeight;
    console.log(scrollHeigh)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(scrollTop)
    var fixedHeight=scrollHeigh-1200
    console.log(fixedHeight)
    if(scrollTop<=fixedHeight){
        div.style.position="fixed";
        div.style.bottom="0px";
    }else{
        div.style.position="relative";
    }
}
window.addEventListener("scroll",onscroll);