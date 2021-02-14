import { useState, useEffect } from "react";

const useWindowMousePosition = () => {
  let [WindowMousePosition, setWindowMousePosition] = useState({
    x: null,
    y: null,
  });

  function handleMouseMove(e) {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return WindowMousePosition;
};

export default useWindowMousePosition;
