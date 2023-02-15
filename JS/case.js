function updateCaseNumber(isIncrease){
    const caseNumberField =  document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber +1;
    }
    else{
        newCaseNumber = previousCaseNumber -1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function caseTotalPrice(newCaseNumber){
    const totalPrice = newCaseNumber * 59;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = totalPrice;
}





document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber = updateCaseNumber(true);

   caseTotalPrice(newCaseNumber);
   calculateSubTotal()
   
})

document.getElementById('case-btn-minus').addEventListener('click',function(){
  const newCaseNumber = updateCaseNumber(false);
  caseTotalPrice(newCaseNumber);
  calculateSubTotal()

})