
// Register Page
let singUPData = async ()=>
{
    try {
        
        let firstName = document.getElementById("firstNameId").value;
        let lastName = document.getElementById("lastNameId").value;
        let emailId = document.getElementById("emailId").value;
        let password = document.getElementById("passwordId").value;
        let phone = document.getElementById("phoneId").value;
        let month = document.getElementById("monthsName").value;
        let day = document.getElementById("DaysId").value;
        let birth = `${month}/${day}`
        let zipCode = document.getElementById("zipId").value;
        let fullName = firstName+" "+lastName;

        let register_data = {
            name:fullName,
            email:birth,
            password:password,
            username:emailId,
            mobile:phone,
            description:zipCode
        }
        register_data = JSON.stringify(register_data);
        let requst = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
            method:"POST",
            body:register_data,
            headers:{
                "Content-Type": "application/json",
            },
        });

        let collect = await requst.json();
        alert(collect.message);
    
    }
    catch (error) {
        console.log("Error:",error)
    }
}

// document.querySelector("form").addEventListener("submit",()=>{
//     singUPData()
    
// })
// console.log(document.getElementById("submitId").value)

// Login Page 

let loginData = async ()=>
{
    try {
    let loginUseremail = document.getElementById("log-emailId").value;
    let loginUserpassword = document.getElementById("log-passwordId").value;

    let loginUser = {
        username:loginUseremail,
        password:loginUserpassword
    }
    let login = JSON.stringify(loginUser)
    let request =  await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/login",
        {
        method:"POST",
        body:login,
        headers:{
                "Content-Type": "application/json"
            },
    })
    let collect = await request.json()
      getdata(loginUser.username,collect.token)   
    } catch (error) {
        console.log("erro h but asata",error)
        alert("wrong email & password");
    }
    
}
let getdata = async (username,token) =>{
    try {
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
            headers:{
                "Content-Type": "application/json",
                Authorization : `Bearer ${token}`
            },

        })
        let data = await res.json();
        console.log("data",data);
        alert("Login successful");
    } catch (error) {
        alert("Data not matched!!!")
    }
}
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    loginData();
})
