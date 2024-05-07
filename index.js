// .checked = property that determines the checked state of an HTML checkbox or radio button element 

const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const payPalButton = document.getElementById("payPalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

    if(myCheckBox.checked) {
        subResult.textContent = `You are subscribed`
    }
    else{
        subResult.textContent = `You are not subscribed`
    }

    if(visaButton.checked){
        paymentResult.textContent = `You are paying with Visa`
    }
    else if(masterCardButton.checked){
        paymentResult.textContent = ` You are paying with MasterCard`
    }
    else if(payPalButton.checked){
        paymentResult.textContent = ` You are paying with PayPal`
    }
    else{
        paymentResult.textContent = `Select a payment a method`
    }

}