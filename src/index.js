import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (!window.location.pathname.endsWith("/PersonalPage/")) {
	console.log(window.location.pathname);
	window.history.replaceState(null, "", "/PersonalPage/");
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
