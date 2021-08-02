// 3 function test
//  1.) Function declaration

function sum1(a,b) {
    return a + b;
}

console.log("Function declaration:", sum1(1,2) + "\n");


//  2.) Function expression

let sum2 = function(a,b) {
    return a + b;
};

console.log("Function expression:", sum2(3,4) + "\n");


//  3.) Arrow function

let sum3 = (a,b) => {
   return a + b;
};

console.log("Arrow function:", sum3(5,6) + "\n");