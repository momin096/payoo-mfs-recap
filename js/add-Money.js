
// Add Money

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyField = document.getElementById('add-money-amount').value ;
    const addMoney = parseFloat(addMoneyField);
    const pinNumber = document.getElementById('add-money-pin').value ;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = addMoney + balanceNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money')
    }
})