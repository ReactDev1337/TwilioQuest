function scanAndFilter(array, string) {
    let outArray = array.filter((i) => {
        return i !== string;
    });

    return outArray;
}