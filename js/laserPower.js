function calculatePower(array) {
    return array.map((i) => {
        return i * 2;    
    }).reduce((i, j) => {
        return i += j;
    }, 0);
}