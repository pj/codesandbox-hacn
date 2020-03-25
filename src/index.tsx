import * as React from "react";
import { render } from "react-dom";
import { FetchExample } from "./FetchExample";

const fetchElement = document.getElementById("fetch_example");
render(<FetchExample />, fetchElement);
