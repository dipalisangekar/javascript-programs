
console.log("===================Function expression using if else==================================");

var marks = function(gradScore,hscScore,sssScore,candidateName){
    if (gradScore>=70||hscScore>=80||sssScore>=90) {
        console.log(`congratulation ${candidateName} You are eligible for TCS interview `);
    } else {
        console.log(`Unfortunately.... ${candidateName} You are not eligible for TCS interview `);
    }


}
marks(80,86,90,"Dipali");
marks(70,65,55,"Pooja");
marks(60,79,88,"Ashwini");