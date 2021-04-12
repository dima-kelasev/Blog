import * as React from 'react';
import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'

const apiEndpoint = 'https://kelaseff.cdn.prismic.io/api/v2';
const accessToken = 'MC5ZSEhub0JNQUFDRUFsdm5u.O--_ve-_vX_vv714Je-_ve-_ve-_vW7vv70K77-977-9d13vv70D77-977-977-9au-_vQfvv71YA33vv70P77-9';

const BlogPage = () => {
	const [doc, setDocData] = React.useState([]);

	React.useEffect(() => {
		const client = Prismic.client(apiEndpoint, { accessToken });
		const fetchData = async () => {
			const response = await client.query(
				Prismic.Predicates.at('document.type', 'page')
			)
			if (response) {
				setDocData(response.results)
			}
		}
		fetchData();
	}, [])

	console.log(doc)

return (
	<>
    {doc?.length ? (
        <div>
          {/* <h1>{RichText.asText(doc.data.title)}</h1> */}
          {/* <img alt='cover' src={doc.data.image.url} /> */}
          {/* <RichText render={doc.data.description} /> */}
        </div>
      ) : <div>No content</div>
    }
  </>
)
}

export default BlogPage;