//async function always returns a promise

// async function hello () {
//     console.log("hello"); //automatically promise dega compulsarily
// }

//await pauses the execution of its surrounding async function untilthe promise is settled

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200); //success
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); //age ka kam krne se pehle  wait hota hai //ye aerror der h kuki sirf async function m kam krega islie isko func me daldo
    await api(); //2nd
}

//async-await
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data" + dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData() { //dekho kitta asan code dikhra h comparitively
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await  getData(5);
}

//async await ko function me likhna padhta hai or fr call krni pdti h to avoid that ...
//IIFE : Immediately Invoked  Function Expression
//it is a function that is called immediately as soon as it is defined.
//It can take parameters just like regular functions do.

//name hatado
//parenthesis k andar enclode krdo
(async function () { //dekho kitta asan code dikhra h comparitively
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await  getData(5);
})();

//isme console me call lagane ki zarurat nhai padegi
