import { createContext, useContext, useState } from "react";

const CountContext = createContext();

const CounterProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const value = [counter, setCounter];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
};

const useCount = () => {
  const context = useContext(CountContext);
  if (typeof context === "undefined") {
    throw new Error("useContext must be used with a CounterProvider");
  }
  return context;
};

export { CounterProvider, useCount };
