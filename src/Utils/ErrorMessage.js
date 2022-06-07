import Constants from "../Constants";

export const handleErrorMessage = (err) => {
  const errorMessage =
    err?.response?.data?.message ||
    err?.response?.data?.error ||
    Constants.ERROR_MESSAGE;

  return errorMessage;
};
