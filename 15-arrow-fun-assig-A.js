console.log("=============1.with no orgs and no return value==============");

let arrow = () =>{
    console.log("Good Morning,Today is Monday");
}
arrow();

console.log(` `);
console.log("=============2.with 3 orgs and no return value==============");
let multiplication = (n1,n2,n3=1) =>{
   let mul=n1*n2*n3;
   console.log(`Multiplication of given numbers is:${mul}`);

}
multiplication(5,5,2);
multiplication(10,4);

console.log(` `);
console.log("=============3.with 3 orgs and return value==============");
const addition = (p1,p2,p3,p4,p5) =>{
 return p1+p2+p3+p4+p5;
 
}
var add1=addition(100,100,200,349,756);
console.log(`Addition of given values is: ${add1}`);

add2=addition(" I am"," learning"," ES6"," features"," in depth")
console.log(`Addition of given values is:${add2}`);






