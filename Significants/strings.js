

//TEMPLATE LITERALS --> special type ki string
//a way to have embedded expressions in string

let sentence = `This is a template literal`; //use of back ticks
console.log(sentence);

//practical example
let obj = {
  item: "pen",
  price: 10,
};

console.log("the cost of", obj.item, "is", obj.price, "rupees"); //normally
let output = `the cost of ${obj.item} is ${obj.price} rupees.`; //template literal --> isi tareeke / cheej ko string interpolation..
console.log(output);

// escape characters ---> \n    \t   ye str ki length me ek space lete h
let s = "Apna";
let t = "Apn\na";
console.log(s, s.length);
console.log(t, t.length);

//string methods
stri = "    Abc df     ";
console.log(stri.toUpperCase());
console.log(stri); //doesnt change original string
console.log(stri.toLowerCase());
console.log(stri.trim()); //remove whitespaces from starting and end

//STRINGS ARE IMMUTABLE IN JS ---> CHANGE NHI HOTI

//concatination
let s1 = "abey";
let s2 = "jabey";
let res = s1.concat(s2);
console.log(res);
//alter way
res = s1 + s2;
console.log(res);

s1.slice(1, 3);

let s3 = "hello";
console.log(s3.replace("h", "m"));

console.log(s3.charAt(3));

//PRACTICE QUESTION
// let fName = prompt("enter your full name without spaces : ");
// console.log('@'+fName+fName.length);