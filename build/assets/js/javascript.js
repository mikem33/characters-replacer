const replaceButton = document.getElementById('replace-button');
let text = document.getElementById('input-text');
let charTo = document.getElementById('char-to');
let charBy = document.getElementById('char-by');
console.log()
replaceButton.addEventListener('click', () => { replace(text, charTo, charBy, event) })

function replace(text, charTo, charBy, event) {
    event.preventDefault();
    let textValue = text.value;
    let charToValue = charTo.value;
    let charByValue = charBy.value;
    console.log(textValue + ' - ' + charToValue + ' - ' + charByValue);
    let replacedText = textValue.replaceAll(charToValue, charByValue);
    let result = document.getElementById('replaced-text');
    console.log(replacedText);
    result.textContent = replacedText;
}

const copyButton = document.getElementById('copy-replace-text');
copyButton.addEventListener('click', () => { copyElementText('replaced-text') } );

function copyElementText(id) {
    let text = document.getElementById(id).innerText;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    let warning = document.querySelector('.warning');
    warning.classList.add('show');
    setTimeout(function(){
        warning.classList.remove('show');
    }, 3000);   
}