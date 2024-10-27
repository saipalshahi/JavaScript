// Important 

// array(map, filter, reduce)

const arr = [10,20,40, 100, 499];
// console.log(arr);
// arr.push("last")  // add element in last 
// console.log(arr);
// arr.unshift("first")  // add element in first
// console.log(arr);
// console.log(arr.length);  // to find length of array
// console.log(arr[0]);

// for (let i = 0; i < arr.length; i++){
//     const element = arr[i]
//     console.log(element);
    
// }



// MAP    ==>  give modify array 
const newArray = arr.map(function(element){
    console.log(element);
    return element * 2;
})
console.log(newArray);


// real life example of map 

const product = [
    {
        price: 1000,
        name: "Iphone"
    },
    {
        price: 800,
        name: "Oneplus"
    },
    {
        price: 900,
        name: "Samsung"
    }
]

product.map((element)=>{
    console.log( element.name, element.price);
    
})


//Filter =>

const arr1 = [10,20,30,40,50];

const result = arr1.filter((element)=>{
    return element >= 30;
    
})
console.log(result);



// REDUCE

const ans = arr1.reduce((accumulator, element) =>{
    return accumulator + element;
},0)   // accumulator = 0, 0+10, 10+20, 300+30, 60+40, 100+50 
console.log(ans);
