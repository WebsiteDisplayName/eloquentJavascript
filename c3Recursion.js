let isEven = (a) => {
    if (a < 0){
        return isEven(-a);
    } else if (a == 0) {
        return true;
    } else if (a == 1) {
        return false;
    }
    return isEven(a-2);
};