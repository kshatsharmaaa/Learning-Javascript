
//data types in js
//number, string, boolean, undefined, null, bigint, symbol

let age = 24;
let price = 100.5;

fullName = "ashkat";

isFollow = true;

let x;

let y = null; //typeof nul == object

let z = BigInt("123");

let b = Symbol("seew!");

//object mai key : value pair store hota hai
// block ke andar collection bnate h alg alg variables ka usiko object bolte
//generally object ko const se decclare krtr h

const Student = {
  name: "Ashkan",
  rollNo: 19,
  age: 24,
  gender: "male",
};

// to access
// Object.key
// Object["key"] (

console.log(Student["age"]);
console.log(Student.rollNo);

Student["age"] = Student["age"] + 1;
console.log(Student["age"]);

// let can be updatedd const cant be updated and const obj --> key can be updated;