import * as React from 'react';
import AboutText from './components/About/AboutText';

const About =() => {

	return (
		<section>
			<AboutText />
		</section>
	)
}

export default React.memo(About);