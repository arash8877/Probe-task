import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usersDb from "./users.json";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState(usersDb);
  const [name, setName] = useState("xx");
  const navigate = useNavigate();

  useEffect(() => {
    // Store users in local storage whenever it changes
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const login = (inputs) => {
    const user = users.find(
      (user) => user.email === inputs.email && user.password === inputs.password
    );

    if (user) {
      setUserId(user.id);
      setName(user.name);
      navigate("trial");
    } else {
      setError("User not found!");
    }
  };

  const register = (inputs) => {
    const newUser = {
      id: users.length + 1,
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    navigate("login");
  };

  return (
    <AuthContext.Provider value={{ login, error, register, name }}>
      {children}
    </AuthContext.Provider>
  );
};
