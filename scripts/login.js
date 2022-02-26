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
        localStorage.setItem("profile",JSON.stringify(data))
        alert("Login successful");
        window.location.href="aftar_login.html"
    } catch (error) {
        alert("Data not matched!!!")
    }
}
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    loginData();
})