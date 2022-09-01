import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import 'animate.css';
import './TextContainer.css';

const TextContainer = ({ users }) => (
	<div className='textContainer'>
		<div>
			<h1 className='animate__rollIn'>
				Witaj w React Chat App{' '}
				<span role='img' aria-label='emoji'>
					💬
				</span>
			</h1>

			<h2 className='animate__rollIn'>
				Wypróbuj już teraz, mojej aplikacji!{' '}
				<span role='img' aria-label='emoji'>
					⬅️
				</span>
			</h2>
		</div>
		{users ? (
			<div>
				<h1 className='animate__rollIn'>Osoby aktualnie czatujące:</h1>
				<div className='activeContainer'>
					<h2>
						{users.map(({ name }) => (
							<div key={name} className='activeItem'>
								{name}
								<img alt='Online Icon' src={onlineIcon} />
							</div>
						))}
					</h2>
				</div>
			</div>
		) : null}
	</div>
);

export default TextContainer;
