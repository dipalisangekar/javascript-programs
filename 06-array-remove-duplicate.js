console.log(`=========1. Remove Duplicate Number From Array===================`);
const arrayNum = [11, 3, 4, 11, 4, 7, 3];
console.log(`The Given Array => ${arrayNum}`);
const updatedArray = [];

for (let i = 0; i < arrayNum.length; i++) {
  if (updatedArray.indexOf(arrayNum[i]) === -1) {  //indexof() method return -1 when that num is not available in array 
    updatedArray.push(arrayNum[i]);                
  }
}
console.log(`After Removing dublicate element`,updatedArray);


console.log("=====================Assignment 2 =========================");

const str = "How are you mate";
function alternativeCase(str) {
    let newString = [];
    for (let i= 0; i < str.length; i++) {
        if (i%2==0) {
            newString[i]=str[i].toUpperCase();
          }
        else{
            newString[i]= str[i].toLowerCase();
        }
    }
    return newString.join("");
}
let result=alternativeCase("How are you mate");
console.log(result);


