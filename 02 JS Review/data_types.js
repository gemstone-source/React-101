//function declaration
function great() {
  console.log("Hello There");
}

//function expression
const speak = function (name = "javascript", time = "night") {
  console.log(`Good ${time} ${name}`);
};

// regular function
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// }

// arrow function
const calcArea = (radius) => {
  return 3.14 * radius ** 2;
};

// regular function
// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// arrow function
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

// callback and foreach
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

myFunc((value) => {
  console.log(value);
});

let people = ["john", "doe", "jane", "happy", "miles", "morales"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

// Calling function
great();
speak();
// speak("javascript");
const area = calcArea(5);
console.log("Area is: ", area);
console.log(bill([10, 15, 30], 0.2));
