import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../redux/actions/artcleAction";
import "./favorite.scss";

const FavoriteBtn = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const handleLike = () => {
    setIsLike(true);
    dispatch(like({ auth, post }));
  };

  const handleUnLike = () => {
    setIsLike(false);
  };

  useEffect(() => {
    if (post.likes.find((item) => item === auth.user._id)) {
      setIsLike(true);
    }
  }, [post.likes, auth.user]);

  return (
    <>
      {isLike ? (
        <div className="favorite_btn" onClick={handleUnLike}>
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87492 1.75C4.09048 1.75 1.83325 4.00725 1.83325 6.79167C1.83325 11.8333 7.79159 16.4167 10.9999 17.4828C14.2083 16.4167 20.1666 11.8333 20.1666 6.79167C20.1666 4.00725 17.9093 1.75 15.1249 1.75C13.4198 1.75 11.9123 2.5965 10.9999 3.89216C10.0875 2.5965 8.58006 1.75 6.87492 1.75Z"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      ) : (
        <div className="favorite_btn" onClick={handleLike}>
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87492 1.75C4.09048 1.75 1.83325 4.00725 1.83325 6.79167C1.83325 11.8333 7.79159 16.4167 10.9999 17.4828C14.2083 16.4167 20.1666 11.8333 20.1666 6.79167C20.1666 4.00725 17.9093 1.75 15.1249 1.75C13.4198 1.75 11.9123 2.5965 10.9999 3.89216C10.0875 2.5965 8.58006 1.75 6.87492 1.75Z"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default FavoriteBtn;
