import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import users from "./users.json";
export const AuthContext = createContext();

const users = [
  {
    id: "1",
    name: "John",
    email: "john@email.com",
    password: "123456",
    dob: "11-11-2011",
  },
];

console.log(users);
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = (inputs) => {
    const user = users.find(
      (user) => user.email === inputs.email && user.password === inputs.password
    );
    if (user) {
      setUserId(user.id);
      navigate("trial");
    } else {
      setError("User not found!");
    }
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};
