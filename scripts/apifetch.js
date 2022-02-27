let comonfunctionForApi = async(url)=>{
    try {
        
        let req = await fetch(url);
        let collect = await req.json();
        return collect
    } catch (error) {
        console.log(error)
    }
}

let appendData = (data,perent,arr)=>{
    console.log(data,perent)
    data.forEach(element => {
        let mainBox = document.createElement("div");

        let productImag =  document.createElement("img");
        productImag.src = element.image_link;

        let productName = document.createElement("h4");
        productName.innerHTML = element.name

        let productPrice = document.createElement("p");
        productPrice.innerHTML = `${element.price} ${element.price_sign}`

        let productCategry = document.createElement("p");
        productCategry.innerHTML=element.category;

        let productbtn = document.createElement("button");
        productbtn.innerHTML = "Outlook";

        productbtn.addEventListener("click",()=>{
            arr.push(element)
            localStorage.setItem("items",JSON.stringify(arr))
        })

        mainBox.append(productImag,productName,productCategry,productPrice,productbtn);
        perent.append(mainBox);
    });
    
}

export{comonfunctionForApi,appendData};