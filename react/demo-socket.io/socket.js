let app = require('http').createServer();
let io = require('socket.io')(app);
const PORT = 3000;

let clientCount = 0;

io.on('connection', socket => {
  clientCount++;
  socket.nickname = 'user' + clientCount;
  io.emit('enter', { nickname: socket.nickname, str: '加入到群聊中！' });   // 对io进行广播

  socket.on('msg', data => {
    console.log(`data: ${data}`);
    io.emit('msg', { nickname: socket.nickname, str: data });
  });

  socket.on('disconnect', data => {
    io.emit('leave', { nickname: socket.nickname, str: '已离开群聊！' });
  });
});

app.listen(PORT);
console.log(`socket.io server listening on port ${PORT}!`);