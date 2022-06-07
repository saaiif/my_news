import Constants from "../../Constants";
import { handleErrorMessage } from "../../Utils/ErrorMessage";
import { signInPostService, getNewProfile, getNews } from "../services";
import { NEWS_DETAILS } from "./actionTypes";
import { snackbarAction } from './../common/commonActions';

export const getAllNews = (val, params) => {
  return (dispatch) => {
    getNews(val, params)
      .then((res) => {
        if (res.status === 200) {
          dispatch(newsDetails(res?.data?.articles));
          dispatch(
            snackbarAction({
              open: true,
              message: "Data fetched successfully",
              status: "success",
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          snackbarAction({
            open: true,
            message: handleErrorMessage(err),
            status: "error",
          })
        );
      });
  };
};

export const newsDetails = (user) => {
  return {
    type: NEWS_DETAILS,
    payload: user,
  };
};
