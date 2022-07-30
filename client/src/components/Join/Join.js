import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

import './Join.css'
// import Check from '../Check/Check';

const Join = () => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')

	return (
		<div className='joinOuterContainer'>
			<div className='joinInnerContainer'>
				<h1 className='heading'>React Chat </h1>
				<div>
					<input placeholder='Imię' className='joinInput' type='text' onChange={event => setName(event.target.value)} />
				</div>
				<div>
					<input
						placeholder='Pokój'
						className='joinInput mt-20'
						type='text'
						onChange={event => setRoom(event.target.value)}
					/>
				</div>
				<Link
					onClick={event => (!name || !room ? event.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}>
					<button className={'button mt-20'} type='submit'>
						Dołącz
					</button>
				</Link>
				<br /><br />
				<Footer />
			</div>
		</div>
	)
}

export default Join
