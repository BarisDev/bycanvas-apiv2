const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.send('Welcome');
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));