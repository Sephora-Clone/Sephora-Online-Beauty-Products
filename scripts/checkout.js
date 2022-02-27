document.querySelector("form").addEventListener("submit", myFunction);
var mydata= JSON.parse(localStorage.getItem("checkOutDataBase")) || [];
function myFunction(event){
    event.preventDefault();
   var fname = document.querySelector("#fname").value;
   var lname = document.querySelector("#lname").value;
    var mobile= document.querySelector("#mbl").value;
    var address= document.querySelector("#address").value;
    var zip= document.querySelector("#zip").value;
   
    var object={
        username1: fname,
        username2: lname,
        mobile: mobile,
        cAddress: address,
        cZip: zip,
        
    };
    mydata.push(object);
    localStorage.setItem("checkOutDataBase",JSON.stringify(mydata));
    alert("Data filled Up successfully");
    window.location.href="payment.html";

};


var total= cartArr.reduce(function(acc, cv){
    return acc+Number(cv.price)
},0);
document.querySelector("rightp").textContent=`Total Price ${total}`
console.log(total);