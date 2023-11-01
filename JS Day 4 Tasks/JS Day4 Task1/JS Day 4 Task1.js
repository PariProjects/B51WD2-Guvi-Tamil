// Q1 a.Print odd numbers in an array

//Anonymous Function
let array0 = [1,4,6,8,7,5,3,9];
  let PrintOdd = function(array)
{
for(let i = 0; i < array.length; i++) 
{
  if (array[i] % 2 != 0) 
   {
     console.log(array[i]);
   }
  }}
PrintOdd(array0);

// // //IIfE
 
let array1 = [11,12,13,14,15];
    ( function PrintOdd(array1)
{
    for(let i = 0; i < array1.length; i++) 
    {
      if (array1[i] % 2 != 0) 
       {
         console.log(array1[i]);
       }
      
    }
})
PrintOdd(array1);

//b.Convert all the strings to title caps in a string array
 
//Anonymous function

let Titlecaps=function(){
    let string_array =["vijay","manoj","priya","soniya"];
    for(let i=0;i<string_array.length;i++){


        console.log(string_array[i].split('')[0].toUpperCase()+ string_array[i].slice(1))

        }
 
}

Titlecaps();


//IIFE

let string_array = ["hari","bala","mani","atchay"];
(function  ( string_array){
   
    for(let i=0;i<string_array.length;i++)
    {
     console.log(string_array[i].split('')[0].toUpperCase()+ string_array[i].slice(1))
    }})
    (string_array);


c.Sum of all numbers in an array
  
   //Anonymous
     
     let add = function(a)
     {
       var a = [1,2,3,4,5,6,7,8,9];
       var sum = 0;
       for(let i = 0; i <= a.length; i++)
        {
           sum +=i;
        }
        return `Total is ${sum}`; 
        }
       console.log(add(a));

  
  // IIFE

    var a=[1,2,3,4,5,6,7,8,9];
    var sum=0;
    (function (a)
    {
        for(let i=0; i<a.length; i++)
       {
         sum=sum+a[i];
       }
       console.log("Total is",+sum) ;
       return sum;
     })(a);
      
    
// d.Return all the prime numbers in an array

// Anonymous Function

let n = 10;
let Prime = function(n)
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
    }}
       Prime(n);

 // IIFE

       let a = 20;
       (function Prime(a)
         {
            for(let i =2; i <=a; i++)
              {
                let num = 0;
                
                for(let j =2; j <i; j++)
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
          })
      Prime(a);


// e.Return all the palindromes in an array

// Anonymous Function

let a = [];
let arr0 = ["MOM","MADAM","APPLE","BOY","ADDA"];
let pali = function(arr0)
{
   for(let i=0;i<arr0.length;i++)
   {
        b =arr0[i].split("").reverse().join("")
    
    if (b==arr0[i])
       {
          a.push(arr0[i])
       }
   }
    return a;
 }
   console.log( pali(arr0));

// IIFE

let a = [];
let arr = ["MOM","MADAM","APPLE","BOY","ADDA"];
(function palli(arr)
{
   for(let i=0;i<arr.length;i++)
   {
        b =arr[i].split("").reverse().join("")
    
    if (b==arr[i])
       {
          a.push(arr[i])
       }
   }
    return a;
 })
   console.log( pali(arr));


// // f.Return median of two sorted arrays of the same size.

// // Anonymous Function

let Median = function(nums1, nums2) 
{
  let s1= nums1.length
  let s2= nums2.length
  let index = s1+s2
  if(s1==0)
  {
      if(s2%2==1)
      {
          return nums2[Math.floor(index/2)]
      }
      else
      {
          return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
      }
  }
  for(let i=0 ; i<index/2+1;i++)
     {
          nums1.push(nums2[i])
     }
          nums1.sort((a,b)=>a-b)
          console.log(nums1)
  if(index%2==1)
     {
      return nums1[Math.floor(index/2)]
     }
     else
     {
      return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
     }
  };
  

  // // IIFE:

(function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }
   
});


// // g.Remove duplicates from an array

// // Anonymous 

var array=[1,1,2,3,4,5];
let RemoveDup = function (array){
   let dup = [...new Set(array)];
   return(dup);
 }
 RemoveDup(array);

 // // IIFE 

 var array=[1,1,2,3,4,5];
(function RemoveDup(array){
   let dup = [...new Set(array)];
   return(dup);
 })
 RemoveDup(array);


// // h.Rotate an array by k times

// // Anonymous 

let Rotate = function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
}
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
Rotate(Array, N, K);

// // IIFE 

var Array1 = [1, 2, 3, 4, 5];
var N1 = Array.length;
var K1= 2;
(function Rotate(a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
Rotate(Array1, N1, K1);


  
