// Exercise #2
const { createServer } = require('http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const html = /*html*/`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>I am the best</h1>
    <ul>
      <li>Hello</li>
      <li>World</li>
      <li>Test</li>
    </ul>
  </body>
  </html>`
  res.end(html);
});

server.listen(7890, () => {
  console.log('Listening...');
});