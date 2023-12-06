// import { apiKsy } from "./utils.js";
// import apiKsy from "./utils.js";

// import * as utils from "./utils.js";
// console.log(utils.default);
// import { apiKey as key, abc as content } from "./utils.js";
// console.log(key, content);
// function syaHi() {
//   alert("Hello");
// }

// alert(syaHi); // will show the function code, not run it

// function createGreeting(username, message = "Hello") {
//   return `Hi, I am ${username}. ${username}`;
// }

// const greeting1 = createGreeting("Max");
// const greeting2 = createGreeting("Manu", "What's up?");
// console.log(greeting1, greeting2);

// export default (username, message = "Hello") => {
//   console.log("hello");
//   return username + message;
// };

// // literally create object
// const user = {
//   name: "Max",
//   age: 30,
//   greet() {
//     console.log(`Hi, I am ${this.name}, ${this.age} years old`);
//   },
// };

// user.greet();

// // use Class to create object
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name}, ${this.age} years old`);
//   }
// }

// const newUser1 = new User("LiLi", 27);
// console.log(newUser1);
// newUser1.greet();

// why hobbies is const but can be changed? because array is an object, reference type, the pointer is const, but the content is not
const hobbies = ["Sports", "Cooking", "Coding"];
// hobbies = [] // will throw error, hobbies is const
hobbies.push("Reading");
hobbies.pop();
// const index = hobbies.findIndex((hobby) => {
//   return hobby === "Coding";
// });
const index = hobbies.findIndex((hobby) => hobby === "Coding"); // findIndex() return the index of the item that matches the condition
console.log(index);

// // map() allow you to transform every item in an array to any another item, and return that new array
// const editedHobbies = hobbies.map((hobby) => hobby + "!");
// console.log(editedHobbies);

// const editedHobbies = hobbies.map((hobby, index) => {
//   return {
//     text: hobby,
//     number: index,
//   };
// });

// console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Schwarz"];
// console.log(firstName, lastName);

// const { name: userName, age } = { name: "Max", age: 30 };
// console.log(userName, age);

const newHobbies = ["Reading", "Sleeping"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

// const user = { name: "Max", age: 30 };
// const extendedUser = { isAdmin: true, ...user };
// console.log(extendedUser);

// const password = prompt("Your password: ");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Password is wrong");
// }

// for (const hobby of mergedHobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out2!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timeout...");
// }, 4000);

// function greet(greetFn) {
//   greetFn();
// }

// greet(() => {
//   console.log("Hi here");
// });

function init() {
  function greet() {
    console.log("Hi");
  }

  greet();
}

init();

let userMessage = "Hello";
userMessage = userMessage.concat("!!!");
