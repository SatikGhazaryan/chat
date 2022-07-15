const express=require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.use(express.static(__dirname +'/main'))


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', {
        messages: msg.messages,
        name:msg.name
      });
    });
  });
const port = process.env.PORT || 800
http.listen(port,()=>{
    console.log('server listen 800 port')
})