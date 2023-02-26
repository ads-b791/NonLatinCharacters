const innerText = document.querySelector('#latin-text');
const outerText = document.querySelector('.latin-result>pre>code');

document.querySelector('button').onclick = function (event) {
event.preventDefault();
let text = innerText.value.trim();
if (text ==='') return;

const template = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()_+-={}[]?.,;:\'\"\\/ 	';

let out = '';
for (let i = 0; i < text.length; i++) {
if (text[i] === '>') {
out += '&#x3E';
}
else if (text[i] === '<') {
out += '&#x3C;';
}
else if (text[i] === '\n') {
out += '<br>';
}
else if(template.indexOf(text[i]) === -1) {
out += '<mark>'+text[i]+'</mark>';
}
else {
out += text[i];
}
}
outerText.innerHTML = out;
}


//document.querySelector('form').onsubmit = function (event) {
    
//    event.preventDefault();
//    let text = innerText.value.trim();
//    if (text ==='') return;

//    let regexp = /[^\w\s'",\\.:;?!@#$%^&*+-=_{}\[\]()<>]/gi

//    let result = text.replace(/\>/g, str => '&#x3E;');
//    result = result.replace(/\</g, str => '&#x3C;');
//    result = result.replace(/\n/g, str => '<br>');

//	result = result.replace(regexp, symbol => '<mark>' + symbol + '</mark>');


//    outerText.innerHTML = result;
//    console.log(result);
//}
