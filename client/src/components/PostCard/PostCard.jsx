import React from "react";
import "./post-card.scss";

const PostCard = ({ title, createdAt, content }) => {
  return (
    <div className="post-card">
      <div className="post-card_header">
        <h2>{title}</h2>
        <img src="" alt="" />
      </div>

      <span className="post-card_time">{createdAt}</span>
      <p className="post-card_content">{content}</p>
    </div>
  );
};

export default PostCard;
