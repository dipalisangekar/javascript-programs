
console.log("==========1.Reverse the array===============");

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given array is :${arrayRollNumbers}`);
arrayRollNumbers.reverse();
console.log(`Reverse of given array is:${arrayRollNumbers}`);


console.log("==========2.Sort the array===============");
arrayRollNumbers.sort();
console.log(`Sorted new array is:${arrayRollNumbers}`);

console.log("==========3.Sorting in ascending order by custom logic===============");
const arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];
array = arrayRollNumber.sort((n1,n2)=>{
   return n1> n2 ? 1 :-1;
});
console.log(`New array in ascending ordert is:${array}`)
console.log("==========4.Greatest number from array===============");
newArray=array[array.length-1];
console.log(`Greatest number from array is:${newArray}`);

console.log("==========5.Smallest number from array===============");
newArray = array[0];
console.log(`Smallest number from array is :${newArray}`);

console.log("==========6.Remove duplicate number from array===============");
const arrayRollNumber1 = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given array is :${arrayRollNumber1}`);
let updatedArray =[];
 
for (let index = 0; index < arrayRollNumber1.length; index++) {
    let element= arrayRollNumber1[index];
    if (updatedArray.indexOf(element)==-1) {
        updatedArray.push(element);
    }
}
console.log(`Updated array is:${updatedArray}`);

