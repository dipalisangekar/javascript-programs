
console.log("==============1.First and last element of array====================");

const fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${fruits}`);
console.log(`First element of array is: ${fruits[0]} and Last element of array is: ${fruits[fruits.length-1]}`);

console.log("==============2. Add element Papaya before Banana====================");

const fruits1 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${fruits1}`);
let newFruits1=fruits1.unshift("Papaya");
console.log(`Updated list is : ${fruits1}`);

console.log("==============3.Remove Mango from array====================");

const fruits2 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${fruits2}`);
const newFruits2=fruits2.splice(3,1);
console.log(`Updated new array is : ${fruits2}`);

console.log("==============4.Add element Pineapple at the last position============");

const fruits3 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${fruits3}`);
const newFruits3 = fruits3.push("Pineapple");
console.log(`Updated new array is : ${fruits3}`);

console.log("==============5.Add element Dragon Fruit before Water Melon============");

const fruits4 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${fruits4}`);
const newFruits4=fruits4.splice(4,0,"Dragon Fruit");
console.log(`Updated new array is : ${fruits4}`);

console.log("==============6.Replace an element Orange with Kiwi ===========");

const fruits5 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${fruits5}`);
const newFruits5 = fruits5.splice(1,1,"Kiwi");
console.log(`Updated new array is : ${fruits5}`);

console.log("==============7. element starting from index 1 to 4 ===========");

const fruits6 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${fruits6}`);
const newFruits6=fruits6.slice(1,4);
console.log(`Element from index 1 to 4:${newFruits6}`);


console.log("==============8. Using Length Property console last 3 element===========");

const fruits7 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${fruits7}`);
const newFruits7 = fruits7.slice(fruits7.length-3);
console.log(`Last 3 elements are : ${newFruits7}`);
 














  

