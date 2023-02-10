import axios from "axios";
import { api } from "../../api";

import { ALERT_TYPES } from "../types/alertTypes";
import { AUTH_TYPES } from "../types/authTypes";

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: true } });

    const res = await axios.post("http://localhost:5000/api/login", userData);

    if (res.data) {
      localStorage.setItem("token", res.data.access_token);
      dispatch({
        type: AUTH_TYPES.AUTH,
        payload: {
          user: res.data.user,
          token: res.data.access_token,
          isAuth: true,
        },
      });
    }

    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: { loading: false },
    });
  } catch (err) {
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: { loading: false },
    });
  }
};

export const register = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: true } });

    const res = await axios.post(
      "http://localhost:5000/api/register",
      userData
    );

    if (res.data) {
      navigate("/login");
    }

    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: false } });
  }
};

export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: true } });

      const res = await api.get("/api/refresh_token");

      if (res.data) {
        dispatch({
          type: AUTH_TYPES.AUTH,
          payload: {
            user: res.data.user,
            token: res.data.access_token,
            isAuth: true,
          },
        });
      }

      dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: false } });
    }
  }
};
