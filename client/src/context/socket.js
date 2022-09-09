import socketio from 'socket.io-client';
import { createContext } from 'react';
const ENDPOINT = 'https://tomaszmajewski-chat.herokuapp.com';

export const socket = socketio.connect(ENDPOINT, { transports: ['websocket'] });
export const SocketContext = createContext();
