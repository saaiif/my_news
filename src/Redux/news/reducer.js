import { NEWS_DETAILS, SEARCH_VALUE } from "./actionTypes";

const initialState = {
  newsdetails: [],
  searchValue: null
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_DETAILS:
      return {
        ...state,
        newsdetails: action?.payload,
      };
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action?.payload,
      };

    default:
      return state;
  }
};
