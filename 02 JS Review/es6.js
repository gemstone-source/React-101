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
const { firstName, lastName } = personInformation;
console.log(`${firstName} ${lastName}`);

const { firstName: fn, lastName: ln } = personInformation;
console.log(`${fn} ${ln}`);

// Destructuring Array
let [newFirstName, newLastName] = ["John", "Doe", "Jane"];
console.log(newFirstName, newLastName);

newFirstName = "Julius";
console.log(newFirstName, newLastName);

//Object Literals
function addressMaker(address) {
  //destructure
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    // city: address.city,
    // state: address.state
    country: "Tanzania",
  };
  console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}
addressMaker({ city: "Arusha", state: "chugga" });


//for loop
const fullString = "Coding is very nice and good"

for(const char of fullString){
    console.log(char)
}

//spread Operator
let example1= [1,2,3,4,5,6]
let example2 = [...example1]
console.log(example2)

//
//rest operator
function add(...nums){
console.log(nums)
}

add(1,2,3,4,5,6,7,8,9)