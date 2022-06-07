import Constants from "../../Constants";
import { snackbar } from "../common/commonActions";
import { signInPostService, getNewProfile } from "../services";
import { NEWS_DETAILS } from "./actionTypes";
import { TRAINEE_PATH, HOME_PATH } from "../../Routes/routesPath";
import { handleErrorMessage } from "../../utils/ErrorMessage";

export const postSigninData = (
  values,
  setValues,
  dispatch,
  navigate,
  setLoader,
  checkDisFunc,
  parseJwt
) => {
  const newData = { username: values?.email, password: values?.password };
  return () => {
    signInPostService(newData)
      .then((response) => {
        const { data } = response;

        if (data) {
          const checkRole = parseJwt(data?.["jwt-token"])?.roles?.[0];

          checkDisFunc &&
            dispatch(
              userDetails({
                values,
                token: data?.["jwt-token"],
                parsedData: parseJwt(data?.["jwt-token"]),
              })
            );
          checkDisFunc &&
            dispatch(
              snackbar({
                open: true,
                message: Constants.SIGNIN_MESSAGE,
                status: "success",
              })
            );

          setTimeout(() => {
            setLoader && setLoader(false);
            navigate(
              checkRole?.toUpperCase() === Constants.ADMIN
                ? `${TRAINEE_PATH}`
                : `${HOME_PATH}`
            );
            setValues({ email: "", password: "" });
          }, 500);
        }
      })
      .catch((err) => {
        setLoader && setLoader(false);
        checkDisFunc &&
          dispatch(
            snackbar({
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
