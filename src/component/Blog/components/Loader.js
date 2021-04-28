import * as React from 'react'; 
import '../style.css'

const Loader = () => {
	return (
		<div className='loader'>
			<div className="sk-cube-grid">
      {[...Array(8).keys()].map(el => (
        <div className={`sk-cube sk-cube${el + 1}`}/>
      ))}
      </div>
		</div>
	)
}

export default React.memo(Loader);