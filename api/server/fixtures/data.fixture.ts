import fs from 'fs';
const p = Assets.absoluteFilePath('dummy.txt');
console.log("Assets.absoluteFilePath('dummy.txt'): ", p);
const content = fs.readFileSync(p, 'UTF8');
console.log("private/dummy.txt content: ", content)
