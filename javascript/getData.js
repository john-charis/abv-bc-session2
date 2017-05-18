"use strict"

function getData(url){

    let xmlhttp;
    let test = document.getElementById('test');

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();
     } else {
            // code for old IE browsers
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            test.innerHTML = xmlhttp.responseText.replace('?','').replace('(','').replace(')','');
            let x = JSON.parse(xmlhttp.responseText.replace('?','').replace('(','').replace(')',''));
            //test.innerHTML
            console.log(x.base + "\n");
            console.log(x.date + "\n");
            console.log('AUD : ' + x.rates.AUD + "\n");
        }
    }

    xmlhttp.open("GET", url);
    xmlhttp.send();

}