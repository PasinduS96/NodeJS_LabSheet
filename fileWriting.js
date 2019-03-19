const fs = require('fs');

const inputFileName = __dirname + '/test.txt';
const outputFileName = __dirname + '/test-copy1.txt';

const read = fs.createReadStream(inputFileName);
const write = fs.createWriteStream(outputFileName);

read.pipe(write);