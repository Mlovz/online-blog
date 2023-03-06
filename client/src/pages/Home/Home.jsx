import React, { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import "./home.scss";

import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../redux/actions/artcleAction";
import PostCard from "../../components/PostCard/PostCard";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="home">
        <Heading>Unusual blog</Heading>

        <div className="home_box">
          {posts.length === 0 ? (
            <Heading>Постов нет</Heading>
          ) : (
            posts.map((item) => (
              <PostCard
                key={item.id}
                id={item._id}
                title={item.title}
                createdAt={item.createdAt}
                content={item.content}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
