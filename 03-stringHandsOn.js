
console.log("=========================================");

function stringHandsOn(){
    var sentence = "   Hey you are doing good, keep it up   ";
     
    console.log(`1.Given string is:${sentence} `);
   
    console.log(`2.Length of given string is:${sentence.length}`);
    
    var result = sentence.trim();
    console.log(`3.String after leading ang trailing extra spaces: ${result} and length is:${result.length}`);
    
    var spaces = sentence.length - result.length;
    console.log(`4.Total no of extra spaces is :${spaces}`);

    console.log(`5.First and last character of trimmed string are:${result.charAt(0)} & ${result.charAt(result.length-1)}`);
    
    var words=result.split(" ");
    console.log(`6.Total words available in string are:${words.length}`);
    
    console.log(`7.Index of word "good" from the given string is:${result.indexOf("good")}`);

    console.log(`8.Substring starting from index 22 is:${result.substring(22)}`);

    console.log(`9.Is string ends with word "up" is:${result.endsWith("up")}`);

    console.log(`10.Is string starts with word "Hey" is:${result.startsWith("Hey")}`);


    
    }
      stringHandsOn();
