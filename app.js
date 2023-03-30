const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: true //"https://bycanvas.web.app/",
    }
});

io.on('connection', (socket) => {
    //console.log('a user connected');
    socket.on('message', (msg) => {
        //console.log('message: ' + msg);
        //socket.emit("message", msg); //kullanıcıya at
        io.emit("message", msg); //herkese at
    });
    
});

app.get("/", (req, res) => res.send('Welcome'));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));