import * as React from 'react';
import Prismic from '@prismicio/client';
import {RichText, Date} from 'prismic-reactjs';
import {Link} from "react-router-dom";
import './style.css';
import Loader from './components/Loader';

import {apiEndpoint, accessToken} from '../../data/constants';
import {useDispatch, useSelector} from "react-redux";


const BlogPage = () => {
  // const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducers.posts);


  React.useEffect(() => {
    const client = Prismic.client(apiEndpoint, {accessToken});
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await client.query(
          Prismic.Predicates.at('document.type', 'blog')
        )
        if (response) {
          // setPosts(response.results)
          dispatch({type: 'UPDATE_POSTS', dataPosts: response.results})
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  const formateDate = (date) => {
    const data = Date(date)
    const formattedDate = Intl.DateTimeFormat('en-US', {
      formatMatche: "basic",
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(data);

    return formattedDate
  }

  const sortArray = (array) => {
    array.sort(function (a, b) {
      const dateA = new Date(a.data.date);
      const dateB = new Date(b.data.date);

      return dateB - dateA
    })
  }
  sortArray(posts)




  if (loading) {
    return <Loader/>
  }

  return (
    <div className="blogWraper">
      {posts.map(post => (
        <div>
          <div className="img-back"></div>
             <h1 className='blog_title'>{RichText.asText(post.data.title)}</h1>
          <div className='blog_wraper_subtitle'>
            <p className='blog_subtitle'>{RichText.asText(post.data.type)}</p>
            <p className='blog_dot'>&bull;</p>
            <p className='blog_data'>{formateDate((post.data.date))}</p>
          </div>
          <div className='blog_withLink'>
            <div className='blog_tags'>{post.tags.map(tag =>
             <p>{`#${tag}`}</p>)}</div>
            <div className='blog_preview'>
              <div className='blog_text'>{RichText.asText(post.data.text)}</div>
            </div>
            <Link className='link_BlogPost'  to={`${post.id}`}>Смотреть больше...</Link>

          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(BlogPage);