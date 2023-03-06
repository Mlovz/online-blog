import React from "react";
import "./post-card.scss";
import { Link } from "react-router-dom";

import moment from "moment";

const PostCard = ({ id, title, createdAt, content }) => {
  return (
    <Link to={`/post/${id}`} className="post-card">
      <div className="post-card_header">
        <h2>{title}</h2>
        <img src="" alt="" />
      </div>

      <span className="post-card_time">
        {moment(createdAt).startOf("sec").fromNow()}
      </span>
      <p className="post-card_content">{content}</p>
    </Link>
  );
};

export default PostCard;
