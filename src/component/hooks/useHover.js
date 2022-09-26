import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  const handleHover = () => {
    setHovered(true);
  };
  const unHandleHover = () => {
    setHovered(false);
  };
  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      node.addEventListener("mouseover", handleHover);
      node.addEventListener("mouseout", unHandleHover);
    }

    return () => {
      node.removeEventListener("mouseover", handleHover);
      node.removeEventListener("mouseout", unHandleHover);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}
