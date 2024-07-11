//function declaration
function great() {
  console.log("Hello There");
}

//function expression
const speak = function (name = "javascript", time = "night") {
  // console.log(`My name is ${name}`);
  console.log(`Good ${time} ${name}`);
};

//Calling function
great();
speak();
// speak("javascript");
