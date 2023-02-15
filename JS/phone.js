function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;

    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;

    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function phoneTotalCost(newPhoneNumber){
        const phoneTotal = newPhoneNumber * 1219;
        const phoneTotalElement =  document.getElementById('phone-total');
        phoneTotalElement.innerText = phoneTotal;
}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    phoneTotalCost(newPhoneNumber);
    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    phoneTotalCost(newPhoneNumber);

    calculateSubTotal();
})