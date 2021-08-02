let min = (a,b) => {
    if (!b || !a) {
        return a || b;
    } else if (b < a) {
        return b;
    } else {
        return a;
    }
};

console.log(min(10,null));