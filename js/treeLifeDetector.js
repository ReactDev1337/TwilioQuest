const argumentValue = Number(process.argv[2]);

switch (argumentValue) {
    case 0:
        console.log("alive");
        break;
    default:
        console.log("other");
        break;
}