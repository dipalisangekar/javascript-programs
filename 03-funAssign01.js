
console.log("====================Function with no arguments and no return value===================");
function show(){
console.log("Good Morning.........");
console.log("I am learning JavaScript");
}
show();

console.log("====================Function with arguments and no return value===================");
  
 function personalDetails(firstName, lastName, collageName){
      
      console.log("Inside a function");
      console.log("My first name is:",firstName);
      console.log("My last name is:",lastName);
      console.log("My collage name is:",collageName);
 }
   personalDetails("Dipali","Sangekar","BMIT");

console.log("====================Function with arguments and no return value===================");
  
function addThreeValues(n1,n2,n3){
    console.log("Given arguments are",n1,n2,n3);
    var result = n1 + n2 + n3;
    console.log("Addition of given arguments are:",result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello","Good","Morning");