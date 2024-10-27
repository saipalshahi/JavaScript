// funciton declaration
// function sum(num1, num2) {
//   console.log(num1 + num2); //print
// }

// sum(548, 7834); // call

// function expression => it is a way to create a function and assign it to a variable.

// const sumOfTwoNumbers = function  (num1, num2) {  // a function without name is called anynomous function.
//     console.log(num1 + num2); //print
//   }
// sumOfTwoNumbers(3,5)

// callback function => callback function is depend on another function

// const doSomething = function(message){
//     console.log("samosa bandai xa");

//     setTimeout(function(){
//         message();
//     }, 3000)
// }

// const message = function(){
//     console.log("samosa ready xa"); // give output when samosa is ready

// }

// doSomething(message);

// //-----------------------------------------------

// const khanapakaudai = function(callback){
//     console.log("khana pakdai");

//     setTimeout(function(){
//         callback();
//     },5000)
// }

// const callback = function (){
//     console.log("khana ready xa");   /// when khana is ready

// }
// khanapakaudai(callback)

// //---------------------------------------------------------------

// const OrderHudai = function (OrderHudai){
//     console.log("Order Hudai");
//     setTimeout(function(){
//         orderAayo();
//     },5000)
// }

// const orderAayo = function(){
//     console.log("Order Aayo");

// }
// OrderHudai(orderAayo);





//----------------------------------------------






// Higher order functions

const radius = [1, 2, 3, 4, 5, 547,57,54]; // given radius (qn)

const area = function (rediusArray) {
  // create function & calculate area
  const result = []; // create array to generate output
  for (
    let i = 0;
    i < rediusArray.length;
    i++ // use for loop to find all element redius
  ) {
    const a = Math.PI * rediusArray[i] * rediusArray[i];   // formula
    result.push(a);
  }
  return result;
};

const ans = area(radius); // call
console.log(ans);



// const circumference = function (circumferenceArray){
//     const result = []
//     for(let i = 0; i < circumferenceArray.length; i++){
//         const c = 2 * Math.PI * circumferenceArray[i]
//         result.push(c)
//     }
//     return result
// }
// const ans2 = circumference(radius)
// console.log(ans2);



// why higher-order function is better 

// const formulaOfArea = function(r){
//   return Math.PI * r * r;
// }

// const formulaOfCircumference = function(r){
//   return Math.PI * 2 * r;
// }

// const calculate = function (radiusArray, formula){
//   const result = []
//   for (let i =0; i < radiusArray.length; i++ ){
//     const a = formula(radiusArray[i]);
//     result.push(a)
//   }
//   return result;
// }
// const ans3 = calculate(radius, formulaOfArea,)   // calculate is higher order function 
// console.log(ans3);
// const ans4 = calculate(radius, formulaOfCircumference,)   
// console.log(ans4);




// const formulaOfArea = function (r){
//   return Math.PI * r * r;
// }

// const formulaOfCircumference = function(r){
//   return Math.PI * 2 * r
// }

// const calculate = function (radiusArray, formula){
//   const result = []
//   for(let i = 0; i < radiusArray.length; i++){
//     const a = formula(radiusArray[i])
//     result.push(a)
//   }
//   return result;
// }


// const ans7 = calculate(radius, formulaOfArea)
// console.log(ans7);
// const ans8 = calculate(radius, formulaOfCircumference)
// console.log(ans8);






// arrow function  

const multiply =  (num1, num2) => {
  return num1 * num2
}
console.log(multiply (2,5));

// or

const devision = (num3, num4) => num3 / num4;
console.log(devision (10,5));



