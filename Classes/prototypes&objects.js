// A js obj is an entity having state and behaviour(properties and methods)
//js obj have special property  called prototype.

//creating a student objext
const student = {
    //properties
    fullName : "shraddha khapra",
    marks : 94.4,

    //method
    printMarks :function() {
        console.log("marks are ",this.marks); //this ka mtlb hot h jis bhi chiz ki humm baat krrhe h
    },
};

const employee = {
    //2 formats
    calcTax() {
        console.log("tax rate  is 15%");
    },
    calcTax2 : function () {
        console.log("tax rate is 20%");
    }
}

const karanArjun = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 30%");
    }
}

//agr employee k func karanArjun k andr use krne h to prototype ka use hoga
karanArjun.__proto__ = employee;
//ab karanarjun k ps khudka b calctax h or proto wala bhi h to ky hoga? -->toh jo khudke andrlikha h usko priority milegi
