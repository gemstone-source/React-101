//Template Literals
let word1 = "java";
let word2 = "script";

const fullName = `${word1} ${word2}`;
console.log(fullName);

const personInformation = {
  firstName: "John",
  lastName: "Doe",
  city: "DSM",
  tribe: "Chagga",
  religion: "Christian",
};

// re assign new names on long variables
const {firstName,lastName}= personInformation
console.log(`${firstName} ${lastName}`)

const {firstName:fn, lastName:ln} = personInformation
console.log(`${fn} ${ln}`)