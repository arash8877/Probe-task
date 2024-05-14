import { createContext, useState, useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState(() => {
    const localUsers = localStorage.getItem("users");
    return localUsers ? JSON.parse(localUsers) : [];
  });
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const getProfileInfo = useCallback(() => {
    // Get user data from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setName(user.name);
      setUserId(user.id);

      console.log("user", user);
    }
  }, [setName]);

  useEffect(() => {
    // Store users in local storage whenever it changes
    localStorage.setItem("users", JSON.stringify(users));
    getProfileInfo();
  }, [users, getProfileInfo]);

  const login = (inputs) => {
    const user = users.find(
      (user) => user.email === inputs.email && user.password === inputs.password
    );
    if (user) {
      setUserId(user.id);
      setName(user.name);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("trials");
    } else {
      setError("Invalid email or password!");
    }
  };
  const register = (inputs) => {
    const newUser = {
      id: users.length + 1,
      name: inputs.name,
      email: inputs.email,
      dob: inputs.dob,
      password: inputs.password,
      repeatPassword: inputs.repeatPassword,
    };
    if (inputs.password !== inputs.repeatPassword) {
      setError("Passwords do not match!");
      return;
    }
    setUsers((prevUsers) => [...prevUsers, newUser]);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("login");
  };

  const logout = () => {
    setUserId(null);
    setName(null);

    localStorage.removeItem("user");

    navigate("login");
  };

  return (
    <AuthContext.Provider
      value={{ login, userId, error, register, name, getProfileInfo, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
