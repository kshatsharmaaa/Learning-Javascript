// Fetch API provides an interfce for fetching  resources from the network in a browser
// It returns a Promise that resolves to a Response object representing the response to that request.
//it uses  request and response objects.
//fetch() method isse promise return hota hai aka response

//API stands for  Application Programming Interface

const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    factPara.innerText = data[0].text;
}

btn.addEventListener( 'click', getFacts);
///UNDERSTANDING TERMS

//AJAX : Asynchronous Js & XML      //old  way of making asynchronous requests using xml as data type
//JSON : Javascript Obj Notation    //new  way of sending data between client and server, it's like a dictionary but more powerful than dict
                                //new way of making asynchronous requests using JSON or Text as data type

//Promise: A blueprint for creating asynchronous methods.It's like a box that contains a value (the resolved value) or an error (rejected reason).

/* Api ko call krne ka process

Api ko jesei req bheji waha se response ata jo ki JsON format mhota h
is json format se js obj me convert krna pdta h to convert it into usable format
use ese krte h jo bhi response ho usme .json lgado  ---> line15
*/


//HOMEWORK : Sending POST Request