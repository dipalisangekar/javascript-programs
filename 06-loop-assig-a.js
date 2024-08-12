
console.log("==================Count the total no of vowels==================");

 var sentence = "I am very good IT Developer";
 var vowels = "aeiou";
 var count = 0;

 for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index).toLowerCase();
      if (vowels.includes(char)) {
            count++;
   }
 }
  console.log(`Total number of vowels in given sentence is ${count}`);

console.log("==================Sum of cube of numbers from 1 to 5==================");
    sum = 0;
    for (let index = 0; index <=5; index++) {
        sum = sum + index * index * index;
    }
     console.log(`Sum of cube of numbers from 1 to 5 is:${sum}`);
    
console.log("==================Odd positioned char==================");

    function oddPositionedChars (string) {
        var result="";
        for (let index = 0; index < string.length; index++) {
            var char = string.charAt(index);
        if (index % 2 == 1 && char!=" ") {
            result = result +" "+ char;     
            }
        }
        console.log(` Given string is :${string}`);
        
        console.log(` Odd positioned char in given string are:${result}`);
    }
    oddPositionedChars("Hard work always pays back");
    
    oddPositionedChars("Soon I will be UI IT Champ");
    
        
    
