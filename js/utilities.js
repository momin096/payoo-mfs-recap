

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