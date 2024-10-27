// a technique that allows you to unpack values from arrays or objects into separate variables

//  we can destructuring in object and array

const arr = [1, 2, 3, 4, 5];

console.log(arr[1]);
console.log(arr[2]);

const [a, b, c, d, e] = arr;
console.log(e);

// object destructuring
const person = {
  name: "saipal",
  age: 24,
  gender: "male",
  address: "nepalgunj",
};

// access value
// there are 3 types to access value

// i. dot notation
console.log(person.gender);

// 2. bracket notation
console.log(person["gender"]);

// 3. destructuring
const { gender, name, address } = person;
console.log(gender);
console.log(age);
console.log(address);
