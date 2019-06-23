
function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    console.log(text);
    jQuery('.warning').addClass('show');
    setTimeout(function(){ 
        jQuery('.warning').removeClass('show');
    }, 3000);
}