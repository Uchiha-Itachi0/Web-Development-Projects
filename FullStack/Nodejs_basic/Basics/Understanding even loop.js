import fs from 'fs';


fs.readFile('Basic_ii_)_Message.txt', () => {

    // As soon as the reading phase is done it will return the callback associated with it
    console.log('File has been read');    // 2nd
    console.log('-------------------');

    // This phase in event loop executed in the starting but since it is inside another phase so it
    // will not execute immediately. When the reading phase is done in the next loop it will return
    // the callback for all the expired timer
    setTimeout(() => console.log('Time out 1'), 0);   // 5th
    setTimeout(() => console.log('Time out 2nd'), 3000);  // 6th

    // setImmediate is a microphase and is executed in hadler phase which come after I/O phase
    // Therefore as soon as the reading is done it will executed. But because of process.nextTick
    // it will execute after it
    setImmediate(() => console.log('Set immediate'));   // 4th

    // process.nextTick is a microphase and executed in the starting of the event loop or
    // at the end of each phase. Now as soon as the I/O phase end it gets executed
    process.nextTick(() => console.log('process.nexttick')) //3rd
})


// This is top level code so this will execute first
console.log('This is a top level code');  
