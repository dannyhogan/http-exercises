// Exercise #1
const { createServer } = require('http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello world!');
});

server.listen(7890, () => {
  console.log('Listening...');
});