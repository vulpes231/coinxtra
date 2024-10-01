const getAccessToken = () => {
  const tokenString = sessionStorage.getItem("accessToken");
  if (!tokenString) return false;

  try {
    return JSON.parse(tokenString);
  } catch (error) {
    console.error("Error parsing access token:", error);
    return false;
  }
};

const sendError = (error) => {
  if (error.response) {
    const errMsg = error.response.message.data;
    throw new Error(errMsg);
  } else {
    throw error;
  }
};

export { getAccessToken, sendError };
