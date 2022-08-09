import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { socket, SocketContext } from './context/socket';

const App = () => (
	<SocketContext.Provider value={socket}>
		<Router>
			<Routes>
				<Route path='/' exact element={<Join />} />
				<Route path='/chat' exact element={<Chat />} />
			</Routes>
		</Router>
	</SocketContext.Provider>
);

export default App;
