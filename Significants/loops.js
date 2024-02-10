

for (let i = 1; i <= 50; i++) {
    console.log("senpai");
    // console.log(i);
  }
  
  //for-of loop --> used for strings and arrays but not for objects
  let str = "ApnaCollege";
  for (let i of str) console.log("i =", i);
  
  //for in loop -> for objects
  
  let person = {
    name: "apna", //key : value
    age: 24,
  };
  
  for (i in person) {
    console.log(i); //keys print krega
  }
  
  //Practice q == guess the game number
  // let gameNum = 25;
  // let userNum = prompt("Guess the game number : ");
  
  // while(userNum != gameNum) {  //game
  //     userNum = prompt("You enterd the wrong number. Guess again : ");
  // }
  // console.log("congratulations, you entered the right number !");