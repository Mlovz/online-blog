import { api } from "../../api";
import { ALERT_TYPES } from "../types/alertTypes";
import { ARTICLE_TYPES } from "../types/articleTypes";

export const getArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: true } });

    const res = await api.get("/api/home/articles");
    if (res.data) {
      dispatch({
        type: ARTICLE_TYPES.GET_ARTICLES,
        payload: res.data.articles,
      });
    }

    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: false } });
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: true } });

    const res = await api.get(`/api/article/${id}`);

    if (res.data) {
      dispatch({
        type: ARTICLE_TYPES.GET_ARTICLE,
        payload: res.data,
      });
    }

    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({ type: ALERT_TYPES.ALERT, payload: { loading: false } });
  }
};

export const like =
  ({ auth, post }) =>
  async (dispatch) => {
    console.log(auth, post);

    try {
      const newPost = { ...post, likes: [...post.likes, auth.user._id] };

      dispatch({ type: ARTICLE_TYPES.UPDATE_ARTICLE, payload: newPost });

      const res = await api.patch(`/api/article/${post._id}/like`);

      console.log(res);
    } catch (err) {}
  };
