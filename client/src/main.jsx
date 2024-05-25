import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";


export const server = import.meta.env.VITE_SERVER_VARIABLE;
console.log(server);
export const Context = createContext({ isAuthenticated: false });

const Appwraper = () => {
  const [isAuthenticated, setAthu] = useState(false);
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setAthu,
        loader,
        setLoader,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Appwraper />
  </React.StrictMode>
);
