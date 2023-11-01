// Q1) For the given JSON iterate over all for loops(for,for in,for of,for Each)

// USING FOR LOOP
 
let keys=['suresh','sheeba','sam','bala','divya']
let values=[1,2,3,4,5]
let Person={}

for(let i=0; i<keys.length; i++)
{
    Person[keys[i]] = values[i];
}
 console.log(Person);

//  USING FOR IN

const resume = {
    "Name"         : "Atchay",
    "Age"          : "25",
    "Gender"       : "Male ",
    "Email ID"     : "Atchay07@gmail.com",
    "Qualification": ["B.E.(Mechanical Engineering)"],
    "Experience"   : ["Internship in Tata Motors", "7years work in Qatar"],
  "langauges_known": ["Tamil", "English", "Telegu"],
  };

//   for (let keys in resume)
//   {
//      console.log(keys+":" ,resume[keys]);
//   }
   
  //  USING FOR LOOP
     
     for (let i = 0; i <resume.Experience.length; i++) 
     {
        console.log(resume.Experience[i]);
     }

  //  USING FOR OF
  
      for (let value of resume.langauges_known)
      {
        console.log(value);
      }

  //  USING FOR EACH
    
         let b =resume.langauges_known.forEach((element) => 
         {
            console.log(`${element +" I Can Speak & Write"}`)
         });

//   USING FOR LOOP IN ARRAY
        
        let arr = [
            {
              name: "Sam",
              age: "23",
            },
            {
              name: "Priya",
              age: "20",
            }, 
            {
              name: "Gokul",
              age: "40",
            },
            {
              name:"Atchay",
              age:"34"  }
          ]
          // USING FOR LOOP
          for (let i = 0; i <arr.length; i++) 
          {
            console.log(arr[i].name,":",arr[i].age);
          }
          // USING FOR IN LOOP
          for (let i in arr)
           {
            console.log(arr[i].name);
           }
          
           // USING FOR OF LOOP
           for(let i of arr)
           {
                console.log(`arr value : ${i.value}`);
           }
          
           // USING FOR EACH LOOP
                arr.forEach((value, index, actualArray) => {
                console.log(`
                         value      : ${value}
                         Index      : ${index}
                         actualArray: ${actualArray}
                `);
             });
            


         // Q2) Create Your Own Resume Data in JSON Format

         const Resume = {
            "Name"         : "Atchay",
            "Age"          : "25",
            "Gender"       : "Male ",
            "Email ID"     : "Atchay07@gmail.com",
            "Qualification": ["B.E.(Mechanical Engineering)"],
            "Experience"   : ["Internship in Tata Motors", "7years work in Qatar"],
          "langauges_known": ["Tamil", "English", "Telegu"],
          };
            console.log ("My Resume",Resume);


// Q3) Difference between window screen and document in javascript?

// Window is a global object,and dom is inside of window(bom),and screen is about the users display.

// Example:
//         Window.document
//         window.screen

      
  