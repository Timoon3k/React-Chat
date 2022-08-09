import socketio from 'socket.io-client';
import { createContext } from 'react';
const ENDPOINT = 'ws://localhost:5000/';

export const socket = socketio.connect(ENDPOINT, { transports: ['websocket'] });
export const SocketContext = createContext();
