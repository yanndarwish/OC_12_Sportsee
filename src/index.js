// dependencies
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
// components
import { UserIdProvider } from "./utils/context"
import Router from "./router/Router"
// css
import "./index.css"
import "./components/Header/Header.css"
import "./components/LateralNav/LateralNav.css"
import "./pages/Home/Home.css"
import "./components/Recharts/ActivityChart/ActivityChart.css"
import "./components/Recharts/AverageSessionsChart/AverageSessionsChart.css"
import "./components/Recharts/PerformanceChart/PerformanceChart.css"
import "./components/Recharts/ScoreChart/ScoreChart.css"
import "./components/Card/Card.css"
import "./components/Switch/Switch.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<UserIdProvider>
			<RouterProvider router={Router} />
		</UserIdProvider>
	</React.StrictMode>
)
