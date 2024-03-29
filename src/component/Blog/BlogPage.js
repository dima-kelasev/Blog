import * as React from "react";
import Prismic from "@prismicio/client";
import { RichText, Date } from "prismic-reactjs";
import { Link } from "react-router-dom";
import "./style.css";
import Loader from "./components/Loader";

import { apiEndpoint, accessToken } from "../../data/constants";

import { getRandomArray } from "../../service/service.js";

const BlogPage = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedTag, setSelectedTag] = React.useState("");
  const [arrayTag, setArrayTag] = React.useState([]);
  const [active, setIsActive] = React.useState(false);

  const client = Prismic.client(apiEndpoint, { accessToken });

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = [Prismic.Predicates.at("document.type", "blog")];
      if (selectedTag) {
        params.push(Prismic.Predicates.at("document.tags", [selectedTag]));
      }
      const response = await client.query(params);
      if (response) {
        setPosts(response.results);
        if (!arrayTag.length) {
          const tags = response.results.map((obj) => obj.tags).flat();
          const newEl = getRandomArray(tags);
          setArrayTag(newEl);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [selectedTag]);

  const formateDate = (date) => {
    const data = Date(date);
    const formattedDate = Intl.DateTimeFormat("en-US", {
      formatMatche: "basic",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(data);

    return formattedDate;
  };

  const sortArray = (array) => {
    array.sort(function (a, b) {
      const dateA = new Date(a.data.date);
      const dateB = new Date(b.data.date);

      return dateB - dateA;
    });
  };
  sortArray(posts);

  const handleChangeBackground = (tag) => {
    setIsActive(!active);
    setSelectedTag(tag);
    if (selectedTag) {
      setSelectedTag("");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="blogWraper">
      <div className="search_tags ">
        {arrayTag.slice(0, 5).map((tag, idx) => (
          <p
            key={idx}
            className={selectedTag === tag ? "tags activeTags" : "tags"}
            onClick={() => handleChangeBackground(tag)}
          >{`#${tag}`}</p>
        ))}
      </div>

      {posts.map((post, idx) => (
        <div key={idx}>
          <h1 className="blog_title">{RichText.asText(post.data?.title)}</h1>
          <div className="blog_wraper_subtitle">
            <p className="blog_subtitle">{RichText.asText(post.data?.type)}</p>
            <p className="blog_dot">&bull;</p>
            <p className="blog_data">{formateDate(post.data?.date)}</p>
          </div>
          <div className="blog_withLink">
            <div className="blog_tags">
              {post.tags.map((tag, idx) => (
                <p key={idx}>{`#${tag}`}</p>
              ))}
            </div>
            <div className="blog_preview">
              <div className="blog_text">
                {RichText.asText(post.data?.text)}
              </div>
            </div>
            <Link className="link_BlogPost" to={`${post.id}`}>
              Читать дальше...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(BlogPage);
