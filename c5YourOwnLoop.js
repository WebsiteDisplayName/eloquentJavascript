let loop = (value, testFunction, updateFunction, bodyFunction) => {
    let current = value;
    while (testFunction(current)) {
        bodyFunction(current);
        current = updateFunction(current);
    };
};

let loop2 = (value, testFunction, updateFunction, bodyFunction) => {
    for (let current = value; testFunction(current); current = updateFunction(current)) {
        bodyFunction(current);
    };
};

loop(3, n => n > 0, n => n - 1, console.log);
loop2(3, n => n > 0, n => n - 1, console.log);

