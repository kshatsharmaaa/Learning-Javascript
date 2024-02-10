//SYNC IN JS

//Synchronous -> means the code runs in particular sequenceof instruction.
console.log("one");
console.log("two");
console.log("three");

//Asynchronous --> kabhi kabhi koi instruction jada time leleti hai execute hone me 
//it allows to execute next instructions immediately and doesnt block the flow
//eg api se data fetch karne me delay

function hello() {
    console.log("hello");
}

setTimeout(hello, 2000); //timeout --> kitne time baad aap apna kaam krwana chahte hai // 2s = 2000ms
//alter
setTimeout(() => {
    console.log('Hello World!');
}, 3000)

console.log("four");
console.log("five");
