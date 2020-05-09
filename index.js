import React from "react";
import ReactDOM from "react-dom";

import { App } from "./src/app";

const init = function () {
    ReactDOM.render(<App />, document.getElementById("root"));
};

init();
