console.log("==================1 Greater Number===================");

function greatNumber(n1, n2){
      var result = n1>=n2 ? n1: n2;
      console.log(`Given numbers are ${n1},${n2} and greater is:${result}`);
}
greatNumber(10, -10);
greatNumber(800, 899);

console.log("==================2 Even or Odd Number===============");

function isEvenOrOddNum(num){
    var result = num % 2 == 0 ? true: false;
    return result;
}
var result = isEvenOrOddNum(29);
console.log(`2.1 Is number 29 even :${result}`);

var result =isEvenOrOddNum(44);
console.log(`2.2 Is number 44 even :${result}`);

var result =isEvenOrOddNum(0);
console.log(`2.3 Is number 0 even :${result}`);

var result =isEvenOrOddNum(101);
console.log(`2.4 Is number 101 even :${result}`);
console.log("==================3 Even or Odd Length==============");

 function wordLength(word){
    var wordlength = word.length;
    var result = wordlength % 2 == 0 ? "Even": "Odd";
    return result;
} 
 var result=wordLength("JavaScript");
 console.log(`3.1 The given word"JavaScript" has :${result} length`);
 
 var result=wordLength("developer");
 console.log(`3.2 The given word"developer" has :${result} length`);
 
 var result=wordLength("Google");
 console.log(`3.3 The given word"Google" has :${result} length`);
 
