import React from "react";
import { useState } from "react";
export default function Counter() {
  const [x, setX] = useState(0);
  return (
    <div className="flex flex-col items-center mt-4 justify-center">
      <div className="bg-pink-100 px-40 py-20">
        <div className="flex flex-col bg-pink-500 items-center rounded-lg">
          <h1 className="text-6xl text-white"> {x}</h1>
          <div className="m-10">
            <button
              className="border bg-white px-10 py-4 rounded-lg font-semibold m-10"
              onClick={() => setX(x + 1)}
            >
              Increment
            </button>
            <button
              className="border bg-white font-semibold py-4 px-10 rounded-lg"
              onClick={() => setX(x - 1)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
