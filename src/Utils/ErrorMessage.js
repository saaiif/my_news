import Constants from "../Constants";

export const handleErrorMessage = (err) => {
  console.log(err, "err99");
  const errorMessage =
    err?.response?.data?.message ||
    err?.response?.data?.error ||
    Constants.ERROR_MESSAGE;

  return errorMessage;
};
