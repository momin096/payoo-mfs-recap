

function getInputValueById(elementId){
    const inputField = document.getElementById(elementId).value;
    const value = parseFloat(inputField);
    return value ;
}



function getElementValueById(elementId){
    const elementText = document.getElementById(elementId).innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}

function setInnerTextById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value ;
    return element;
}


function showSectionById(elementId){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('statement').classList.add('hidden');

    // show the section

    document.getElementById(elementId).classList.remove('hidden');
}