
let professor = {
    firstName : "Dipali",
    lastName : "Sangekar",
    age : 33,
    city : "Solapur",
    State : "Maharastra",
    degrees:{
        engineering :"CSC",
        PHD: "Adv Computing",
        diploma:"CSC"
     },
     certificates:["Hacker rank Participation","Certificate in IFE Course","Certificate in Adv Programming"]
}
console.log("=================Log object on console=====================");
console.log(JSON.stringify(professor));

console.log("=================Add total experience=====================");

professor.totalExperience= "14 Years";
console.log(`Total Experince:${professor.totalExperience}`);

console.log("=================Modify any existing property=====================");
 
professor.city="Pune";
console.log(`Updated city is :${professor.city}`);
 
console.log("=================Add new certificate on 2nd index of array =====================");
  professor.certificates.splice(2,0,"Oracle Certified");
  console.log(`Updated certificate is : ${professor.certificates}`);
  

console.log("=================Last element of array certificates=====================");
professor.certificates[3];
console.log(`Last element of certificates is :${professor.certificates[3]}`);

console.log("=================Traverse Array=====================");
for (let index = 0; index < professor.certificates.length; index++) {
    const element = professor.certificates[index];
    console.log(element);
    
    
}
console.log("=================Complete Object=====================");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}:${element}`);
    }
}
