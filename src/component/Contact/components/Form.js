import * as React from  'react';
import instagram from '../../../images/instagram.jpg';
import Vkontakte from '../../../images/vk.jpg';
import FaceBook from '../../../images/facebook.jpg';
import Telegram from '../../../images/telegram.jpg';
import LinkedIn from '../../../images/linkedin.jpg';
import Btn from './Button';
// import CreateBlogPost from './fetch';
import emailjs from 'emailjs-com';
import {
	serviceId,
	templateId,
	userId,
}  from '../../../data/constants';

const Form = () => {
	const [userName, setName] = React.useState('');
	const [userEmail, setMail] = React.useState('');
	const [userPhone, setPhone] = React.useState('');

	const handleSubmit = (e) => {
		e.preventDefault()
		const template_params = { userName, userEmail, userPhone };
		console.log(template_params)

		emailjs.send(serviceId, templateId, template_params, userId)
			.then((result) => {
				console.log(result.text);
			}, (e) => {
				console.log(e);
			});
	}

	return (
		<div className='blogWraper'>
			<h1 className='form_title'>Leave your details if you want to work with me or just chat:</h1>
			<p className='subtitle'>By pressing the send button you agree to processing your personal data</p>
			<form onSubmit={handleSubmit}  className='form'>
				<input
					type='text'
					name='name'
					required
					value={userName} placeholder='Name*' onChange={(e) => setName(e.target.value)}/>
				<input type='email' name='email' value={userEmail} required placeholder='E-mail' onChange={(e) => setMail(e.target.value)}/>
				<input type='number' name='phone' value={userPhone} required placeholder='Phone*' onChange={(e) => setPhone((e.target.value))}/>
				<div className='social_and_btn_block'>
					<Btn text='Contact me'/>
					<div className='logo_block'>
						<a href='https://www.instagram.com/kelaseff/' target='_blank'><img src={instagram}/></a>
						<a href='https://vk.com/kelasevfitness' target='_blank'><img src={Vkontakte}/></a>
						<a href='https://www.facebook.com/dmitriy.kelasev/' target='_blank'><img src={FaceBook}/></a>
						<a href='tg://resolve?domain=@kelaseff' target='_blank'><img src={Telegram}/></a>
						<a href='https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BA%D0%B5%D0%BB%D0%B0%D1%81%D1%8C%D0%B5%D0%B2-bb1691203/' target='_blank'><img src={LinkedIn}/></a>
					</div>
				</div>
			</form>
		</div>
	)

}

export default React.memo(Form);