import { ARTICLE_TYPES } from "../types/articleTypes";

const initialState = {
  posts: [],
  blog: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_TYPES.GET_ARTICLES:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default articleReducer;
