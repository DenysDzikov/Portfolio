let host = '127.0.0.1';
let port = 8000;

let express = require('express');

let app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

app.listen(port, host);


console.log('server is run port:8000');