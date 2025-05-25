const args = process.argv;
const firstArg = args[2];
if (typeof firstArg === "undefined"){
    console.log("No argument");
} else {
    console.log(firstArg);
}