import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;
const Accommodate = (props) => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("=============");
    console.log("useEffect() is called");
    console.log(`isFulled : ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`current count : ${count}`);
  }, [count]);

  return (
    <div style={{ padding: "16px" }}>
      <p>{`총 ${count} 명이 입장하셨습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          정원이 가득 찼습니다.
        </p>
      )}
    </div>
  );
};

export default Accommodate;
