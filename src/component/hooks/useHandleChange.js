import { useState } from "react";

export default function useHandleChange(initializeValue) {
  const [values, setValues] = useState(initializeValue);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleChange,
  };
}
