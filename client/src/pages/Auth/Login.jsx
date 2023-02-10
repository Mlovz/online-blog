import React, { useState } from "react";
import "./auth.scss";
import { Link, Navigate } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userData;

  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(userData));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth">
      <div className="auth_box">
        <Heading>Войти</Heading>

        <form noValidate className="auth_box_form" onSubmit={handleLogin}>
          <Input
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleChange}
          />
          <p className="auth_text fs-12">
            <Link to="/forgot">Забыли пароль?</Link>
          </p>
          <Button fullWidth variant="solid" type="submit">
            Войти
          </Button>
        </form>

        <p className="auth_text fs-12">
          Нет аккаунта?
          <Link to="/register">Создать аккаунт</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
