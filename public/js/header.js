
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
var as = document.querySelectorAll("[data-toggle='tab']");
console.log(as);
let tabPaneArr = document.getElementsByClassName("tab-pane"); // [0,1,2,3,4,5]
console.log(tabPaneArr);
for (let i = 0; i < as.length; i++) {
  let tabThis = tabPaneArr[i];
  console.log(tabThis);
  as[i].onclick = function() {
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
