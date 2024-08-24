
 console.log("=============================");

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
