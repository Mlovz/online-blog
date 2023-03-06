import { ARTICLE_TYPES } from "../types/articleTypes";

const initialState = {
  posts: [],
  post: [],
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_TYPES.GET_ARTICLES:
      return {
        ...state,
        posts: action.payload,
      };

    case ARTICLE_TYPES.GET_ARTICLE:
      return {
        ...state,
        post: [action.payload],
      };

    case ARTICLE_TYPES.UPDATE_ARTICLE:
      return {
        ...state,
        post: [action.payload],
      };

    default:
      return state;
  }
};

export default articleReducer;
