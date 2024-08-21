
function Bank (bankName,location,ifscCode,branchCode){
     this.bankName=bankName;
     this.location=location;
     this.ifscCode=ifscCode;
     this.branchCode=branchCode;
}
console.log("========================Function Constructor=========================");

let yesBank = new Bank("YES Bank","Jay Nagar","YES0001","12345");
console.log(`Bank Details is :${yesBank.bankName},${yesBank.location},${yesBank.ifscCode},${yesBank.branchCode}`);

let sbiBank = new Bank("SBI Bank","Wakad","SBIN0002","56789");
console.log(`Bank Details is :${sbiBank.bankName},${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);

let mahBank = new Bank("MAH Bank","Shivaji Chowk","MAH0003","12378");
console.log(`Bank Details is :${mahBank.bankName},${mahBank.location},${mahBank.ifscCode},${mahBank.branchCode}`);

let axisBank = new Bank("Axis Bank","Hijewadi","AXIS0004","12987");
console.log(`Bank Details is :${axisBank.bankName},${axisBank.location},${axisBank.ifscCode},${axisBank.branchCode}`);

console.log("==================Add data member on prototype object===================");

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";

console.log("==================Open Time and Close Time of SBI Bank==================");

console.log(`SBI Bank Open Time:${sbiBank.openTime}, Close Time:${sbiBank.closeTime}`);

console.log("=============Bank Name and Close Time of Axis Bank======================");

console.log(`Bank Name:${axisBank.bankName},Close Time : ${axisBank.closeTime}`);

console.log("================Bank Name,Open Time and Branch Code of Yes Bank=================");

console.log(`Bank Name:${yesBank.bankName},Open Time :${yesBank.openTime},Branch Code:${yesBank.branchCode}`);
