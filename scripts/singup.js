
let Submit = async ()=>
{
    
    try {
        
        let firstName = document.getElementById("firstNameId").value;
        let lastName = document.getElementById("lastNameId").value;
        let emailId = document.getElementById("emailId").value;
        let password = document.getElementById("passwordId").value;
        let phone = document.getElementById("phoneId").value;
        let month = document.getElementById("monthsName").value;
        let day = document.getElementById("DaysId").value;
        let zipCode = document.getElementById("zipId").value;
        let fullName = firstName+" "+lastName;

        let user_data = {
            name:fullName,
            email:emailId,
            password:password,
            username:emailId,
            mobile:phone,
            description:zipCode
        }
        user_data = JSON.stringify(user_data);
        let requst = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
            method:"POST",
            body:user_data,
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
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault()
    Submit()
    
})