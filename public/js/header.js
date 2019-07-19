//点击
//找到所有的要触发事件的元素
/*
var as = document.querySelectorAll("[data-toggle='tab']");
console.log(as);
//找到所有要发生改变的元素
let tabPaneArr = document.getElementsByClassName("tab-pane"); // [0,1,2,3,4,5]
console.log(tabPaneArr);
//遍历要触发事件
for (let i = 0; i < as.length; i++) {
  let tabThis = tabPaneArr[i];
  console.log(tabThis);
  //为每个as集合中的元素绑定事件处理函数
  as[i].onclick= function() {
   
    if (tabThis.className == "tab-pane active show") {
      tabThis.className = "tab-pane";
      console.log(tabThis.className);
    } else {
        //每次添加显示的类名时先重置每一项的类名,防止多个显示
        for (var item of tabPaneArr) {
            item.className = "tab-pane";
        }
      tabThis.className += " active show";
      console.log(tabThis.className);
    }
  };
}
  //导航栏的隐藏事件
  
  // window.onclick=function(e){
  //   for (var item of tabPaneArr){
  
  //     if(e.target!==as){
  //       item.style.display="none";
  //     }
  //   }
  //   console.log(item.className)
  // }

// var ul=document.getElementById("nav-nav");
// var ass = document.querySelectorAll("[data-toggle='tab']");
// let tabPaneArrs = document.getElementsByClassName("tab-pane");
//   console.log(ul)
//   console.log(as)
 
//   window.onclick=function(e){
//     var a=e.target;
//     console.log(a)
//     for(var items of ass){
//       if(a!==items){
//         console.log(items)
//       }
//     }
//   }

*/
   
/*
//悬停
//找到所有的要触发事件的元素
var as = document.querySelectorAll("[data-toggle='tab']");
console.log(as);
//找到所有要发生改变的元素
let tabPaneArr = document.getElementsByClassName("tab-pane"); // [0,1,2,3,4,5]
console.log(tabPaneArr);
//遍历要触发事件
for (let i = 0; i < as.length; i++) {
  let tabThis = tabPaneArr[i];
  console.log(tabThis);
  //为每个as集合中的元素绑定事件处理函数
  as[i].onmouseenter = function() {
    
    if (tabThis.className == "tab-pane active show") {
      tabThis.className = "tab-pane";
      console.log(tabThis.className);
    } else {
        //每次添加显示的类名时先重置每一项的类名,防止多个显示
        for (var item of tabPaneArr) {
            item.className = "tab-pane";
        }
      tabThis.className += " active show";
      console.log(tabThis.className);
    }
    //悬停在上方导航栏时需要给隐藏菜单加悬停事件,不然鼠标一拿开就隐藏
    tabThis.parentElement.onmouseenter=function(){
        tabThis.className += " active show";
    }
    //移开事件,如果不加移除鼠标事件则隐藏菜单一直显示
    tabThis.parentElement.onmouseleave=function(){
        tabThis.className = "tab-pane";
    }
  };
  //导航栏的隐藏事件
as[i].onmouseleave=function(){
    tabThis.className = "tab-pane";
}
}
*/
//  $("#nav-nav").on("mouseenter","[data-toggle='tab']",function(){
    /* var $as=$("[data-toggle='tab']");
    var $tabPaneArr=$(".tab-pane");
        $as.each(function(i,elem){
          var $elem=$(elem);
          let tabThis=$tabPaneArr[i]
          console.log(tabThis)
          $elem.mouseenter(function(){
            console.log(tabThis.className);
            if (tabThis.className == "tab-pane active show"){
              tabThis.className = "tab-pane";
            } else {
                //每次添加显示的类名时先重置每一项的类名,防止多个显示
                for(var i=0;i<$tabPaneArr.length;i++){
                  tabThis.className = "tab-pane";
                }
                console.log(tabThis.className)
              tabThis.className += " active show";
            }
            console.log(tabThis.className);
            //悬停在上方导航栏时需要给隐藏菜单加悬停事件,不然鼠标一拿开就隐藏
            tabThis.parentElement.onmouseenter=function(){
                tabThis.className += " active show";
            }
            //移开事件,如果不加移除鼠标事件则隐藏菜单一直显示
              tabThis.parentElement.onmouseleave=function(){
               tabThis.className = "tab-pane";
                }
                $("#nav-nav").on("mouseleave","[data-toggle='tab']",function(){
                  tabThis.className = "tab-pane";
               })
              })
            }) */
  //      }
  //  )


  // jQuery
  var $index;
  $('#nav-nav').on('mouseenter','[data-toggle="tab"]',function() {
    // console.log($(this).attr('data-index'))
    $index = parseInt($(this).attr('data-index'));
    $(this).parent().parent().next().children().removeClass('active show').eq($index).addClass('active show').parent()
    .mouseenter(function() {
      $(this).children().eq($index).addClass('active show').siblings().removeClass('active show')
    })
    .mouseleave(function() {
      $(this).children().eq($index).removeClass('active show')
    })
  }).on('mouseleave','[data-toggle="tab"]',function() {
    $(this).parent().parent().next().children().eq($index).removeClass('active show');
  })
 
