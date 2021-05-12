import * as React from 'react';
import '../../animation.css';
import number from '../../../../images/1.png'
import Arrow from "./arrow";

const Paralax = () => {
	const contentRef = React.useRef(null);
	const paralaxRef = React.useRef(null);
	const fogRef = React.useRef(null);
	const px1 = React.useRef(null);
	const px2 = React.useRef(null);
	const px3 = React.useRef(null);

	React.useEffect(() => {
		function paralaxScroll() {
			const s = window.scrollY;
			const w = window.outerWidth;
			const h = contentRef.current.clientHeight;
			const h_b = paralaxRef.current.clientHeight;
			const p = s/h*100;
			const p_b = s/h_b*100;
			const o = 1-1/100*p_b;
			const z_1 = 1 + (w / 10000 * p_b);

			fogRef.current.style.transform = `scale(${z_1})`;
			fogRef.current.style.opacity = o;
			console.log('fogRef', fogRef);
	
			const z_2=1+(w/5000000*p);
			px1.current.style.transform = 'scale('+ z_2 +')';
	
			const hr = w / 2000 * p_b;
			const z_3 = 1 + (w * 0.000005 * p_b);
			px2.current.style.transform = 'translate3d('+ hr + 'px,0,0) scale('+ z_3 +')';
	
			const hr_2 = w / 1500 * p_b;
			const z_4 = 1 + (w * 0.00001 * p_b);
			px3.current.style.transform = 'translate3d('+ hr_2 +'px,0,0) scale('+ z_4 +')';
		}

		window.addEventListener('scroll', paralaxScroll);

		return (() => {
			window.removeEventListener('scroll', paralaxScroll);
		})
	
	}, []);

		return (
			<div className="wrapper">
			<p className='overInvisible'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat deserunt dolorum tenetur nemo similique perspiciatis laudantium, laboriosam quo incidunt blanditiis voluptates optio provident pariatur numquam fugit aliquid beatae, accusantium voluptatem amet et. Maiores autem doloribus, et nisi harum voluptatem minima eos quis doloremque laudantium facilis debitis sit aut possimus dicta animi, consequatur labore dolore. Voluptatem, tempora, cum delectus, ex est dicta repudiandae odio maxime eveniet hic nihil odit! Quisquam ipsum laudantium alias delectus odio, quidem iure voluptas. Explicabo temporibus perspiciatis, sapiente adipisci minus, quod odit incidunt dolor facere doloremque laudantium! Quia, numquam eveniet magnam doloremque minima temporibus pariatur, ex voluptatum ipsam facere in reprehenderit itaque, ab dicta fugit facilis atque modi optio voluptatibus excepturi aut ducimus. Omnis quod assumenda ipsum aspernatur cupiditate, a itaque. Consectetur mollitia eum quae. Quod eaque quae temporibus debitis accusantium incidunt blanditiis esse, rerum soluta ea quia ipsa, vel impedit possimus ad natus, dolorem necessitatibus? Exercitationem a ipsa id, fuga suscipit, quis eum sed sint! Animi iure fuga quos dicta nemo quas vel aliquam, obcaecati repellat officia, minima debitis, fugit quo optio inventore laborum assumenda veritatis ex cumque atque labore. Inventore unde vitae quia excepturi molestiae voluptatibus corporis deleniti fugiat tempora ducimus et perspiciatis sunt necessitatibus cum laboriosam, odit, repellat amet nobis libero ipsum rem natus, alias? Quam officiis neque, eligendi nemo veniam, totam numquam magnam adipisci sapiente aspernatur laudantium blanditiis, dolore fugiat similique. Animi natus distinctio eligendi harum ea aperiam libero officia nesciunt, similique voluptatem enim alias, minima temporibus nobis iste adipisci veritatis aliquid autem totam, incidunt, officiis aut. Eos sapiente perspiciatis earum autem beatae laborum hic eum voluptates ad. Beatae nulla quae mollitia, rerum suscipit exercitationem eius minus, ipsa facere accusantium praesentium fugit quidem quisquam non molestias provident, ad repellendus ducimus voluptatem! Dolorum doloremque quisquam, enim voluptates deserunt aliquam numquam, magnam asperiores temporibus fuga excepturi reprehenderit sit alias architecto voluptatum. Laudantium quia, autem iusto veritatis maiores impedit quae possimus doloremque corrupti cum, ut. Totam reprehenderit inventore quo, repudiandae. Repudiandae illum minus in, cum dignissimos aperiam iure maiores placeat distinctio repellendus nesciunt magnam numquam ipsam, ad dolores, suscipit deleniti obcaecati esse quaerat recusandae. Neque ratione repellat hic corporis laborum, vero assumenda, consequuntur molestiae pariatur cum repudiandae nobis nisi ipsa modi magni fugiat ab, distinctio accusantium nulla alias aspernatur dolorem. Quibusdam, quidem sunt officiis porro fuga possimus odit odio totam. Eius pariatur deleniti deserunt laborum dolore, facilis reprehenderit sequi quos sed impedit sapiente ipsam ad delectus veniam eligendi ratione tenetur expedita a perspiciatis vero commodi nam suscipit beatae autem. Consequatur reiciendis quibusdam culpa delectus, atque nesciunt minus quo vitae nihil eveniet natus voluptas facere illum dolore magni saepe doloremque corrupti esse accusantium explicabo dolor? Impedit culpa harum omnis sunt autem odio iste nesciunt obcaecati animi repellendus quia sit qui aspernatur architecto, eligendi facere recusandae quas provident inventore ab. Et alias cupiditate non, saepe vitae, harum, quasi iste odit reprehenderit eaque tenetur voluptatem voluptate. Saepe accusamus dolorum suscipit maxime impedit pariatur! Esse officia quae doloremque quibusdam, laborum ex velit ipsa a sint cumque maxime earum rerum.
			</p>
				<div className="page">
					<div className="parallax" ref={paralaxRef}>

						<div className="parallax__montain parallax__montain_1" ref={px1}/>
						<div className="parallax__montain parallax__montain_2" ref={px2}/>
						<div className="parallax__montain parallax__montain_3" ref={px3}/>
						<Arrow/>
						<div className="parallax__fog" ref={fogRef}></div>
						
					</div>
					<div className="content" ref={contentRef}>
						<div className="content__body">

							<div className="content__header">
								<h1 className="content__title">Welcome</h1>
								<p className="content__subtitle">Здесь могла бы быть ваша реклама😜</p>
							</div>
						</div>
					</div>
				</div>
		</div>
	);
};

export default React.memo(Paralax);