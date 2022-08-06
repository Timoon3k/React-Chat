import { createServer } from 'http';
import express from 'express';
import { Server } from "socket.io";
import cors from 'cors';

import { addUser, removeUser, getUser, getUsersInRoom } from './users';

import router from './router';

const app = express();
const server = createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'Tomasz(Admin)', text: `${user.name}, Witaj w Pokoju ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'Tomasz(Admin)', text: `${user.name} dołączył!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Tomasz(Admin)', text: `${user.name} wyszedł.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Serwer został uruchomiony.`));