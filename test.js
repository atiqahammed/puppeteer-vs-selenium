const fs = require('fs');

let rawdata = fs.readFileSync('info.json');
let student = JSON.parse(rawdata);
console.log(student);
console.log(student.headless)

let ss = student.webUrl
console.log(ss)
console.log(ss[0])