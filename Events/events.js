//the change in  the state of an obj is knwon as event

/* node.event = () => {
    //handle here
} */

let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
    console.log("button was clicked inside js");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}

//inline aur js dono me event handle kia toh js ko priority milegi 
//multiple handlers m most recent wala purane walo ko overwrite krdega 

//event object  contains information about the event that occured 
//it has properties like type, target etc
//target : which element dispatched this event , source: where the event originated from
//eg e in above eg

//ways to handle evnts  --> 1. inline   2.  in js function    3. using addEventListener method

//EVENT LISTENERS
// node.addEventListener(event, callback);
// node.removeEventListener(event, callback);

//ye hamesha event ko sunte h ki event kab aaega kab aaega aur ata h tb actions perform krte h

//here callback is a func jesei event listen krega func execute hoga
//isi callback ko handler bhi kehte hai

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    console.log("button2 was clicked ! - handler1");
});

btn2.addEventListener("click", () => {
    console.log("button2 was clicked ! - handler2");
});


const handler3 = () => {
    console.log("button2 was clicked ! - handler3");
}
btn2.addEventListener("click", handler3);


btn2.addEventListener("click", () => {
    console.log("button2 was clicked ! - handler4");
});

//isse dono kam krenge mtlb iss multiple kam krwaskte h no overwrite isilie inka use krte h

btn2.removeEventListener( "click" , handler3
    //remove krne k lie calllback func add or remove k same hona chie not copy
    //isilie func ko var me save krate h
);


//practice question
// create a toggle button that changes the screen to dark mode when clicked & light - mode when clicked again

let toggle = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark m chnge krna h
toggle.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        //inline change
        // document.querySelector("body").style.backgroundColor = "black";
        // document.querySelector("body").style.color = "white";

        //chnage through css classes
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "#fff";
        // document.querySelector("body").style.color = "black";

        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});


