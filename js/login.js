document.getElementById("submit-button").addEventListener("click", function(){
    const email = getInputFieldValueByIdForLogin("user-email");
    const password = getInputFieldValueByIdForLogin("user-password");
    if(email == "sontan@baap.com" && password == "secret"){
        window.location.href = "bank.html";
    }
    else{
        alert("Please enter the email & password correctly!!! Email: sontan@baap.com & Password: secret");
    }
    
})