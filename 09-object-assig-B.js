
let sbiBank={
    bankName:"SBI Bank",
    location:"Jay Nagar",
    accountNo: 180012345678,
    ifsc:"SBIN1122",
    interestRate:10.30,
    bankDetails: function(){
        
        console.log("===================SBI Bank Details=====================");
        
        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
    }
}
sbiBank.bankDetails();

let axisBank={
    bankName:"AXIS Bank",
    location:"Shivaji Nagar",
    accountNo: 180012378090,
    ifsc:"AXIS1001",
    interestRate:9.50,
    bankDetails: function(){
        
        console.log("===================AXIS Bank Details=====================");
        
        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
    }
}
axisBank.bankDetails();

let hdfcBank={
    bankName:"HDFC Bank",
    location:"Wakad Chowk",
    accountNo: 180012987623,
    ifsc:"HDFC1020",
    interestRate:9.8,
    bankDetails: function(){
        
        console.log("===================HDFC Bank Details=====================");
        
        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
    }
}
hdfcBank.bankDetails();

let yesBank={
    bankName:"YES Bank",
    location:"Hinjewadi Chowk",
    accountNo: 180012001234,
    ifsc:"YES2345",
    interestRate:11.5,
    bankDetails: function(){
        
        console.log("===================YES Bank Details=====================");
        
        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
    }
}
yesBank.bankDetails();

