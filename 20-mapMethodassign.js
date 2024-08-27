
 
 console.log("=============1.Add 10 into each element=============");
 const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19];
 console.log(`Given array is:${arrayNumbers} `);
 newArray= arrayNumbers.map((element)=>{
 return element + 10;
 });
 console.log(`New array After adding 10 into each element:${newArray}`);
 
 console.log("=============2.Cube each element=============");
 console.log(`Given array is:${arrayNumbers} `);
 newArray= arrayNumbers.map((element)=>{
 return element * element * element;
 });
 console.log(`Cube of each element:${newArray}`);
 
 console.log("=============3.Add index value into corresponding element=============");
 console.log(`Given array is:${arrayNumbers} `);
 newArray= arrayNumbers.map((value,index)=>{
 return value + index;
 });
 console.log(`After adding index into corresponding element:${newArray}`);
 