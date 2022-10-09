import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    id: 1,
    name: "Front-End",
    avatar:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};
export { useAuth, AuthProvider };
