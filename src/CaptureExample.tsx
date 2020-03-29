import React from "react";
import { hacn, _continue, capture } from "@hacn/hacn";

export const CaptureExample = hacn(function*() {
  const changeCapture = yield capture();
  let text = "";
  
  function valueCapture(event: any) {
    changeCapture(event.target.value);
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
