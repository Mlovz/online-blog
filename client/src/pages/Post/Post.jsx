import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { api } from "../../api";
import moment from "moment";
import "./post.scss";
import FavoriteBtn from "../../components/FavoriteBtn/FavoriteBtn";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../../redux/actions/artcleAction";

const Post = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.article);

  useEffect(() => {
    if (id) {
      dispatch(getArticle(id));
    }
  }, [id, dispatch]);

  return (
    <div className="container">
      <div className="detail">
        {post?.map((item) => (
          <div key={item._id} className="detail_post">
            <img src={item.images[0].url} alt="" />

            <FavoriteBtn post={item} />

            <div className="detail_info">
              <h2>{item.title}</h2>
              <span>{moment(item.createdAt).startOf("sec").fromNow()}</span>
              <p>{item.content}</p>
            </div>

            <div className="detail_footer">
              <div className="detail_user">
                <img src={item.user.avatar} alt="" />
                <span>{item.user.username}</span>
              </div>

              <div className="detail_favorite">
                <img src="/favorite.svg" alt="" />
                <span>{item.likes.length}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
