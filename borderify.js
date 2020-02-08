document.body.style.border = "5px solid red";


// if url is cnn, then redirect

var url = document.URL;

console.log(`url: ${url}`);

const firstDiv = document.querySelector('div');

let textNode = document.createTextNode(url);

firstDiv.appendChild(textNode);


window.location = 'https://www.cnn.com';