

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const balance = getElementValueById('account-balance')
    const cashOut = getInputValueById('cash-out-amount');
    const pin = getInputValueById('cash-out-pin');

    if(pin === 1234 && cashOut <= balance){
        const newBalance = balance - cashOut;
        console.log('Hey')

        setInnerTextById('account-balance', newBalance);
    }
    else{
        alert('Something Went Wrong');
    }
})