 import header from "./components/header.js";
 import nav from "./components/nav.js";
 import subNav from "./components/subNav.js";
 import about from "./components/about.js";
 import contact from "./components/contact.js";
 import subscribe from "./components/subscribe.js";
 import booking from "./components/booking.js";
 import specify from "./components/specify.js";
 import orderMenu from "./components/orderMenu.js";
 
 import all_items_container from "./components/all_items_container.js";
 // items 1- 18
 import item1 from "./components/items/showcase/item1.js";
 import item2 from "./components/items/showcase/item2.js";
 import item3 from "./components/items/showcase/item3.js";
 import item4 from "./components/items/showcase/item4.js";
 import item5 from "./components/items/showcase/item5.js";
 import item6 from "./components/items/showcase/item6.js";
 import item7 from "./components/items/showcase/item7.js";
 import item8 from "./components/items/showcase/item8.js";
 import item9 from "./components/items/showcase/item9.js";
 import item10 from "./components/items/showcase/item10.js";
 import item11 from "./components/items/showcase/item11.js";
 import item12 from "./components/items/showcase/item12.js";
 import item13 from "./components/items/showcase/item13.js";
 import item14 from "./components/items/showcase/item14.js";
 import item15 from "./components/items/showcase/item15.js";
 import item16 from "./components/items/showcase/item16.js";
import item17 from "./components/items/showcase/item17.js";
 import item18 from "./components/items/showcase/item18.js";

 import footer from "./components/footer.js";

 
