
console.log("==========1.WAP to find length of string and total characters of the string ============");

function lengthOfString(str){
    var string = str.length;
    console.log(`Given string is:${str} and The length of given string is :${string}`);
}
lengthOfString("Hello,World!");
lengthOfString("JavaScript is the language of internet");

console.log("================2.WAP to print or log last character of given string====================");

 function lastChar(str){
    var char = str.charAt(str.length-1);
    console.log(`Given string is:${str} and Last character of given string is :${char}`);
 }
 lastChar("Hey, my friend,programming language");
 lastChar("I am learning logical programs");
 lastChar("Angular");

console.log("===================3.WAP to print or log first character of given string======================");

function firstChar(str){
    var char = str.charAt(0);
    console.log(`Given string is:${str} and First character of given string is :${char}`);
}
firstChar("React");
firstChar("Elon Musk");
firstChar("Apple founder is Stew Job");

console.log("=================4.WAP to check weather given string contains 'UI' or not======================");

function containsUI(str){
    var char = str.includes("UI");
    console.log(`Given string is:${str} and Contains UI:${char}`);
}
containsUI("React-UI Developer");
containsUI("UI Developer");
containsUI("Front end and Back end technologies");

console.log("=================5.WAP to How do you split a string into an array of substring======================");

function splitString(string){
    let strSplit = string.split(",");
    console.log('Given string is :',string,  'and Array of substring is:', strSplit);
}
splitString("apple,orange,banana");
splitString("Stew,Bill,Jenny,Elon");

console.log("=================6. a.WAP to Reverse the string using existing methods ======================");

function reverseString(string){
   var result = string.split("").reverse().join("");
   console.log(`Given string is :${string},  Reverse string is :${result}`);
}
reverseString("Software");
reverseString("UI Developer");

console.log("=================6.b.WAP to Reverse the string using predefined methods ======================");

function reverseString1(str){
    var result = "";
    for (let index =str.length-1; index>=0; index--) {
        const char = str.charAt(index);
        result = result + char;
    }
    console.log(`Given string is:${str},  Reverse string is :${result}`);
    
}
reverseString1("Web Developer");
reverseString1("Bilion Doller");
reverseString1("Java");

console.log("=================7.WAP to Count character a ======================");

function charCount(str){
          let count=0;
          for (let index = 0; index < str.length; index++) {
            var char = str.charAt(index);
            if(char=='a'){
                count++;
            }
        }
        console.log(`Given string is :${str}, Count of character a is:${count}`);
}
charCount("JavaScript");
charCount("Do or Die");
charCount("Learn with us,Job with us");
charCount("Empowering Dreams,Guaranteeing Futures");
charCount("Anny,My favorite fruit is Apple");

console.log("=================8.WAP to Count vowels ======================");
 function vowelCount(sentence){
    let vowels = "aeiou";
    var count = 0;
  for (let index = 0; index < sentence.length; index++) {
     var char = sentence.charAt(index).toLowerCase();
          if (vowels.includes(char)) {
            count++;
        }
    }
console.log(`Given string is :${sentence}, Vowel count is :${count} `);
}
vowelCount("JavaScript");
vowelCount("HTML and CSS");
vowelCount("Language of internet");
vowelCount("I an UI Developer");
vowelCount("DO or Die");


console.log("=================9.WAP to Count words ======================");

 function wordCount(sentence){
    var word= sentence.split(' ');
    var length = word.length;
    console.log(`Given sentence is:${sentence}, Word Count is:${length}`);
 }
 wordCount("JavaScript The language of internet");
 wordCount("Enhance Your Learning Journey with Exclusive Add-ons");
 wordCount("Beyound Frameworks, Beyound Imagination");
 wordCount("I am Passionate Software Developer");
 