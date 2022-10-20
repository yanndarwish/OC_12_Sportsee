import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home"
import Root from "../components/Root"

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
])

export default Router
