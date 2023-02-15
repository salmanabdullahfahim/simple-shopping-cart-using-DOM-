function getTextElementByValue(id){
    const phoneTotalElement = document.getElementById(id);
    const currentTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    //calculate total
    const currentPhoneTotal = getTextElementByValue('phone-total');
    const currentCaseTotal = getTextElementByValue('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount =  parseFloat(taxAmountString);
    setTextElementValueById('tax-amount',taxAmount);

    // all total
    const finalAmount =  currentSubTotal + taxAmount;
    setTextElementValueById('all-total',finalAmount);

}