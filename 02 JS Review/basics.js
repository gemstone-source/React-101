// Names
let firstName = "java";
let secondName = "script";
let fullName = `${firstName} ${secondName}`;

// print names result
console.log(fullName);
console.log(fullName.length);

//Upper and lower results
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

//Email
let email = "javascript@java.co.tz";

//Indexof method
result = email.indexOf("@");
console.log(result);

//slice method
//start,end(excluded)
result = email.slice(0, 10);
console.log(result);

//replace
let rp = email.replace("java", "ghost");
console.log(rp);

//templates
result = `My name is ${firstName} ${secondName} and my email is ${email}`;
console.log(result);

//Array
// Join
let languages = ["java", "python", "c++"];
result = languages.join(" ");
console.log(result);

//concat
result = languages.concat(["c#", "go"]);
console.log(result);
