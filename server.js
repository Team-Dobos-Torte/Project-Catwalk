const express = require('express');
const path = require('path');
const parser = require('body-parser');


server = express();
const port = 7777;
const localhost = '127.0.0.1';

server.use(express.static(path.join(__dirname, './public')));
server.use(parser.json());

//routes

server.listen(port, () => {
  console.log(`Server meowing at meow ${port}`);
});