import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SocketContext } from '../../context/socket';
import Footer from '../Footer/Footer';
import './Join.css';
import 'animate.css';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const socket = useContext(SocketContext);

	const enterToRoom = (event) => {
		if (!room || !name) {
			event.preventDefault();
			return;
		}

		socket.emit('join', { name, room }, (error) => {
			if (error) {
				setName('');
				setRoom('');
				alert(error);
			}
		});
	};
	return (
		<div className='joinOuterContainer'>
			<div className='joinInnerContainer'>
				<h1 className='animate__rubberBand'>React Chat </h1>
				<div>
					<input placeholder='Imię' className='joinInput' type='text' onChange={(event) => setName(event.target.value)} />
				</div>
				<div>
					<input placeholder='Pokój' className='joinInput mt-20' type='text' onChange={(event) => setRoom(event.target.value)} />
				</div>
				<Link onClick={enterToRoom} to={`/chat?name=${name}&room=${room}`}>
					<button className={'button mt-20'} type='submit'>
						Dołącz
					</button>
				</Link>
				<br />
				<br />
				<Footer />
			</div>
		</div>
	);
};

export default Join;
