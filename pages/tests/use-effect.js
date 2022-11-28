import React, { useEffect } from "react";
import { SharedStateTarget } from "@scaleup-consulting/use-shared-state";

const SHARED_STATE_COUNTER = new SharedStateTarget(0);
const SHARED_STATE_TEXT = new SharedStateTarget("");

export default function UseEffect() {
  const [count, setCount] = SHARED_STATE_COUNTER.useSharedState();
  const [text, setText] = SHARED_STATE_TEXT.useSharedState();

  useEffect(() => {
    setText(Date.now());
  },[setText, count]);

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
