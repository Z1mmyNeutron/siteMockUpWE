
var fs = require("fs");

function readFile(filePath) {
    try {
        const text = fs.readFileSync(filePath, 'utf-8');
        const textByLine = text.split('\n');
        console.log(textByLine);
    } catch (err) {
        console.log("error reading this file:", err);
    }
}
var t = readFile("./poem.txt")

readFile("./poem.txt", function (t) {
    console.log(t);
});

return t;

