document.getElementById("withdraw-button").addEventListener("click", function(){
    const inputFieldValue = getInputFieldValueById("withdraw-input-field");
    const balanceTextFieldValue = getTextFieldValueById("balance");
    if(inputFieldValue > balanceTextFieldValue){
        alert("You can't withdraw more than total balance money.");
    }
    else{
        const withdrawTextFieldValue = getTextFieldValueById("withdraw");
        const totalWithdraw = inputFieldValue + withdrawTextFieldValue;
        setTextFieldValueById("withdraw", totalWithdraw);
        const totalBalance = balanceTextFieldValue - inputFieldValue;
        setTextFieldValueById("balance", totalBalance);
    }
    
   
    
})