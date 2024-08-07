console.log("=================Square of word length=====================");

function squareOfWordLength(sentence){
// console.log(`Given sentence is:${sentence}`);
var length = sentence.length;
var square = length * length;
return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`1.3.1 Given word is "JavaScript" and its Square of length is:${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`1.3.2 Given word is "Google" and its Square of length is:${result}`);

var result =squareOfWordLength("Web Developer Smart");
console.log(`1.3.3 Given word is "Developer" and its Square of length is:${result}`);

console.log("===========Length divided by total number of words in given string============");
function stringLength(){
    var string="I am Angular Developer";
    console.log(`2.Given string is : ${string}`);
    var strLength= string.length;
     
    var str=string.split(" ");
    var wordLength= str.length;
    
    var division = strLength/wordLength;
    console.log(`2.1.Division of length and total number of words in given string is:${division}`);
     
    var multification = strLength * wordLength;
    console.log(`2.2.Multification of length and total number of words in given string is:${multification}`);


    




}
stringLength();

