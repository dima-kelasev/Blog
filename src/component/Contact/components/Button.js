import * as React from 'react';
import '../btnStyle.css'

const DEFAULT_TEXT = 'Contact me';

const Button = (props) => {
	const { text = DEFAULT_TEXT } = props;
	return (
		<button type='submit' className="wave-btn" disabled={props.disabled}>
			<span className="wave-btn__text">{props.text}</span>
			<span className="wave-btn__waves"></span>
		</button>
	)
}

export default React.memo(Button);