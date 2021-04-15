import * as React from 'react';
import AboutText from './components/About/AboutText';

const About =() => {
	// TODO отступы и форматирование кода
	// TODO обрени в React.memo
	return (
		<section>
			<AboutText />
		</section>
	)
}

export default React.memo(About);