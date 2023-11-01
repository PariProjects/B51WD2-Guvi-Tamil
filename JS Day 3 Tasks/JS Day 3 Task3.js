//Q3:Use the same rest countries API and print all countries names, regions, sub-region and populations

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
   const data = JSON.parse(xhr.response);
    console.log(data);
    
    for(let i =0; i <data.length; i++) {
        
        console.log(`
        Name       : ${data[i].name.common};
        Region     : ${data[i].region};
        Subregion  : ${data[i].subregion};
        Population : ${data[i].population};
        `);
    }
};

//Another method to code

// let request =new XMLHttpRequest();
//  console.log(request)
// request.open("GET","https://restcountries.com/v3.1/all")
// console.log(request.open("GET","https://restcountries.com/v3.1/all"));
// request.send();
// request.onload=function(){

// let data =request.response

// let result =JSON.parse(data)


//  for(let index of result)
//  {


//     console.log("name : ",index.name.common.concat(",region : ",index.region).concat(",subregion : ",index.subregion).concat(",population : ",index.population))
//  }
// };
