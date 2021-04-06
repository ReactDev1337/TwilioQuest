const argumentValue = Number(process.argv[2]);

switch (argumentValue) {
    case 0:
        console.log("alive");
        break;
    case 1:
        console.log("flowering");
        break;
    case 2:
        console.log("shedding");
        break;
    default:
        console.log("other");
}