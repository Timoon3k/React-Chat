import React from 'react'
import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => (
	<form className='form'>
		<input
			className='input'
			placeholder='Napisz wiadomość ...'
			value={message}
			onChange={event => setMessage(event.target.value)}
			onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
		/>
		<button className='sendButton' onClick={event => sendMessage(event)}>
			Wyślij
		</button>
	</form>
)

export default Input
