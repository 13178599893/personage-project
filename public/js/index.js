
$(function(){
 
   


   



  

  
  
    //轮播图
    var i=0;
    var LIWIDTH=1100;
    var DURATION=500;
    var LICOUNT=3;
    var ulImgs=document.getElementById("ul-imgs");
    var ulIdxs=document.getElementById("ul-indxs");
    var lis=ulIdxs.children;
    console.log(ulImgs)
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
     console.log(1)

     $("#top").click(function(){
        scrollTo(0,0)
    })
  
  

    
    //不可删
})



/*
axios.get(
    "http://localhost:5050/index"
).then(result=>{
    console.log(result.data)
    new Vue({
        el:"#app",
        data:{
            arr1:result.data.slice(0,3),//一楼前3个商品数据
            p4:result.data.slice(3,4)[0],//一楼第四个商品数据
            arr2:result.data.slice(4,8),//一楼轮播第二页4个商品数据
            p5:result.data.slice(8,9)[0],//二楼第一个图片
            arr3:result.data.slice(9,11),//二楼第一排两个商品数据
            arr4:result.data.slice(11,15),//二楼第二排4个商品数据
            p6:result.data.slice(15,16)[0],//三楼第一个图片
            arr5:result.data.slice(16,18),//三楼两个商品数据
            p7:result.data.slice(18,19)[0],//四楼第一个图片
            arr6:result.data.slice(19,25),//四楼剩余5个商品数据
            p8:result.data.slice(25,26)[0],//五楼第一个图片
            arr7:result.data.slice(26,32),//五楼剩余5个商品数据
            arr8:result.data.slice(32,36)//6楼数据
        },  
        methods:{
     
        }
    })

})

*/