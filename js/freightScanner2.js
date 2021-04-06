function scan(array) {
    let outArray = [];
    array.forEach((i, j) => {
        if (i === "contraband") {
            outArray.push(j);
        }
    });
    return outArray;
}