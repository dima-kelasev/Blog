import * as React from 'react';
import '../../home.css';
import Paralax from '../Animation/index'

const Content = () => {
	return (
		<div>
			<main className='main_page'>
				{/* <h1 className='main_page__title'>It's Main Page</h1>
				<div className='animate'></div>	 */}
				<Paralax />
			</main>
		</div>
	)
}

export default React.memo(Content);