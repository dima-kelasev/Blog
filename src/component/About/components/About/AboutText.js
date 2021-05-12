import * as React from 'react';
import '../../about.css';
import Button from "../../../Contact/components/Button";
import TextSkil from "./TextSkil";

const AboutText =() => {
	return (
		<main className='content__intro'>
			<div className='content__text__block'>
				<div className='imgBack'></div>
				<h1>Dmitriy Kelasev </h1>
				<p className='info__subtitle'>Web developer</p>
				<h3>Here I will tell you about myself!</h3>

					<p className='content__introduce'>As you already understood, my name is Dima, I am 29 years old at the time of writing this blog.
							More than five years my main job was coaching, I have coached people who are ready to compete.
							But this came to an end, more than 1.5 years, I've been programming So also i doing active terekin, climbing.
							My friend and I are taking people to the mountains, "join us."
							And yet this blog will be more about my history and my journey into programming.
					</p>
					<p className='content__introduce'>Here is my technology stack that I managed to master:</p>
					<TextSkil/>
			</div>
		</main>
	)
}

export default React.memo(AboutText);