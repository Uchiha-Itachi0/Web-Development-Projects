import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

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