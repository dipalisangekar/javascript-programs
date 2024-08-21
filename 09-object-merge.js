
const emp = {
    firstName:"Jenny",
    lastName:"Gates",
    age: 35
}

emp.age= 45;
console.log(emp);
 
Object.freeze(emp);
 
emp.firstName="Elon";
console.log(emp);

console.log("=============Object cloning or merging=============");
 const student = {
    firstname : "Jenny",
    lastname : "Gates",
    age : 56
 }
 const clonedStudent = Object.assign({},student);
 console.log(clonedStudent);

 const clonedObj = {...student};
 console.log(clonedObj);

 console.log("=============Object merging=============");

 const std = {
    firstname : "Jenny",
    lastname : "Gates",
    age : 56
 }
 const address = {
    city : "LA",
    pin : 411057
 }
 const mergedObject = Object.assign({},std,address);
 console.log(mergedObject);
 const mergeObj = {...std, ...address};
 console.log(mergeObj);
 
 
 