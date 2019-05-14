import { useState, useEffect, useRef } from "react";

const Blink = ({ position, children: renderFn }) => {
  const [off, setOff] = useState(false);

  useEffect(() => {
    setOff(false);
  }, [position]);

  useInterval(
    () => {
      setOff(!off);
    },
    500,
    position
  );

  return renderFn({ off: off });
};

function useInterval(callback, delay, reset) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay, reset]);
}

export default Blink;
