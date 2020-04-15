import React from "react";
import { hacn } from "@hacn/hacn";

const ErroringComponent = hacn(function* (props, capture) {
  yield (<button onClick={capture}>Cause Error</button>)
  throw new Error("An error occured");
});

export const ErrorExample = hacn(function*() {
  try {
    yield <ErroringComponent />;
  } catch (e) {
    yield (
      <div id="error" style={{ color: "red" }}>
        {e.message}
      </div>
    );
  }
});
