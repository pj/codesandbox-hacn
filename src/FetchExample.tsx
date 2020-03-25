import React from "react";
import { hacn, _continue, json } from "@hacn/hacn";

export const FetchExample = hacn(function*() {
  // Render the loading message without suspending.
  yield _continue(<div>Loading...</div>);
  // Load the data from the url and suspend waiting for the result.
  const result = yield json`https://jsonplaceholder.typicode.com/todos/1`;
  // render result suspending.
  yield (
    <div>
      <div>{result.id}</div>
      <div>{result.title}</div>
      <div>{result.completed}</div>
    </div>
  );
});
