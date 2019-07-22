$(function(){
    //轮播图
    var i=0;
    var LIWIDTH=1100;
    var DURATION=2000;
    var LICOUNT=3;
    var ulImgs=document.getElementById("ul-imgs");
    var ulIdxs=document.getElementById("ul-indxs");
    var lis=ulIdxs.children;
    function moveTo(to){
        if(to==undefined){
            to=i+1;
        }
        if(i==0){
            if(to>i){
            ulImgs.className="transition";
            }else{
                ulImgs.className="";
                ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
                setTimeout(function(){
                    moveTo(LICOUNT-1);
                },100);
                return;
            }
        }
        i=to;
        ulImgs.style.marginLeft=-i*LIWIDTH+"px";
        for(var li of lis){
            li.className="";
        }
        if(i==LICOUNT){
            i=0;
            setTimeout(function(){
                ulImgs.className="";
                ulImgs.style.marginLeft=0;

            },DURATION)
        }
        lis[i].className="active";
    }
    

    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    var canClick=true;
    btnRight.onclick=function(){
        move(1)
    }
    function move(n){
        if(canClick){
            moveTo(i+n);
            canClick=false;
            setTimeout(function(){
                canClick=true;
            },DURATION+100);
        }
    }
    btnLeft.onclick=function(){
        move(-1);
    }

    var interval=3000;
    var timer=setInterval(function(){
        moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
        clearInterval(timer);
    }
    banner.onmouseout=function(){
        timer=setInterval(function(){
        moveTo();
        },3000);
    }

     ulIdxs.onclick=function(e){
        if(canClick){
            var li=e.target;
            if(li.nodeName=="LI"){
                if(li.className!=="active"){
                    for(var i=0;i<lis.length;i++){
                        if(lis[i]==li){
                            break;
                        }
                    }
                    moveTo(i);
                    setTimeout(function(){
                        canClick=true;
                    },DURATION)
                }
            }
        }
     }



    //回到顶部
    var top=document.getElementById("top")
    // var style=getComputedStyle(top);
    // console.log(style)
    // window.onscroll=function(){
    // var scrollHeigh=document.documentElement.scrollHeight||document.body.scrollHeight;
    // var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    // var fixedHeight=scrollHeigh-820
    
    // console.log(scrollTop)
    // if(scrollTop<=fixedHeight){
    //     top.style.right="260px";
    // }else{
    //      top.style.right="-80px";
    // }
    // }

    top.onclick=function(){
        scrollTo(0,0)
    }



    
    //不可删
})