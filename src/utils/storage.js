export const login = () => localStorage.setItem("auth", "true");
export const logout = () => localStorage.removeItem("auth");
export const isAuth = () => localStorage.getItem("auth") === "true";

export const getEmployees = () =>
  JSON.parse(localStorage.getItem("employees")) || [];

export const saveEmployees = (data) =>
  localStorage.setItem("employees", JSON.stringify(data));
