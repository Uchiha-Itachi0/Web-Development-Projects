import http from 'http';
import fs from 'fs';

const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');  // This is a meta data
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body>');

        res.write('<form action="/message" method="POST"><input type="text" name="message"></input><button type = "submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end()
    }

    // Can only be triggered by the post method
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('Basic_ii_)_Message.txt', 'hard coded hello');

        // After creating file we want to redirect user.
        // Status code 302 is used for redirect.

        // These 2 line can be coded in one line like this:
        // res.writeHead(302, {'Location': '/'})
        res.statusCode = 302
        res.setHeader('Location', '/')

        return res.end();
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