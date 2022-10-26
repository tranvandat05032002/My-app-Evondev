import React, { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import Counter from "./Counter";
// React.memo(Component)
// -> Component sẽ bị re-render khi state hoặc event(onChange) của nó thay đổi(trong trường hợp này là count)
// -> Component sẽ bị re-render khi nó có props truyền vào thay đổi
//Memorized
const RenderCounter = () => {
  const [filter, setFilter] = useState("");
  //useCallback
  const calculator = useCallback(() => setFilter(""), [setFilter]);
  //useMemo
  const data = useMemo(() => ({ success: false }), []);

  return (
    <div className="p-4">
      <input
        type="text"
        className="px-3 py-2 border border-gray-400"
        placeholder="Enter anything..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Counter calculator={calculator} data={data}></Counter>
    </div>
  );
};

export default RenderCounter;
