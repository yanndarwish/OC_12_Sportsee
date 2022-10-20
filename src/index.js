// dependencies
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
// components
import { UserIdProvider } from "./utils/context"
import Router from "./router/Router"
// css
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<UserIdProvider>
			<RouterProvider router={Router} />
		</UserIdProvider>
	</React.StrictMode>
)
