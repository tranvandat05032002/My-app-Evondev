import { useReducer } from "react";

const counterReducer = ({ count }, { type }) => {
  switch (type) {
    case "increment":
      return {
        count: count + 1,
      };
    case "decrement":
      return {
        count: count - 1,
      };
    default:
      break;
  }
};
export default function useCounter(
  { initialValue = 0 } = {},
  reducer = counterReducer
) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initialValue });
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}
