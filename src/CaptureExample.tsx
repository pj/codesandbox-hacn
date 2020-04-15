import React from "react";
import { hacn, _continue } from "@hacn/hacn";

export const CaptureExample = hacn(function*(props, capture) {
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
});
