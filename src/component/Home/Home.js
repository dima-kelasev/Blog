import React from 'react';
import Content from './components/Contetnt/Content';
import './home.css';

const Home = () => {
	return (
		<div>
			<Content />
		</div>
	)
}

export default React.memo(Home);