// Arrow Functions

//Q2 a.Print odd numbers in an array

let array = [1,4,6,8,7,5,3,9];

let PrintOdd = (array) => 
{
    for(let i = 0; i < array.length; i++) 
    {
      if (array[i] % 2 != 0) 
       {
         console.log(array[i]);
       }
      }}
    PrintOdd(array);


// b.Convert all the strings to title caps in a string array
    
     let string_array = ["hari","bala","mani","atchay"];
     
     let Titlecaps = ( string_array) =>
     {
       for(let i=0;i<string_array.length;i++)
       {
          console.log(string_array[i].split('')[0].toUpperCase()+ string_array[i].slice(1))
       }}
    Titlecaps(string_array);


// c.Sum of all numbers in an array

         var a=[1,2,3,4,5,6,7,8,9];
         var sum=0;
         let SumArray = (a) =>
    {
        for(let i=0; i<a.length; i++)
          {
             sum=sum+a[i];
          }
            console.log("Total is",+sum) ;
            return sum;
     }
     SumArray(a);


  // d.Return all the prime numbers in an array   
      
        let n = 10;
        let Prime = (n) =>
         {
           for(let i=2; i<=n; i++)
            {
           
              let num = 0;
           
              for(let j=2; j<i; j++)
                {
                   if( i % j == 0 )
                    {
                    num = 1;
                    break;
                    }
                }
              if( num == 0 )
                {
                  console.log(i);
                }
             } 
         }
         Prime(n);


// // e. Return all the palindromes in an array
   
let c = [];
let arr = ["MOM","MADAM","APPLE","BOY","ADDA"];
let pali = arr =>
{
   for(let i=0;i<arr.length;i++)
   {
        b =arr[i].split("").reverse().join("")
    
    if (b==arr[i])
       {
          c.push(arr[i])
       }
   }
    return c;
 }
   console.log( pali(arr));

