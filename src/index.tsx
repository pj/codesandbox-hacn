import * as React from "react";
import { render } from "react-dom";
import { FetchExample } from "./FetchExample";
import './styles.css'; 
import { CaptureExample } from "./CaptureExample";
import { ErrorExample } from "./ErrorExample";
import { loadHacn } from "@hacn/hacn";
loadHacn();

function RerenderWrapper(props: {RerenderComponent: React.FunctionComponent<any>}) {
  const RerenderComponent = props.RerenderComponent;
  const [_, setRerenderState] = React.useState(false);
  return (
    <div>
      <button onClick={() => setRerenderState((prevState) => !prevState)}>
        Re-render
      </button>
      <RerenderComponent key={Math.random()}/>
    </div>
  );
}

const fetchElement = document.getElementById("fetch_example");
render(
    <RerenderWrapper RerenderComponent={FetchExample} />,
    fetchElement
);

const captureElement = document.getElementById("capture_example");
render(
    // @ts-ignore
    <CaptureExample />,
    captureElement
);

const errorElement = document.getElementById("error_example");
render(
    // @ts-ignore
    <RerenderWrapper RerenderComponent={ErrorExample} />,
    errorElement
);
