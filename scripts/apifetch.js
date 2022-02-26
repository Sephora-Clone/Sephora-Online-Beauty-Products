let comonfunctionForApi = async(url)=>{
    try {
        
        let req = await fetch(url);
        let collect = await req.json();

        return collect


    } catch (error) {
        console.log(error)
    }

}

let appendData = (data,perent)=>{
    data.array.forEach(element => {
        let mainBox = document.createElement("div");
        let productName = document.createAttribute("h4");
        let productImag =  document.createAttribute("img");
        let productPrice = document.createElement("p");

    });
}

export{comonfunctionForApi,appendData};