const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }
  console.log("Your Scores: ", scores[i]);
}

const grade = "D";

switch (grade) {
  case "A":
    console.log("You got A from Switch");
    break;
  case "B":
    console.log("You got B from Switch");
    break;
  case "C":
    console.log("You got C from Switch");
    break;
  case "D":
    console.log("You got D from Switch");
    break;
  case "E":
    console.log("You got E from Switch");
    break;
  default:
    console.log("You have failed from Switch");
}

if (grade === "A") {
  console.log("You got A from IF");
} else if (grade === "B") {
  console.log("You got B from IF");
} else if (grade === "C") {
  console.log("You got C from IF");
} else if (grade === "D") {
  console.log("You got D from IF");
} else if (grade === "E") {
  console.log("You got E from IF");
} else {
  console.log("You have failed from IF");
}

let age = 30;

if (age == 40) {
  const age = 40;
  const name = "Gemstone";
  console.log("Am age from inside and I am: ", age, name);
}
console.log("Outside age: ", age);
