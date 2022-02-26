var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var option2 = document.getElementsByClassName("option2")
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

    option2.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }


selectField.onclick = function(){
list.classList.toggle("hide");
arrowIcon.classList.toggle("rotate");
}


let url = "https://fakestoreapi.com/products";

const container = document.getElementById("container");

async function getData(){

try{
    let res = await fetch(url);
    let data = await res.json();
console.log(data)
    appendProducts(data);
}
catch(err){
    console.log("err:",err);
}
}

getData();
let arr = [];
function appendProducts(data){
    console.log(data)
    data.forEach(function(el){
        let div = document.createElement("div")
        let img = document.createElement("img");
        img.src = el.image;
        let title = document.createElement("p");
        title.innerText = el.title;
        let price = document.createElement("p");
        price.innerText = el.price;
        let btn = document.createElement("button")
        btn.innerHTML = "Outlook"
        btn.addEventListener("click",()=>
        {
            arr.push(el)
            localStorage.setItem("items",JSON.stringify(arr));
        })
        div.append(img,title,price,btn);
        document.querySelector("#containerwa").append(div);
    });
}

$('nav .button').click(function(){
    $('nav .button span').toggleClass("rotate");
  }); 

    $('nav ul li .second').click(function(){
      $('nav ul li .second span').toggleClass("rotate");
    });

