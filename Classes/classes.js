//jab bhi hume bulk me similar si objects ko create krna hotae then we usee classes
// classes are program code template for creating objects

/* class MyClass {
    constructor () {}
    mymethod ()  {}
}
*/

class ToyotaCar {
    constructor() {
        console.log("creating new object");
    }

    start () {
        console.log('Starting the car');
    }

    stop () {
        console.log("The car has stopped");
    }

    setBrand(brand) {
        this.brand = brand; //this means each individual object
        //jo = k sath likha h vo func ka argument h aur jo this k sth likha h vo is class se bnne wali sari obj ki property
    }
}

//creating object of class
let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");
let innova = new ToyotaCar();

//Ineritance in JS

//if child nd parent have same method, child's method will be used. [Method Overriding].

class Parent {
    hello () {
        console.log("Hello from parent");
    }
}

class Child extends Parent {}

let obj = new Child();

//SUPER KEYWORD

//the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

class Human {
    constructor() {
        this.species = "homo sapiens";
    }

    eat() {
        console.log("I am eating something");
    }
}

class Engineer extends Human {
    constructor(branch) {
        super(); //mandatory //to invoke parent class constructor
        this.branch = branch;
    }

    work() {
        console.log("I am an engineer and I can code");
    }    
}

let engObj = new Engineer("chem engg");

//Practice ques
// You are creating a website for your college. Create a class user with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.

//Create a new class Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data: ",DATA);
    }
}

let student1 = new User("shraddha","abc@emaiil.com");
let student2 = new User("aman","stu@emaiil.com");
let teacher1 = new  User("professor x","profe@@gmail.com");

student1.viewData();    
teacher1.viewData();

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData(newData){
        DATA = newData;   
    }
}

let admin1 = new Admin("admin", "adm@gmail.com");
admin1.editData("New secret data");
student1.viewData();

//ERROR  HANDLING 

let a =5;
let b =10;
// bich m koi error krdia hai toh yaha error handling krdo  

console.log(a+b); // normal execution
// console.log(a+c); // error --> toh ab isko try block m likhenge
try{
    console.log(a+c); // error --> toh ab isko try block m likhenge
} catch(err) { //err is  variable which holds the error object 
    console.error("Error : "+ err); // print the error message in console
}


console.log(a+b); 
console.log(a+b); 
console.log(a+b); 
console.log(a+b); 