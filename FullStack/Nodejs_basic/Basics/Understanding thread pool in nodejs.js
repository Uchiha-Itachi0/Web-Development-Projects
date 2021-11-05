import fs from 'fs';
import crypto from 'crypto';

let start = Date.now();

fs.readFile('Basic_ii_Message.txt', () => {
    console.log('File has been read');  // 2nd
    console.log('-----------------');

    // This is a heavy task so it will executed in thread pool seperate from
    // event loop, so that it will not block the code.

    // There are 4 thread pool provided by lbliv library
    // So all the encrption take place in seperate thread pool
    // Therefore taking almost same time
    // But if we change the size of thread pool to one then each encryption 
    // take place on by one
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted');
    })

    // They all will keep executing according to there prefference
    setImmediate(() => console.log('This is a setImmediate'))  // 4th
    setTimeout(() => console.log('Time interval 1'), 0)  // 5th
    setTimeout(() => console.log('Time interval 2'), 3000)  // 6th
    process.nextTick(() => console.log('This is process.nextTick'))  //3rd


})

// Top level code will be executed 1st
console.log('This is top level code');  // 1st