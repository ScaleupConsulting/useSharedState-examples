import React, { useState, useEffect } from "react";
import { SharedStateTarget } from "@scaleup-consulting/use-shared-state";

const SHARED_STATE_COUNTER = new SharedStateTarget(0);
const SHARED_STATE_TEXT = new SharedStateTarget('');

export default function UseEffect() {
  const [count, setCount] = SHARED_STATE_COUNTER.useSharedState();
  const [text, setText] = SHARED_STATE_TEXT.useSharedState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    setText(`You clicked ${count} times`);
    document.title = text;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
