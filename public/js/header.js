
//    for(var a of as){
//        console.log(a)
//        a.onclick=function(){
//            var a=this;
//            var divs=document.getElementsByClassName("tab-pane");
//            console.log(divs)
//            for(var div of divs){

//                 // console.log(style)
//                    div.getAttribute("class")
//                    console.log(div.getAttribute("class"))
//                 if(div.className=="tab-pane active show"){
//                     console.log(1)
//                     div.className="tab-pane";
//                     console.log(2)
//                 // }else if(div.className=="active"){
//                 //         div.className="none";
//                     // var active=document.querySelector("#tab-content>.active")
//                     // console.log(active)
//                     // active!==null&&(div.className="none");
//                 }else {
//                     div.className += " active show"
//                 }
//            }
//        }
//    }
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
    tabThis.parentElement.onmouseenter=function(){
        tabThis.className += " active show";
    }
    tabThis.parentElement.onmouseleave=function(){
        tabThis.className = "tab-pane";
    }
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
as[i].onmouseleave=function(){
    tabThis.className = "tab-pane";
}
}
