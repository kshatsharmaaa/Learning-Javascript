//Callbacks -> is a func() passed as an argument to another func()

function sum(a,b) {
    console.log(a + b);
}

function calculator(a,b, sumCallback) {
    sumCallback(a,b);
}

calculator(1, 2, sum);

//isi tarah jo pehle settimeout(hello,3000) -> isme hello  function ko callback krte ho

//Callback Hell -> jab nested callbacks ajate h toh  callback hell hai

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Requesting data for " + dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

//ab pehle data1 chie fir data2 chie fir data3 chie 2 sec k delays k sath

//isse teeno ka timwe ek sth chalu hoga toh this isnt a soln
// getData('data1');
// getData('data2');
// getData('data3');

//solution --> another callback  getNextData

// getData(1, getData(2)); //this will not work because of the use of parenthesis in callback 


//callback hell
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{console.log("All Data Requested")});
    });
});

//this is not easily understandable  and also can cause stack overflow error if we go on nesting like this

//solution  ---> using promises
