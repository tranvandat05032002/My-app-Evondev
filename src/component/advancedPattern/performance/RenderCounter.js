import React, { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import Counter from "./Counter";
// React.memo(Component)
// -> Component sẽ bị re-render khi state hoặc event(onChange) của nó thay đổi(trong trường hợp này là count)
// -> Component sẽ bị re-render khi nó có props truyền vào thay đổi
const RenderCounter = () => {
  const [filter, setFilter] = useState("");
  //   const calculator = () => {
  //     setFilter("");
  //   };
  //   const calculator = useCallback(() => setFilter(""), [setFilter]);
  const calculator = useMemo(() => setFilter(""), [setFilter]);

  return (
    <div className="p-4">
      <input
        type="text"
        className="px-3 py-2 border border-gray-400"
        placeholder="Enter anything..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Counter calculator={calculator}></Counter>
    </div>
  );
};

export default RenderCounter;
