const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    str = input[0];
    result = '';
    str.split('').forEach(string => {
        if (string === string.toUpperCase()) {
            result += string.toLowerCase();
        } else {
            result += string.toUpperCase();
        }
    });
    console.log(result);
});