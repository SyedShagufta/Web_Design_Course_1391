// promise creation
const promise1 = new Promise(
    (resolve, reject) => {
        resolve("success");
    }
);

// promise handling
promise1.then(
    (value) => {
        console.log(value); // expected success output
        
    }
).catch(
    (error) => {
        console.log("error: ",error);
    }
);

console.clear();

// promise chaining 

const start = Date.now();
console.log("initial value - ",start);
return Promise.resolve().
then(() => new Promise(resolve => setTimeout(resolve, 50))).
then(() => new Promise(resolve => setTimeout(resolve, 50))).
then(v => {
    console.log(Date.now()-start); 
});