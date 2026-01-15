function sidenav(){
    var snav=document.querySelector(".side-nav");
    snav.style.left="0%"
}

function closenav(){
    var snav=document.querySelector(".side-nav");
    snav.style.left="-60%"
}

var products=document.querySelector(".products");
var productslist= products.querySelectorAll("div");
var search=document.getElementById("Search");

search.addEventListener("keypress",function(){

    var enteredtext= event.target.value.toUpperCase();
    console.log(enteredtext);

    for(i=0;i<productslist.length;i+=1)
{
    var productname=productslist[i].querySelector("h3").textContent;

    if(productname.toUpperCase().indexOf(enteredtext)<0)
    {
        productslist[i].style.display="none"
    }
    else{
        productslist[i].style.display="block"
    }
}

})

