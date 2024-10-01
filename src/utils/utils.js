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

export { getAccessToken };
