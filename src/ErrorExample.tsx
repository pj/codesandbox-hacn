import React from "react";

const ErroringComponent = function* (props: any, capture: any) {
  yield (<button onClick={capture}>Cause Error</button>)
  throw new Error("An error occured");
};

export const ErrorExample = function*() {
  try {
    // @ts-ignore
    yield <ErroringComponent />;
  } catch (e) {
    yield (
      <div id="error" style={{ color: "red" }}>
        {e.message}
      </div>
    );
  }
};
