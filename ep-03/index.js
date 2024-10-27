// spread operators     (topic )
// object/array, to much used in function
// denoted by ...
// help in convert into duplicate

// make a duplicate array
const arr = [1, 2, 3, 4];
const duplicateArr = [...arr, 4, 6, 7, "apple safbcjs"]; // returning a new array
console.log(duplicateArr);

// we can add new string, array int in duplicate on spread operators

// Qn. merge two array

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

// output: result = [1,2,3,4,5,6,7,8,10]

const result = [...num1, ...num2];

console.log(result);

// OBJECT
// QN. Merg to object
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: "Hello",
  d: "developers",
};
// output :
// res = {
//     a:1,
//     b:2,
//     c:"Hello",
//     d:"developers"
// }

const res = { ...obj1, ...obj2 };
console.log(res);





// function


function sum (...numbers){
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i];
    
  }
  return sum;
  
}
console.log(sum(2,4,6,8,5));
