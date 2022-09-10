import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<h4 className='footer'>{new Date().getFullYear()} © Design by Tomasz Majewski</h4>
		</div>
	);
};

export default Footer;
