import React from "react";
import { hacn, _continue, json, timeout, all } from "@hacn/hacn";

export const FetchExample = hacn(function*() {
  // Render the loading message without suspending.
  yield _continue(<div>Loading...</div>);
  // Load the data from the url and suspend waiting for the result.
  const result = yield _continue(json`https://jsonplaceholder.typicode.com/todos/1`);

  // Display loading for awhile.
  const te = yield _continue(timeout(1000));

  const [data, _] = yield all(result, te);
  // render result suspending.
  yield (
    <div>
      <div><strong>id:</strong> {data.id}</div>
      <div><strong>title:</strong> {data.title}</div>
      <div><strong>completed:</strong> {data.completed}</div>
    </div>
  );
});
