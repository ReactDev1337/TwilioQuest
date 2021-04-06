function scan(array) {
    let contraband = 0;
    array.forEach((i) => {
        if (i === "contraband") {
            contraband += 1;
        }
    });
    return contraband;
}