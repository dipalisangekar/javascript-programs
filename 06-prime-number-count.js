console.log("==================WAP to find prime number count===================");

const array=[3,9,7,6,19,29,53];
function isPrime(num){
    for (let index = 2; index < num; index++) {
               if (num%index==0) {
                return false;
            }
        }
return true;
}
var result = isPrime(3);
console.log(`Is number 3 prime-${result}`);
var result = isPrime(9);
console.log(`Is number 9 prime-${result}`);
var result = isPrime(7);
console.log(`Is number 7 prime-${result}`);
var result = isPrime(6);
console.log(`Is number 6 prime-${result}`);
var result = isPrime(19);
console.log(`Is number 19 prime-${result}`);
var result = isPrime(29);
console.log(`Is number 29 prime-${result}`);
var result = isPrime(53);
console.log(`Is number 53 prime-${result}`);
  
let count=0;
for (const num of array) {
    var result = isPrime(num);
    if (result==true) {
        count++;
    }
}
console.log(`Total Prime number is:${count}`);

console.log("=================Wap to count spaces in the string=====================");

function spaceCount(str) {
    var count1 = 0;
    console.log(`Given string is :${str}`);
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
       if (char == " ") {
            count1++;
       }
    }
    return count1;
}
var result1=spaceCount("Revision is the mother of success");
console.log(`Total space count of string:${result1}`);

var result2=spaceCount("JavaScript is the language of internet world");
console.log(`Total space count of string:${result2}`);