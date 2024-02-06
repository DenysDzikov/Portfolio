let app = require('express')();
let http = require('http').createServer(app);

let io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
});

let userCount = 0;
io.on('connection', function(socket){
    console.log('user connected');
    userCount++;
    
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
        console.log(msg);
    })
    
    socket.on('disconnect', function(){
         console.log('user disconnected');
    })
    
})





http.listen(3000, function(){
    console.log('server listening on port:3000');
})