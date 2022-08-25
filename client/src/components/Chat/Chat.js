import React, { useState, useEffect, useContext } from 'react';
import queryString from 'query-string';
import { Navigate, useLocation } from 'react-router-dom';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';
import { SocketContext } from '../../context/socket';

const Chat = () => {
	const location = useLocation();
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const [flag] = useState(0);
	const socket = useContext(SocketContext);

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		setRoom(room);
		setName(name);
	}, [location.search, socket]);

	useEffect(() => {
		socket.removeAllListeners();
		socket.on('message', message => {
			setMessages(messages => [...messages, message]);
		});

		socket.on('roomData', ({ users }) => {
			setUsers(users);
		});
	}, [socket]);

	const sendMessage = event => {
		event.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};

	if (flag) {
		return <Navigate to='/' />;
	}

	return (
		<div className='outerContainer'>
			<div className='container'>
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
			<TextContainer users={users} />
		</div>
	);
};

export default Chat;