const app = function(){
    
    const call =()=>{
document.querySelector (".header").innerHTML = (header() );        
document.querySelector(".navToggle").innerHTML = (nav());
document.querySelector(".main").innerHTML = (subNav() + orderMenu() + all_items_container() + about() + contact() + subscribe() + booking() + specify() );
document.querySelector(".footer").innerHTML = (footer());
    }
    call();

//menu
var abtAction = document.querySelector(".about");
var cntAction = document.querySelector(".contact");
var subAction = document.querySelector(".subscribe");
var ordAction = document.querySelector(".orderNow");

//pages
var home = document.querySelector(".header")  ;
var aboutPage = document.querySelector(".aboutJs");
var contactPage = document.querySelector(".contactJs");
var subscribePage = document.querySelector(".subscribeJs");
var bookingPage = document.querySelector(".bookingJs");
var specifyPage = document.querySelector(".specifyJs");
var menuPage = document.querySelector(".menuJs");

//form containing itemsContainer / all_Items
var mls = document.querySelector(".all_items_container");

//footer
var futa = document.querySelector(".footer");

//navs
var nav1 = document.querySelector(".nav1");
var nav3 = document.querySelector(".nav3");
var nav6 = document.querySelector(".nav6");
var nav8 = document.querySelector(".nav8");

//navs exit
var back = document.querySelector(".back");
var back3 = document.querySelector(".back3");
var back6 = document.querySelector(".back6");
var back8 = document.querySelector(".back8");

//subNav
var subN = document.querySelector(".subNav");
var all = document.querySelector(".all");
var mn = document.querySelector(".me_nu");
var bk = document.querySelector(".booking");
var active = document.querySelector("#active");
var notActive = document.querySelector("#notActive");
var notActive2 = document.querySelector("#notActive2");            

//orderMenu/menuJs properties class
 var appetizersBtn = document.querySelector(".appetizersBtn");
 var barbecuesBtn = document.querySelector(".barbecuesBtn");
 var dessertsBtn = document.querySelector(".dessertsBtn");
 var drinksBtn = document.querySelector(".drinksBtn");
 var friesBtn = document.querySelector(".friesBtn");
 var soupBtn = document.querySelector(".soupBtn");

//goto aboutPage
abtAction.addEventListener("click", () =>{
    home.style.display ="none";
    nav3.style.display ="block";
    aboutPage.style.display = "block";
    contactPage.style.display ="none";
    nav6.style.display ="none";
    subscribePage.style.display ="none";
    nav8.style.display ="none";
    futa.style.display ="block";
    nav1.style.display ="none";
});

//exit aboutPage
back3.addEventListener("click", () =>{
    home.style.display ="block";
    nav3.style.display ="none";
    aboutPage.style.display ="none";
    futa.style.display ="none";
    
});

//goto contactPage
cntAction.addEventListener("click", ()=>{
    home.style.display ="none";
    nav3.style.display = "none";
    aboutPage.style.display ="none";
    contactPage.style.display ="block";
    nav6.style.display ="block";
    subscribePage.style.display ="none";
    nav8.style.display ="none";
    futa.style.display ="block";
    nav1.style.display ="none";
});

//exit contactPage
back6.addEventListener("click", ()=>{
    home.style.display ="block";
    nav3.style.display = "none";
    aboutPage.style.display ="none";
    contactPage.style.display ="none";
    nav6.style.display ="none";
    futa.style.display ="none";
    
});

//goto subscribePage
subAction.addEventListener("click", ()=>{
    home.style.display ="none";
    nav3.style.display = "none";
    aboutPage.style.display ="none";
    contactPage.style.display ="none";
    nav6.style.display ="none";
    subscribePage.style.display ="block";
    nav8.style.display ="block";
    futa.style.display ="block";
    nav1.style.display ="none";
});

//exit subscribePage
back8.addEventListener("click", ()=>{
    home.style.display ="block";
    nav3.style.display = "none";
    aboutPage.style.display ="none";
    contactPage.style.display ="none";
    nav6.style.display ="none";
    subscribePage.style.display ="none";
    nav8.style.display ="none";
    futa.style.display ="none";
    
});

//goto order page
ordAction.addEventListener("click", ()=>{
    home.style.display ="none";
    nav3.style.display = "none";
    aboutPage.style.display ="none";
    contactPage.style.display ="none";
    nav6.style.display ="none";
    subscribePage.style.display ="none";
    nav8.style.display ="none";
    futa.style.display ="block";
    nav1.style.display ="block";
    subN.style.display ="block"
    mls.style.display ="block";
    active.style.borderBottom="2px solid coral";
    notActive.style.borderBottom="none";
    notActive2.style.borderBottom="none";
    
    var each = document.querySelectorAll(".each_item");
    for (var e = 0; e < each.length; e++){
        each[e].style.display ="block";
    }
    
});

//exit order page
back.addEventListener("click", ()=>{
    home.style.display ="block";
    futa.style.display ="none";
    nav1.style.display ="none";
    subN.style.display ="none";
    mls.style.display ="none"; //form
    menuPage.style.display ="none";
    bookingPage.style.display ="none";
    
});

//goto subNav: all
 all.addEventListener("click", ()=>{
var each = document.querySelectorAll(".each_item");
    for (var e = 0; e < each.length; e++){
        each[e].style.display ="block";
    }
     bookingPage.style.display ="none";
     mls.style.display ="block";
     menuPage.style.display ="none";
 active.style.borderBottom="2px solid coral";
 notActive.style.borderBottom="none";
 notActive2.style.borderBottom="none";

});    

//goto subNav: menu
 mn.addEventListener("click",()=>{
var each = document.querySelectorAll(".each_item");
for (var e = 0; e < each.length; e++){
        each[e].style.display ="none";
}

appetizersBtn.style.background="coral";

var appertizer =document.querySelectorAll("#appertizer");
for(var a = 0; a < appertizer.length; a++){
    appertizer[a].style.display ="block";
}
       bookingPage.style.display ="none";
       mls.style.display ="block";
       menuPage.style.display ="block";
 active.style.borderBottom="none";
 notActive.style.borderBottom="2px solid coral";
 notActive2.style.borderBottom="none";
});

//goto subNav: booking
bk.addEventListener("click", ()=>{
      mls.style.display ="none";
      bookingPage.style.display ="block";
      nav1.style.display ="block";
      subN.style.display ="block";
      menuPage.style.display ="none";
 active.style.borderBottom="none";
 notActive.style.borderBottom="none";
 notActive2.style.borderBottom="2px solid coral";
});

//appetizersBtn
appetizersBtn.addEventListener("click", ()=>{
appetizersBtn.style.background="coral";  
var appertizer =document.querySelectorAll("#appertizer");
for(var a = 0; a < appertizer.length; a++){
    appertizer[a].style.display ="block";
}

var barbecue =document.querySelectorAll("#barbecue");
for(var b = 0; b < barbecue.length; b++){
    barbecue[b].style.display ="none";
}

var dessert =document.querySelectorAll("#dessert");
for(var d = 0; d < dessert.length; d++){
    dessert[d].style.display ="none";
}

var drink = document.querySelectorAll("#drink");
for(var d = 0; d < drink.length; d++){
    drink[d].style.display ="none";
}   

var soup = document.querySelectorAll("#soup");
for(var s = 0; s < soup.length; s++){
    soup[s].style.display ="none";
}

var fried = document.querySelectorAll("#fried");
for(var f = 0; f < fried.length; f++){
    fried[f].style.display ="none";
}

});

//barbecuesBtn
barbecuesBtn.addEventListener("click", ()=>{
appetizersBtn.style.background="#26292e";  
appetizersBtn.style.color="azure";
var barbecue =document.querySelectorAll("#barbecue");
for(var b = 0; b < barbecue.length; b++){
    barbecue[b].style.display ="block";
}

var dessert =document.querySelectorAll("#dessert");
for(var d = 0; d < dessert.length; d++){
    dessert[d].style.display ="none";
}

var drink = document.querySelectorAll("#drink");
for(var d = 0; d < drink.length; d++){
    drink[d].style.display ="none";
}   

var soup = document.querySelectorAll("#soup");
for(var s = 0; s < soup.length; s++){
    soup[s].style.display ="none";
}

var fried = document.querySelectorAll("#fried");
for(var f = 0; f < fried.length; f++){
    fried[f].style.display ="none";
}

var appertizer =document.querySelectorAll("#appertizer");
for(var a = 0; a < appertizer.length; a++){
    appertizer[a].style.display ="none";
}
    
});

//dessertsBtn
dessertsBtn.addEventListener("click", ()=>{
appetizersBtn.style.background="#26292e";    
appetizersBtn.style.color="azure";
var dessert =document.querySelectorAll("#dessert");
for(var d = 0; d < dessert.length; d++){
    dessert[d].style.display ="block";
}

var drink = document.querySelectorAll("#drink");
for(var d = 0; d < drink.length; d++){
    drink[d].style.display ="none";
}   

var soup = document.querySelectorAll("#soup");
for(var s = 0; s < soup.length; s++){
    soup[s].style.display ="none";
}

var fried = document.querySelectorAll("#fried");
for(var f = 0; f < fried.length; f++){
    fried[f].style.display ="none";
}

var barbecue =document.querySelectorAll("#barbecue");
for(var b = 0; b < barbecue.length; b++){
    barbecue[b].style.display ="none";
}

var appertizer =document.querySelectorAll("#appertizer");
for(var a = 0; a < appertizer.length; a++){
    appertizer[a].style.display ="none";
}

});

//drinksBtn
drinksBtn.addEventListener("click", ()=>{
appetizersBtn.style.background="#26292e";   
appetizersBtn.style.color="azure";
var drink = document.querySelectorAll("#drink");
for(var d = 0; d < drink.length; d++){
    drink[d].style.display ="block";
}

var soup = document.querySelectorAll("#soup");
for(var s = 0; s < soup.length; s++){
    soup[s].style.display ="none";
}

var dessert =document.querySelectorAll("#dessert");
for(var d = 0; d < dessert.length; d++){
    dessert[d].style.display ="none";
}

var fried = document.querySelectorAll("#fried");
for(var f = 0; f < fried.length; f++){
    fried[f].style.display ="none";
}

var barbecue =document.querySelectorAll("#barbecue");
for(var b = 0; b < barbecue.length; b++){
    barbecue[b].style.display ="none";
}

var appertizer =document.querySelectorAll("#appertizer");
for(var a = 0; a < appertizer.length; a++){
    appertizer[a].style.display ="none";
}
    
});

//friesBtn
friesBtn.addEventListener("click", ()=>{
appetizersBtn.style.background="#26292e";  
appetizersBtn.style.color="azure";
var fried = document.querySelectorAll("#fried");
for(var f = 0; f < fried.length; f++){
    fried[f].style.display ="block";
}
    
var soup = document.querySelectorAll("#soup");
for(var s = 0; s < soup.length; s++){
    soup[s].style.display ="none";
}
    
var drink = document.querySelectorAll("#drink");
for(var d = 0; d < drink.length; d++){
    drink[d].style.display ="none";
}

var dessert =document.querySelectorAll("#dessert");
for(var d = 0; d < dessert.length; d++){
    dessert[d].style.display ="none";
}

var barbecue =document.querySelectorAll("#barbecue");
for(var b = 0; b < barbecue.length; b++){
    barbecue[b].style.display ="none";
}

var appertizer =document.querySelectorAll("#appertizer");
for(var a = 0; a < appertizer.length; a++){
    appertizer[a].style.display ="none";
}

});

//soupBtn
soupBtn.addEventListener("click", ()=>{
appetizersBtn.style.background="#26292e";   
appetizersBtn.style.color="azure";
var soup = document.querySelectorAll("#soup");
for(var s = 0; s < soup.length; s++){
    soup[s].style.display ="block";
}

var fried = document.querySelectorAll("#fried");
for(var f = 0; f < fried.length; f++){
    fried[f].style.display ="none";
}
    
var drink = document.querySelectorAll("#drink");
for(var d = 0; d < drink.length; d++){
    drink[d].style.display ="none";
}

var dessert =document.querySelectorAll("#dessert");
for(var d = 0; d < dessert.length; d++){
    dessert[d].style.display ="none";
}

var barbecue =document.querySelectorAll("#barbecue");
for(var b = 0; b < barbecue.length; b++){
    barbecue[b].style.display ="none";
}

var appertizer =document.querySelectorAll("#appertizer");
for(var a = 0; a < appertizer.length; a++){
    appertizer[a].style.display ="none";
}

});

//darkmode toggle all pages and components:
var modeTgg = document.querySelector (".mode_toggle");
var navToggle = document.querySelector (".navToggle");        
var allItems = document.querySelector (".all_items");
var categories = document.querySelector (".categories");
var aboutUs = document.querySelector(".aboutUs");
var contactUs = document.querySelector(".contactUs");
var SubSc = document.querySelector(".SubSc");
var spc = document.querySelector(".specify");
var logoBG= document.querySelector (".logo");
var myC = document.querySelector(".myCart");
var bNav = document.querySelector(".b_nav");
var nav_b2 = document.querySelector (".nav_b2");
var ofLink = document.querySelectorAll(".ofLink");
var linkTop = document.querySelector (".ofLinkUp");

var darkmode = document.querySelector(".darkmode");
darkmode.addEventListener("click",()=>{
var el = document.body;
darkmode.classList.toggle("dk");
el.classList.toggle("darkened");
modeTgg.classList.toggle ("modeToggleRight");
navToggle.classList.toggle("darkened");
allItems.classList.toggle("all_items_toggle"); 
categories.classList.toggle("menuColor");    
aboutUs.classList.toggle("menuColor");
logoBG.classList.toggle("logo_bg");  
contactUs.classList.toggle("menuColor");    
SubSc.classList.toggle("menuColor");
spc.classList.toggle("menuColor");  
myC.classList.toggle("menuColor");    
all.classList.toggle("menuColor");
mn.classList.toggle("menuColor");
bk.classList.toggle("menuColor");
back.classList.toggle("dk") ;  
back3.classList.toggle("dk") ;  
back6.classList.toggle("dk") ;  
back8.classList.toggle("dk") ;  
bNav.classList.toggle("b_navToggle");

nav_b2.classList.toggle("totopToggle") ; 

for(var l = 0; l < ofLink.length; l++ ){
ofLink[l].classList.toggle("ofColor") ;
}
linkTop.classList.toggle("ofColor") ;
});

//end
}
export default app;