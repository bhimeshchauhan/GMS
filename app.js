const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const myModule = require('./giphy_api/main.js');


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("the data is ", myModule.testRoute());
    res.write(myModule.testRoute());
    res.end();
}).listen(3000);

server.listen(port, hostname, () => {
    console.log("The server is running at http://",hostname,":",port);
});