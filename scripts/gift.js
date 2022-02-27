
let url = "https://makeup-api.herokuapp.com/api/v1/products.json?";

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
let arr = JSON.parse(localStorage.getItem("items"))||[];
function appendProducts(data){
    console.log(data)
    data.forEach(function(el){
        let div = document.createElement("div")
        let img = document.createElement("img");
        img.src = el.image_link;
        let title = document.createElement("p");
        title.innerText = el.name;
        let price = document.createElement("p");
        price.innerText = el.price_sign+(Math.floor(Math.random() * 100) + 1);

        var giftbtn = document.createElement("button");
        giftbtn.innerHTML="Outlook"
        giftbtn.addEventListener("click",()=>{
            arr.push(el)
            localStorage.setItem("items",JSON.stringify(arr))
        })
        div.append(img,title,price,giftbtn);
        containerwa.append(div);
    });
}

$('nav .button').click(function(){
    $('nav .button span').toggleClass("rotate");
  });
 
    $('nav ul li .second').click(function(){
      $('nav ul li .second span').toggleClass("rotate");
    });