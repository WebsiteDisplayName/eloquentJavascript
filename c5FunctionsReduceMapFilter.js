// reduce test, ref chapter 5 eloquent javascript

let numArray = [1,2,3,4,5,6,7];

let reduceTest = numArray.reduce((lowest, contender) => contender < lowest ? contender : lowest);
    // ( (a,b) , start )
    //     start argument is optional
    //     a is current, the return becomes next current
    //     can perform operations such as summing all the values in an array or object
    //     [1, 2, 3, 4].reduce((a, b) => a + b)




let filterTest = numArray.filter(num => {
    return num > 3;
});
    // returns filtered array from original that meet some criteria

let filterTest2 = numArray.filter();



let mapTest = numArray.map(num => {
    return Math.sqrt(num);
});

    // returns new array and each element underwent some kind of transformation

console.log(mapTest);

console.log(filterTest);

console.log(reduceTest);

let livingScripts = SCRIPTS.filter(s => s.living); //forms of array of living scripts from general scripts
let livingScriptsYears = livingScripts.map(s => s.year); //forms array of individual years taken from living scripts
let yearTotal = livingScriptsYears.reduce((a,b) => a + b); //forms total of years from living scripts
let yearAverage = yearTotal / livingScripts.length;

let averageLivingYear = (SCRIPTS) => {
    let count = 0;
    let yearTotal = 0;
    for (let script of SCRIPTS) {
        if (script.living) {
            yearTotal += script.year;
            count += 1;
        };
    };
    return yearTotal / count;
};