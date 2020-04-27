import React from "react";
import { _continue } from "@hacn/hacn";

export const CaptureExample = function*(props: any, capture: any) {
  let text = "";
  
  function valueCapture(event: any) {
    capture(event.target.value);
  }
  
  while (true) {
    text = yield (
      <React.Fragment>
        <input id="foo" onChange={valueCapture} value={text}/>
        <div>{text}</div>
      </React.Fragment>
    );
  }
};
