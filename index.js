import React from "react";
import ReactDOM from "react-dom";

import App from "./src/app";

export const init = function () {
    ReactDOM.render(<App />, document.getElementById("root"));
};

export default init;
