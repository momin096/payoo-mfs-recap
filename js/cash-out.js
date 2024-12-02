

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const balance = getElementValueById('account-balance')
    const cashOut = getInputValueById('cash-out-amount');
    const pin = getInputValueById('cash-out-pin');

    if(pin === 1234 && cashOut <= balance){
        const newBalance = balance - cashOut;
        console.log('Hey')

        setInnerTextById('account-balance', newBalance);

        const p = document.createElement('p');
        p.innerText = `Cash out: ${cashOut} Tk. Balance: ${newBalance}`;

        const statementContainer = document.getElementById('statement-container');
        statementContainer.appendChild(p);
    }
    else{
        alert('Something Went Wrong');
    }
})