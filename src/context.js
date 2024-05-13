import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import users from "../users.json";

export const AuthContext = createContext();
const navigate = useNavigate();


const login = (inputs) => {
  const user = users.find(
    (user) => user.email === inputs.email && user.password === inputs.password
  );

  if (user) {
    navigate('trial')
  }
};

export const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
