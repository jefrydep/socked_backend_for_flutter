const express = require('express')
const path = require('path');

const publicPath = path.resolve(__dirname, 'public');
require('dotenv').config()
const app = express()
app.use(express.static(publicPath));

//node server socket io config
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')



//configuramos el app.listen por server.listen

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('servidor corriendo en puerto', process.env.PORT);
})