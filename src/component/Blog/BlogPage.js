import * as React from 'react';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-reactjs';
import './style.css';
import Loader from './components/Loader';
import { apiEndpoint, accessToken} from '../../data/constants';

// TODO вынеси в константы эти токены и урлы, хорошей практикой считается разделять это и не держать все одном файле
//done

//TODO Следи за форматированием кода
const BlogPage = () => {
const [doc, setDocData] = React.useState([]);

	React.useEffect(() => {
		const client = Prismic.client(apiEndpoint, { accessToken });
		const fetchData = async () => {
			const response = await client.query(
				Prismic.Predicates.at('document.type', 'blog')
			)
			if (response) {
				setDocData(response.results)
			}
		}
		fetchData();
	}, [])

return (
	<>
    {doc?.length ? (
        <div className='blogWraper'>
					<h1>{RichText.asText(doc[1].data.title)}</h1>
					<img src={doc[1].data.logo_page.url}/>
					<p>{RichText.asText(doc[1].data.text)}</p>

					<div className='blogWraper'>
						<h1>{RichText.asText(doc[0].data.title)}</h1>
						<p>{RichText.asText(doc[0].data.text)}</p>
        	</div>
        </div>
      ) : 
			<div><Loader /></div>
    }
	</>
	)
}

export default React.memo(BlogPage);