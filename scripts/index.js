const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl";
async function getApi(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        for(let i=0; i<34; i++)
            data.pop();
        console.log(data);
        appendData(data);
    } catch(err) {
        console.log(err);
    }
}

getApi(url);
var container = document.getElementById("container");
function appendData(data) {
    console.log(data)
    data.forEach(function (ele) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.image_link;

        let h5 = document.createElement("h5");
        h5.innerText = ele.name;

        let price = document.createElement("p");
        price.innerText = "Rs. "+Math.floor(ele.price*25);

        div.append(img, h5, price);
        container.append(div);
})
}



