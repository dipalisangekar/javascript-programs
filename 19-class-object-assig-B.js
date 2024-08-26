
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "IT",50000,"TCS");

const emp_radha = new Employee(33, "Radha","HR", 74000, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance",47000,"TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance",45000,"Infy");

const emp_monika = new Employee(77, "Monika","IT", 40000, "Wipro");

const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000,"TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR",85000,"Infy");

const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahi]; 

console.log(` `);
console.log("==============1.Employee working in TCS===============");
   for (const element of arrayEmployee) {
    if (element.emp_company=="TCS") {
        console.log(`Employee Name:${element.emp_name},Employee Company :${element.emp_company}`);
    }
  }

console.log(` `);
console.log("==============2.Employee working in Finance department===============");
  for (const element of arrayEmployee) {
    if(element.emp_dept=="Finance"){
        console.log(`Employee Name:${element.emp_name},Employee Department:${element.emp_dept}`);
    }
  }

console.log(` `);
console.log("==============3.Employee whose name starts with R===============");
  for (const element of arrayEmployee) {
    if (element.emp_name.startsWith('R')) {
        console.log(`Employee Id:${element.emp_id},Employee Name:${element.emp_name},Employee Dept:${element.emp_dept},Employee Salary:${element.emp_salary},Employee Company:${element.emp_company}`);
    }
  }

console.log(` `);
console.log("==============4.Employee whose salary greater than 75000===============");
  for (const element of arrayEmployee) {
    if (element.emp_salary>75000) {
        console.log(`Employee Name:${element.emp_name},Employee Salary:${element.emp_salary}`);
    }
   }

console.log(` `);
console.log("==============5.Employee whose salary >= 50000 & From IT===============");
   for (const element of arrayEmployee) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        console.log(`Employee Id:${element.emp_id},Employee Name:${element.emp_name},Employee Dept:${element.emp_dept},Employee Salary:${element.emp_salary},Employee Company:${element.emp_company}`);
    }
   }

console.log(` `);
console.log("==============6.Employee from 'Infy'===============");
     for (const element of arrayEmployee) {
        if (element.emp_company=='Infy') {
            console.log(`Employee Id:${element.emp_id},Employee Name:${element.emp_name},Employee Dept:${element.emp_dept},Employee Salary:${element.emp_salary},Employee Company:${element.emp_company}`);
        }
     }