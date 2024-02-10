

//FUNCTIONS  --> block of code that performs a specific task, can be invoked wherever needed
/*function functionName () {

} */

function myFunction() {
    console.log("Welcome to Apna College");
    console.log("We are learning JS");
  }
  
  myFunction();
  myFunction();
  
  function myFunction2(msg) {
    //parameter
    console.log(msg);
  }
  myFunction2("ILOVEJs"); //argument
  
  //Function -> 2 numbers, sum
  function sum(a, b) {
    console.log(a + b);
  }
  sum(3, 4);
  
  //func params --> local variables --> block scope
  
  //ARROW FUNCTIONS --> compact way of writing a function
  /*
  const functionName = (param1, param2....) => {
      //do some work
  }
  */
  //--> used in Modern JS
  
  const mul = (a, b) => {
    return a * b;
  };
  
  console.log(mul(3, 4));
  
  const printHello = () => console.log("hello");
  printHello();
  
  //PRACTICE QUESTION
  function countVowels(str) {
    let count = 0;
    for (const char of str) {
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
        count++;
    }
    console.log(`no of vowels in ${str} are ${count}.`);
  }
  
  countVowels("hello");
  
  //FOR EACH LOOP IN ARRAYS __> METHOD
  //arr.forEach(callBackFunction)
  //func js me as parameters use krkste hai
  
  //callback func is a func passed as an argument to another function
  
  let arr = [1,2,3,4,5];
  
  arr.forEach(function printVal(val) { //val = value at each index
      console.log(val);
  })
  //for each jb use krte h jb har ele k lie kuch kam krana hotae
  
  //Interviews --> what are higher order functions?  --> eg foreach jo dusre func ko as a parameter use krte h ya fir kisi dusre func ko return krte h
  
  //PRACTICE QUESTION
  let nums = [2,3,4,5,6];
  
  nums.forEach((num) => {
      console.log(num*num);
  })
  
  //Some more array methoods
  
  //map() : similar to foreach ---> map ko bhi use krskte h arr ke ekek index pe jake kuch krane k lie
  //diff map hume ek naya array retrurn krke deta h
  //arr.map(callbackfunc(value, index, array))
  
  let newArr = nums.map((val) => {
      return val;
  })
  
  //filter() : creates a new array of element that give true for a condition
  let numa = [1,2,3,4,5,6,7];
  
  let evenNuma = numa.filter((val) => {
      return val%2 ==0;
  })
  
  console.log(evenNuma);
  
  //reduce() : reduces the array to single value. it returns that single value
  //eg sum   input->arr  ouput -> sum -> 1 val
  //iske callback me do value hogi
  
  let red = [1,2,3,4];
  const outputt = red.reduce((res, curr) => {
      return res + curr;
  })
  //res+curr return hoke res mei store hotae 
  
  console.log(`output ${outputt}`);
  
  //Practice ques --> given marks of students. filter out who scored more than 90+
  
  let mark = [97, 64, 32, 49, 99, 96, 86];
  let newMark = mark.filter((val) => {
      return val > 90;
  })
  console.log(newMark);
  
  //practice ques :
  // let n = prompt("enter a number");
  let arrey = [];
  for(let i = 1; i<=n; i++) {
      arrey[i-1] = i; //o indexing
  }
  console.log(arrey);
  //use reduce to calc sum
  let summ = arrey.reduce((sum, curr) => {
      return sum + curr;
  })
  
  console.log(summ);
  //use reduce to calc product
  let prod = arrey.reduce((prodd, curr) => {
      return prodd * curr;
  })
  
  console.log(prod);