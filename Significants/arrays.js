

//ARRAYS
let marks = [97, 92, 84, 75, 87];
console.log(marks);

//type of arrays is object
marks[0] = 66;
console.log(marks);

//PRACTICE QUESTION ---> item die hai 10% off krke dena hai sabpe
let items = [250, 645, 300, 900, 50];
let idx = 0;
for (let val of items) {
  let offer = val / 10;
  val -= offer;
  console.log(val);
  idx++;
}

//ARRAY METHODS
//push
//pop
//toString
//concat
//unshift -->add to start
//shift ->delete from start
//slice -> returns a peice of array --> slice(s, e);
//splice -> change original array -->(add, remove, replace);

// splice(start index, deletecount, newelement);
let ar = [1, 2, 3, 4, 5, 6, 7];
ar.splice(2, 2, 101, 102);

//PRACTICE QUESTION
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

//remove the first company from the array
companies.shift();

//remove uber and add ola in its place
companies.splice(1, 1, "ola");

//add amazon at the end
companies.push("amazon");