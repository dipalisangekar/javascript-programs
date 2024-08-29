console.log("===============Palindrome====================");
function isPalindrome(str) {
 
console.log(`Given string is:${str}`);
 
const reverseStr = str.split("").reverse().join("");
if(str==reverseStr){
    console.log(`Given string is palindrome`);
    }
    else{
        console.log(`Given string is not palindrome`);
   }
}
isPalindrome("madam");
isPalindrome("dad");
isPalindrome("hello");

// function isPalindrome(str) {

//     console.log(`Given string is:${str}`);
    
//     let strngSplit = str.split("").reverse().join("");

//     console.log(str == strngSplit?true:false);
    

    
// }

// isPalindrome("madam");

// isPalindrome("dad");

// isPalindrome("hello");

console.log("============Anagram=============");

function isAnagram(n1,n2){
    console.log(`Given string is:${n1},${n2}`);
    
    const str1 = n1.toLowerCase().split("").sort().join("");
    const str2 = n2.toLowerCase().split("").sort().join("");
    // console.log(str1==str2?true:false);
    if (str1==str2) {
        console.log(`Given string is Anagram`);
    } else {
        console.log(`Given string is not Anagram`);
    }
}
isAnagram("Silent","Listen");
isAnagram("Hello","World");
isAnagram("Such","Much");


