import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import "./header.css";

const Header = (props) => {
  const { isAuth, user } = useSelector((state) => state.auth);

  return (
    <div className="header">
      <div className="container">
        <div className="header_wrap">
          <Link to="/" className="header_logo"></Link>

          {isAuth ? (
            <div className="header_auth">
              <Button variant="solid" to="/add-post">
                Добавить пост
              </Button>
              <div className="header_auth_user">
                <img src={user.avatar} alt="" />
              </div>
            </div>
          ) : (
            <div className="header_btns">
              <Button variant="solid" to="/login">
                Войти
              </Button>
              <Button variant="outline" to="/register">
                Регистрация
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
