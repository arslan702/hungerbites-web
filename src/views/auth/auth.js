export const login = (payload) => {
  //   return apiPost("/adminLogin", payload).then((response) => {
  //     return localStorage.setItem("token", response.data?.token);
  //   });
};

export const logout = () => {
  return localStorage.clear();
};

export const getProfile = () => {
  const authToken = localStorage.getItem("token");
  //   return apiGet("/adminProfile", authToken).then((response) => {
  //     return response?.data?.adminProfile?.user;
  //   });
};
