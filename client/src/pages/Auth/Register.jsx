import React, { useState } from "react";
import "./auth.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });
  const [err, setErr] = useState("");

  const { username, password, confirm_password } = userData;

  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm_password) return setErr("Пароли не совпадают!");

    setErr("");

    dispatch(register(userData, navigate));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth">
      <div className="auth_box">
        <Heading>Регистрация</Heading>

        <form className="auth_box_form" onSubmit={onSubmit}>
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
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm password"
            required
            value={confirm_password}
            onChange={handleChange}
          />

          <span className="error fs-12">{err}</span>

          <Button fullWidth variant="solid" type="submit">
            Регистрация
          </Button>
        </form>
        <p className="auth_text fs-12">
          Есть аккаунт?
          <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
