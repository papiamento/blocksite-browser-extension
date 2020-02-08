document.body.style.border = "5px solid red";


// if url is cnn, then redirect

var url = document.URL;

console.log(`url: ${url}`);

if (url.match(/.*cnn.com.*/) !== null) {

    window.location = 'https://www.freefrommentalslavery.com';
}
else {
    //window.location = 'https://www.google.com';
    console.log('did not match cnn');
}