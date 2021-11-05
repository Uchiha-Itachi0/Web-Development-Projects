
/* 

To understand Stream and buffer : https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/

Buffer is simply a waiting place for your data.
*/

import http from 'http';
import fs from 'fs';

const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');  // This is a meta data
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body>');

        // The user input data will be sent to the req body when the form is submit as (name_of_input : input_value)
        res.write('<form action="/message" method="POST"><input type="text" name="message"></input><button type = "submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end()
    }

    // Can only be triggered by the post method
    if (url === '/message' && method === 'POST') {

        // Parsing user input data
        const body = []

        // Listining data stream
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        return req.on('end', () => {
            const data = Buffer.concat(body).toString();
            const message = data.split('=')[1]

            // writeFileSync block the code exebution which is not good for large file
            // fs.writeFileSync('Basic_iii_)_Message.txt', message);

            //  Now this will not block the code. It will register the function of what to do
            // when this is done and proceed further.
            fs.writeFile('Basic_iii_)_Message.txt', message, (err) => {
                if (err) {
                    console.log(err);
                }
                else {

                    // After creating file we want to redirect user.
                    // Status code 302 is used for redirect.

                    // These 2 line can be coded in one line like this:
                    // res.writeHead(302, {'Location': '/'})
                    res.statusCode = 302
                    res.setHeader('Location', '/')

                    return res.end();
                }
            })
        });
    }

    // The content which we are sending is html
    res.setHeader('Content-Type', 'text/html');  // This is a meta data
    res.write('<html>');
    res.write('<head><title>Server using nodejs</title></head>');
    res.write('<body>');
    res.write('<h1>Hello Anubhav from node</h1>');
    res.write('</body>');
    res.write('</html>');

    // We have to tell that we are done with writing content
    res.end();

    // To exit as soon as this line of code run. But we don't want that, if we do this
    // then no one will able to visit our server again
    // process.exit()
});
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});