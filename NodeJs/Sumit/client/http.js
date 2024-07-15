const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is the about us page');
        res.end();
    } else {
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
