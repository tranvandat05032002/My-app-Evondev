import { useContext, useState } from "react";
import { createContext } from "react";

const CounterContext = createContext();
function useCounter() {
  const [count, setCount] = useState(0);
  return {
    count,
    setCount,
  };
}

function CounterProvider({ value, ...props }) {
  return (
    <CounterContext.Provider value={value} {...props}></CounterContext.Provider>
  );
}
function useCount() {
  const context = useContext(CounterContext);
  if (context === "undefined")
    throw new Error("useCount must be used within CountProvider");
  return context;
}
export { CounterProvider, useCount };
