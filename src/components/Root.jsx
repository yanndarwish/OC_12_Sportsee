import React from "react"
import { Outlet } from "react-router"
import Header from "./Header/Header"
import LateralNav from "./LateralNav/LateralNav"
import Switch from "./Switch/Switch"

/**
 * Component for showing the root element containing the header + lat nav
 * @component
 * @returns {React.ReactElement}
 */

const Root = () => {
	return (
		<div>
			<Header />
			<Switch />
			<div className="flex">
				<LateralNav />
				<main className="main-container">
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default Root
