import * as React from  'react';
import Btn from './Button';
import emailjs from 'emailjs-com';
import {
	serviceId,
	templateId,
	userId,
}  from '../../../data/constants';
import { useAlert } from 'react-alert'
import SocialLink from './Link'




const Form = () => {
	const [userName, setName] = React.useState('');
	const [userEmail, setMail] = React.useState('');
	const [userText, setText] = React.useState('');
	const [disabled, setDisabled] = React.useState(false)

	const alert = useAlert()
	const btnDisabled = document.querySelector('.wave-btn__waves');

	const handleSubmitForm = async (e) => {
		e.preventDefault()
		setDisabled(true)
		btnDisabled.classList.add('btn_Disable')
		const template_params = { userName, userEmail, userText };
		try {
			const response = await emailjs.send(serviceId, templateId, template_params, userId);

			if (response.status === 200) {
				btnDisabled.classList.remove('btn_Disable')
				document.getElementById("form").reset();
				alert.show('Success!😎')
			} else {
				alert.show('Wow, We have problems!😱')
			}
		} catch (e) {
			console.log(e);
		} finally {
			setDisabled((false))
		}
	}

	return (
		<form className='form blogWraper' onSubmit={handleSubmitForm}  id='form'>
			<h1 className='form_title'>Leave your details if you want to work with me or just chat:</h1>
			<p className='subtitle'>By pressing the send button you agree to processing your personal data</p>
			<input
				className='form__input'
				type="text"
				placeholder='Name*'
				required
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className='form__input'
				type="email"
				placeholder='E-mail*'
				required
				onChange={(e) => setMail(e.target.value)}
			/>
			<input
				className='form__input'
				type='text'
				placeholder='Massage*'
				required
				onChange={(e) => setText(e.target.value)}
			/>
			<div className='social_and_btn_block'>
			<Btn text='Contact me' disabled={disabled}/>
			<SocialLink />
			</div>
		</form>
	)
}
export default React.memo(Form);