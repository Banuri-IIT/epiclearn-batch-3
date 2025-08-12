import {add} from 'mathjs';
//console.log("Im the second javascript file in here",user_mail)

//primitive data types
let userId = 12345678; //number
console.log("User ID:", userId);
console.log("Type of User ID:", typeof userId);

let userEmail = "Vinuja@iit.ac.lk"; //string
console.log(" Value of User Email:", userEmail);
console.log("Type of User Email:", typeof userEmail);

let isAuthenticated =true; //boolean
console.log("Is User Authenticated:", isAuthenticated);
console.log("Type of Is User Authenticated:", typeof isAuthenticated);

let phoneNumber = null; //null
console.log("Phone Number:", phoneNumber);
console.log("Type of Phone Number:", typeof phoneNumber);

let DOB ; //undefined
console.log("Date of Birth:", DOB);
console.log("Type of Date of Birth:", typeof DOB);

let uniqId = Symbol("uniqueId"); //symbol
console.log("Unique ID:", uniqId);
console.log("Type of Unique ID:", typeof uniqId);

//Object data type
//object
let person = {name:"sarath",age:29}
console.log("Person Object:", person);
console.log("Type of Person Object:", typeof person);

let myArray = [1, 2, 3, 4, 5]; //array
console.log("My Array:", myArray);
console.log("Type of My Array:", typeof myArray);

function greet(name) {
    return(`Hello, ${name}!`);//template literal "Hello, " + name + "!"
} //function
console.log("Greet Function:", greet("Vinuja"));
console.log("Type of Greet Function:", typeof greet);

const greetArrow = (name) => `Hello, ${name}!`; //arrow function
console.log("Greet Arrow Function:", greetArrow("Vinuja"));

//Destructuring
let user = {
    name: "Vinuja",
    age: 25,
}
let { name, age } = user; //object destructuring
console.log("Destructured Name:", name);
console.log("Destructured Age:",age);

let user1 = {
    name1: "Vinuja",
    age1: 25,
}
//let { name1, age1 } = user; //object destructuring
console.log("Destructured Name:", user1.name1);
console.log("Destructured Age:",user1.age1);

let usera = {
    name: "Vinuja",
    age: 25,
    address: {
        city: "Colombo",
        country: "Sri Lanka"
    }
}
console.log("Destructured City:", usera.address.city);

const myArray1 = [1, 2, 3, 4, 5];
//const myArray2 = [...myArray1, 6, 7, 8]; //array destructuring
//console.log("Destructured Array:", myArray2);

myArray1.push(6);
myArray1.push(7);
myArray1.pop(1); 

//Import and Export
