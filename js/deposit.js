document.getElementById("deposit-button").addEventListener("click", function(){
    const inputFieldValue = getInputFieldValueById("deposit-input-field");
    if(inputFieldValue > 0){
        const depositTextFieldValue = getTextFieldValueById("deposit");
        const totalDeposit = inputFieldValue + depositTextFieldValue;
        setTextFieldValueById("deposit", totalDeposit);
        const balanceTextFieldValue = getTextFieldValueById("balance");
        const totalBalance = inputFieldValue + balanceTextFieldValue;
        setTextFieldValueById("balance", totalBalance);
    }
    else{
        alert("You can't deposit negative amount, please deposit positive amount.")
    }
    
})