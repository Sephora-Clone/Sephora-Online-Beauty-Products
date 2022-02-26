
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
        window.location.href="login.html"
    
    }
    catch (error) {
        console.log("Error:",error)
    }
}
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault()
    singUPData()
    
})

