const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));


server.listen(3000, function () {
    console.log('server listening on port', 3000);
})

// Inicio de Comunicación Serial

// Inicializar SerialPort y ReadlineParser
const { SerialPort, ReadlineParser   } = require('serialport')

// Determinar el puerto al que se conectará el server
// const port = new SerialPort(
//     { 
//         path: 'COM4',
//         baudRate: 9600
//     }
// )

// Iniciar el ReadlineParser para detectar las lineas seriales detectadas en el puerto
const parser = new ReadlineParser()

// Leer las lineas seriales mientras son detectadas
// port.pipe(parser)
// parser.on('data', (line)=>{
//     console.log(line);
//     io.emit('competitors', line)
// })

// error
// port.on('error', (err) => {
//     console.log(err);
// });

// Fin de Comunicación Serial