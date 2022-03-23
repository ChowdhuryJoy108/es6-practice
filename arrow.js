// normal declearation of a function 

// function doubleIt(num){
//     return num * 2;
// }

// declear a  function with varriable 
// const doubleIt = function myFunc(num){
//     return num * 2;
// }

const doubleIt = num => num * 2; 
const res = doubleIt(50);
//  ES6 arrow function 
const  add = (num1, num2) => num1 + num2;
const res2 = add(10,20);
// ES6 ARROW FUNCTION MORE THAN ONE PARAMETER

const give5 = () => 5;
const res3 = give5();
// ES6 arrow function with no parameter 

const doMath = (x,y) =>{
    const sum = x + y;
    const difference = x - y;
    const res = sum * difference;
    return res;
}
const res4 = doMath(7,5);

console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);