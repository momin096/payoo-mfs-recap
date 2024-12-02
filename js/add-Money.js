document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputValueById('add-money-amount');
    const pinNumber = getInputValueById('add-money-pin');

    if(pinNumber === 1234){
        const balance = getElementValueById('account-balance');

        const newBalance = addMoney + balance;

        setInnerTextById('account-balance', newBalance);

        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;
        
        const statementContainer = document.getElementById('statement-container');
        statementContainer.appendChild(p);
    }
    else{
        alert('Something went wrong')
    }
})