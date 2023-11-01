//Q2: Use the rest countries API URL ->https://restcountries.com/v3.1/all and display all the country flags in the console

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    const data = JSON.parse(xhr.response);
    console.log(data);
   
    for(let i =0; i <data.length; i++){
        
        console.log("Flags:", data[i].flags.png);
        console.log("Flags:", data[i].flags.svg);
        
    }
};








