console.log("=================Function using ternary operator=============================");

 function interviewCheck (gradScore,hscScore,sssScore,candidateName){
    var result = gradScore>=70||hscScore>=80||sssScore>=90
        ? `Congratulation ${candidateName} You are eligible for TCS interview `

        :`Unfortunately.... ${candidateName} You are not eligible for TCS interview `;
    
console.log(result);


}
interviewCheck(80,86,90,"Dipali");
interviewCheck(70,65,55,"Pooja");
interviewCheck(60,79,88,"Ashwini");