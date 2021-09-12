import * as React from "react";
import { apiEndpoint, accessToken } from "../../../data/constants";
import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "../../NotFound/NotFound";

const Post = () => {
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    const client = Prismic.client(apiEndpoint, { accessToken });
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await client.getByID(id);
        setPost(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, []);

  console.log(post);

  if (loading) {
    return <Loader />;
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="blogWraper">
      <Link className="linkBack" to="/Blog">
        Back
      </Link>
      <h1 className="blog_title blog_title_Post">
        {RichText.asText(post.data.title)}
      </h1>
      <div className="blog_text">
        {RichText.render(post.data.first_article)}
      </div>
      <img className="imgBlog" src={post.data.logo_page.url} />
      <div className="blog_text">{RichText.render(post.data.text)}</div>
      <img className="imgBlog" src={post.data.img_1.url} />
      <img className="imgBlog" src={post.data.img_2.url} />
      <img className="imgBlog" src={post.data.img_3.url} />
      <div className="blog_text">{RichText.render(post.data.text_2)}</div>
      <img className="imgBlog" src={post.data.img_4.url} />
      <img className="imgBlog" src={post.data.img_41.url} />
      <div className="blog_text">{RichText.render(post.data.text_3)}</div>
      <img className="imgBlog" src={post.data.img_5.url} />
      <div className="blog_text">{RichText.render(post.data.text_4)}</div>
      <img className="imgBlog" src={post.data.img_6.url} />
      <div className="blog_text">{RichText.render(post.data.end)}</div>
      <img className="imgBlog" src={post.data.last_foto.url} />
      <Link className="linkBackMobile" to="/Blog">
        Back
      </Link>
    </div>
  );
};

export default Post;
