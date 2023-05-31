// os modules
console.log("welcome to node modules")
const os=require('os')
console.log(os.arch())
// console.log(os.cpus())
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.hostname())

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to the homepage!</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About us</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
