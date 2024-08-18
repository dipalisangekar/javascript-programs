
const array =[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is : ${array}`);

const newArray = array.length;
console.log(`1.Length of array is : ${newArray}`);

console.log(`2.First element of array is:${array[0]} and last element of array is :${array[array.length - 1]}`);
 
console.log(`3.Third last element of array is :${array[array.length-3]}`);

  const array2=[20,31,40,25,23,11,29,9,60,2,11];
  let result = [];
  for (let index = 0; index <= array2.length; index++) {
      const element = array2[index];
      if (element%2==0) {
          result.push(element);
     }
 }
console.log(`4. Even numbers from given array are : ${result}`);

  const array3=[20,31,40,25,23,11,29,9,60,2,11];
  let result1 = [];
  for (let index = 0; index <= array3.length; index++) {
       const element = array3[index];
       if (element%2==1) {
        result1.push(element);
     }
 }
console.log(`5.Odd numbers from given array are : ${result1}`);

  const array4=[20,31,40,25,23,11,29,9,60,2,11];
  let sum = 0;
  for (const element of array4) {
      sum = sum + element;
 }
 console.log(`8.Sum of all element is :${sum}`);

   const array6=[20,31,40,25,23,11,29,9,60,2,11];
   var add = 0;  
   for (let index = 0; index < array.length; index++) {
     if (index%2==0) {
        const element = array6[index];
        add = add + element;
    }
}
console.log(`6.Sum of Even positioned elements is :${add}`);

   const array7=[20,31,40,25,23,11,29,9,60,2,11];
   var sumOdd = 0;  
   for (let index = 0; index < array7.length; index++) {
    if (index%2==1) {
        const element = array7[index];
        sumOdd = sumOdd + element;
       }
    }
console.log(`7.Sum of odd positioned elements is :${sumOdd}`);



const array5=[20,31,40,25,23,11,29,9,60,2,11];
let result2 = [];
for (const element of array5) {
    if (element%5==0) {
        result2.push(element);
     }
}
console.log(`9.Multiple of 5 numbers are:${result2}`);

console.log(`10.Is number 115 available in given array : ${array.includes(115)}`);

console.log(`11.Is number 23  available in given array : ${array.includes(23)}`);

const arrayNum =[20,31,40,25,23,11,29,9,60,2,11];
console.log(`12.Given array is : ${arrayNum}`);
const updatedArray = arrayNum.splice(3,0,55,66);
console.log(`   After inserting number 55, 66 in array Updated array is : ${arrayNum}`);

const array1 =[20,31,40,25,23,11,29,9,60,2,11];
console.log(`13.Given array is : ${array1}`);
const updatedArray1 = array1.splice(4,3);
console.log(`   After deleting 3 elements from index 4 updated array is : ${array1} `);


    
    


