const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: ["https://bycanvas.web.app/", "https://bycanvas.web.app/", "http://localhost:4200"]
    }
});

io.on('connection', (socket) => {
    //console.log('a user connected');
    socket.on('message', (msg) => {
        //console.log('message: ' + msg);
        socket.emit("message", msg);
        //io.emit('message', 'server says: click accepted..');
    });
    
});

app.get("/", (req, res) => res.send('Welcome'));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));