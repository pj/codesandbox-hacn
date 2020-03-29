import React from "react";
import { hacn, capture } from "@hacn/hacn";

const ErroringComponent = hacn(function* () {
  const clickCapture = yield capture();
  yield (<button onClick={clickCapture}>Cause Error</button>)
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
