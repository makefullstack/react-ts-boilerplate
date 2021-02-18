import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const Root: React.FC = () => {
  return <App />;
};

ReactDOM.render(<Root />, document.querySelector("#root"));
