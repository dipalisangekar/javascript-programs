console.log("================Vote Eligibility=================");

var voteEligibility = function (age) {
    if (age==0||age<=0||age>=130||age==null) {
        console.log(`Your age is ${age} and It is Invalid Data`);
        
    } else {
        if (age>=18) {
            
            console.log(`Your age is ${age} and You are eligible for vote`);
            
        } else {
            console.log(`Your age is ${age} and You are not eligible for vote`);
            
        }
        
    }
    
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);