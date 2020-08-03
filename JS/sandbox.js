//function declaration
// function greet() {
//     console.log('hello there');
// }
// greet();
//function expression - storing a function within a variable

// const speak = function(name = 'luigi', time = 'night') {
//     console.log(`good day ${time} ${name}`);
// };

// speak('mario', 'morning');
// speak('parker', 'afternoon');
// speak('claire', 'evening');
// speak();
// speak('ted');

// const calcArea = function(radius) {
//     let area = 3.14 * radius**2;
//     return (area);
// }
// const calcArea = function(radius) {
//     return 3.14 * radius**2;
//     //return (area);
// };

//aarow funciton
// const calcArea = (radius) => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('the area is: ',area);

// const greet = function() {
//     return 'hello, there'
// }

// const greet = () => 'hello there';

// const result = greet();
// console.log(result);

// const bill = function (products, tax) {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30],.2))

// const bill = (products,tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30],0.2));
//------------------------------------------//
// const name = 'parker'

// //functions
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

// //methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//callbacks and foreach
// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// // myFunc(function(value){
// //     console.log(value)
// // });
// myFunc(value => {
//     console.log(value)
// });

// let people = ['mario','luigi','parker','claire','ted'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// // people.forEach((person,index) => {
// //     console.log(index, person);
// // });
// people.forEach(logPerson);

const ul = document.querySelector('.people');

const people = ['mario','luigi','parker','claire','ted'];

let html = ``;

people.forEach((person) => {
    //create html template
    html += `<li style="color:purple">${person}</li>`
});
console.log(html);
ul.innerHTML = html;