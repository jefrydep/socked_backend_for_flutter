const {io} = require('../index')
//mensajes de sockets
io.on('connection', client => {
    // client.on('event', data => { /* … */ });
    console.log('cliente conectado');

    client.on('disconnect', () => {

        console.log('Cliente desconectado');

    });

    client.on('mensaje',(payload)=>{
        console.log('mensaje!!',payload);

        io.emit('mensaje',{admin:'my mensaje'});
    })
});