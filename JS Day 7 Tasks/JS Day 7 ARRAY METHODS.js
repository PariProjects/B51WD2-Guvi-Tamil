// Q1) 1a) Get all the countries from Asia continent /region using Filter function

// var request = new XMLHttpRequest();
// request.open('GET',"https://restcountries.eu/rest/v2/all",true);
// request.send();
// request.onload = function () 
// {
//       var CountryData=JSON.parse(this.response);


//       let AsianCountries = CountryData.filter((countries) =>
//        {
//            return countries.region ==="Asia";
//        })
//      console.log(AsianCountries);
// }


// // 1b) Get all the countries with a population of less than 2 lakhs using Filter function

// var request1 = new XMLHttpRequest();
// request1.open("GET","https://restcountries.com/v2/all");
// request1.send();
// request1.onload = function()
// {
//     var result1=JSON.parse(request1.response);
//     const pop = result1.filter((element) => 
//     {
//         return element.population < 200000;
//     })
// console.log(pop);
// }
 

// // 1c) Print the following details name, capital, flag using forEach function


// var requestt = new XMLHttpRequest();

// requestt.open("GET","https://restcountries.com/v2/all");
// requestt.send();

// requestt.onload = function ()
// {
//    var resultt=JSON.parse(requestt.response);
//    resultt.forEach(element => 
//     {
//         console.log(`
//         Name    :  element.name.common;
//         Capital :  element.capital;
//         Flag    :  element.flag`); 

//    });
// }

 //1d) Print the total population of countries using reduce function


// var request3 = new XMLHttpRequest();

// request3.open("GET","https://restcountries.com/v2/all");

// request3.send();

// request3.onload=function(){
//     var result2=JSON.parse(request3.response);
//     var total = result2.reduce((acc,curr) =>{
//         return acc+curr.population;
//     } ,0);

//     console.log(total);
 
// }

// 1e) Print the country which uses US Dollars as currency

// let request4 =new XMLHttpRequest();

// request4.open("GET","https://restcountries.com/v2/all",true);
// request4.send();


// request4.onload=function()
// {

// let Countrydata = request4.response

// let result3 =JSON.parse(Countrydata)


// let res = result3.map((element) =>
// {

// for(let key in element.currencies)
// {

//     if(element.currencies[key].code==="USD"){
//         console.log(element.name)
//     }
// }
// });
// }









