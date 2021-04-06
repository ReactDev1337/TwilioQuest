function calculateMass(array) {
    return array.reduce((i, j) => { 
        return i += j.length;
    }, 0);
}