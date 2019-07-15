var div=document.getElementById("joinCartFixed");
var style=getComputedStyle(div);
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop<=6600){
        div.style.position="fixed";
        div.style.bottom="0px";
    }else{
        div.style.position="relative";
    }
}