import * as React from 'react';
// TODO правильный пример ипорта react, но делай всегда '* as React'done
import '../../home.css'

const Content = () => {
	return (
		<div>
			<main className='main_page'>
				<h1 className='main_page__title'>It's Main Page</h1>
				<div className='animate'></div>	
			</main>
		</div>
	)
}

export default React.memo(Content);