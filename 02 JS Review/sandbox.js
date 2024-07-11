const para = document.querySelector("p");

console.log(para.innerText);
// const val = (para.innerText = "Hello Gemstone");
// console.log(val);

const param = document.querySelectorAll("p");
// console.log(paras);

param.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " new text";
});

const content = document.querySelector(".content");

const people = ["john", "doe", "jane"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
//get elements by ID
const title = document.getElementById("page-title");
console.log(title);

//get elements by class
const error = document.getElementsByClassName("error");
console.log(error);

// get element by tag name
const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[1]);
