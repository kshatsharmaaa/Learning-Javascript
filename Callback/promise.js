//Promise is for eventual completion of task, it is an object in JS.

//reject ed promise --> when there is some error or something went wrong while performing operation
//resolve  ed promise --> when everything is fine and operation is successfully performed

//reject and resolve  are methods of Promise objects and are callbacks provided by JS

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     // reject("some error"); //console  will print "error"
// });

//general project mai hu promise ni create krte hum kisi api se data req krte h to vo api hume promise deti hai 

//eg

function getData(dataId, getNexData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Requesting data for " + dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 2000);
    });
}

//how to use promises 
//.then() & .catch()
const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a Promise");
        // resolve("success");
        reject("Error occured!");
    });
};

let promise = getPromise();
promise.then((res) => { //resolve hone ke baad kam karana
    console.log("promise fulfilled !", res); 
});

promise.catch((err) =>{ //reject hone ke bad kaam kaarana
    console.log("promise rejected !", err);
})

//Promise  chain

function asyncFunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        }, 4000);
    });
}

// console.log("feching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// })

// console.log("feching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })

//hum chahte pehle data 1 mile fir data2 fetch ho not simultaneously
console.log("feching data1...");
let p1 = asyncFunc1();
p1.then((res) => {
    
    console.log("feching data2...");
    let p2 = asyncFunc2();
    p2.then((res) => {
        
    })
})

//this is called promise chain