const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Given array is:${arrayNumbers}`);

console.log("==============1.Log the element and index =====================");
arrayNumbers.forEach((element,index)=>{
        console.log(`Element:${element},index:${index}`);
});

console.log("==============2.Positive numbers from array =====================");
const arrayNum =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Positive numbers from given array are:`);
arrayNum.forEach((numbers)=>{
    if (numbers>0) {
        console.log(numbers);
      }
});

console.log("==============3.Negative numbers from array =====================");
const arrayNum1 =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Negative numbers from given array are:`);
const newArray=[];
arrayNum1.forEach((number)=>{
        if (number<0) {
        newArray.push(number);
        }
});
console.log(newArray);

console.log("==============4.Even numbers from array =====================");
const arrayNum2 =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Even numbers from given array are:`);
 arrayNum2.forEach((num)=>{
    if (num%2==0) {
        console.log(num);
        }
 });

console.log("==============5.Sum of all numbers from array =====================");
 const arrayNum3 =[1,-7,40,502,-77,91,0,108,89,-601];
  let sum = 0;
  arrayNum3.forEach((value)=>{
    sum = sum + value;
 });
 console.log(`sum of all numbers from given array is: ${sum}`);

 console.log("==============6.Even indexed array value=====================");
 const arrayNum4 =[1,-7,40,502,-77,91,0,108,89,-601];
 console.log(`Even indexed value from given array are:`);
    arrayNum4.forEach((value,index)=>{
        if (index%2==0) {
                console.log(`Value:${value},Index:${index}`);
                
        }
  });






