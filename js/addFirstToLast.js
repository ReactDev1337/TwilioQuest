function addFirstToLast(array) {
    if (array.length === 0) return "";
    return array[0] + array[array.length - 1];
}