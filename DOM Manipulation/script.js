//window object --> it is browser's obj not js's obj & is automatically created by browser..
// console.log("hello");
// window.console.log("hello2");

//when a webpage is loded,  the browser creates a document obj model (dom) of the page.
// basically jitta bbhi html hum likhte hai vo saara k saara hum js k andar hum access krskte hai
// automatically html ka jo code hota h vo sare js k andr aake ek obj k andr convert  kar skte ho
// aur vo ek special obj  bnjata h jisko hum nam dete h document
// aur ye document available hota hai humari window obj k andr

//pura ka pura html ka code is available in the document obj
// aur ye document obj window obj me available hoti h 

//console.log --> print //obj ko as an element print krata h
//console.dir --> special objs like document obj ki prop aur methods ko print krane me kam ata hai

// console.dir(window.document);//

//iska use kb hota h jb mujhe html m chnges krne hote h --> like switching from light mode to dark mode
//runmtime pe dynamically jo chnges hone h vo sare k sare hmare lie js krsktae

//eg
// document.body.style.background = "green";
// document.body.childNodes[3].innerText = "abcd";


//code ko chnge ni krna bt user k actions pe chnges krne hoto iska use krte h

//dom manpulation

//jab hum script ko body se pehle likhdete h toh dom elementss accessible nhi hoti islie body tag k close k just pehle script tag likhte h

//1. selecting with id --> getElemenbyid is a method of document obj //id is represented by #
let heading = document.getElementById("heading");//it returns the value isilie var m store
console.dir(heading);

//2. selecting with class --> multiple elements ko eki prop se denote krna ho tab //bhot sare ele k lie class same hosktie // represented by .
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

//3. selecting with tag name
let parahs = document.getElementsByTagName("p");
console.dir(parahs);

//4. better way -> query selector
let elements = document.querySelector("p"); // returns only 1st matching element
console.dir(elements);

let allelements = document.querySelectorAll("p"); 
console.dir(allelements);


//Properties

//tagName   innertext   innerHTML   textContent

console.log(elements.tagName);//p


// console.dir(div.innerText);
//innertext m sirf text ata h or innerhtml me mtlm tags bhi aate h 

//textcontent -> returns textual contents even from hiddden elements

//practice qs
//create a h2 heading element with text - "hello javascript". append "from apna college" to this text using js
//acces the element
//use property nd chnge

let h2 = document.querySelector("h2");
//to chngw we'll use innerText prop
console.dir(h2.innerText);
h2.innerText += " from apna College"; //concatenate

//practice ques
//crate 3 divs with classname - box. acces the, and add some unique text to each of them.

let divs = document.querySelectorAll(".box");
divs[0].innerText = "abc";
divs[1].innerText = "def";
divs[2].innerText = "ghi";

//attributes
let button = document.querySelector("button");
console.log(button);

button.getAttribute("id"); 

let id = button.getAttribute("id");
console.log(id);

// console.log(id.setAttribute("id", "myButton"));
// console.log(id);

//node.style
button.style.backgroundColor = "green";
button.style.fontSize = "26px";

//insert elements
let newBtn = document.createElement("button");
newBtn.innerText = "Dont click me"
console.log(newBtn);

//button create toh krlia iskonscreen pe kese dikhaye  --> to add ---> 4 methods

//add at the end of the node(inside)
let div = document.querySelector("div");
div.append(newBtn);

//add at the beginning of the node(inside)
div.prepend(newBtn);

//adds before the node (outside)
div.before(newBtn); 

//adds after the node (outside)
div.after(newBtn);

let h4 = document.querySelector("h4");
h4.remove();

//hw --> appendChild && removeChild

//practice q
//create a new button element . give it a text "click me" , background color red nd text color is white. insert the button as the first element inside the body tag
let newBtn2 = document.createElement("button");
newBtn2.innerText = "click me !!!";
newBtn2.style.color = "white";
newBtn2.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn2);

//practice q
//create a p tag in html, give it a class & some styling. now create a class in css and try to append this class to the p element

let pc = document.querySelector("p");
pc.classList.add("newClass");