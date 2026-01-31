import { useEffect, useRef, useState } from "react";

export default function Rounds({ topic, timeLimit, onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  // keep ref in sync with state
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          onTimeout(countRef.current); // fixed: always the latest count!
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeout, timeLimit]);

  return (
    <>
      <h2>{topic}</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount((c) => c + 1)}>+</button>

      <p>{timeLeft}s</p>
    </>
  );
}
