var div=document.getElementById("top-nav");
 var style=getComputedStyle(div);
console.log(style)
 console.log(div);
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    console.log(scrollTop)
    if(scrollTop>=200){
        div.style.position="fixed";
        div.style.top="0px";
    }else{
        div.style.position="relative";
    }
}