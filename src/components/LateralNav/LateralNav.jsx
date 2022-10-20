import React from "react"
import { Link } from "react-router-dom"
import meditation from "../../assets/meditation.svg"
import swimmer from "../../assets/swimmer.svg"
import biker from "../../assets/biker.svg"
import dumbell from "../../assets/dumbell.svg"

/**
 * Component for showing left lateral nav (left nav)
 * @component
 * @returns {React.ReactElement}
 */

const LateralNav = () => {
	return (
		<aside className="secondary-nav-container flex column">
			<nav className="secondary-nav flex column">
				<Link to="/">
					<div className="side-nav-button flex center">
						<img src={meditation} alt="meditation app" />
					</div>
				</Link>
				<Link to="/">
					<div className="side-nav-button flex center">
						<img src={swimmer} alt="swimmer app" />
					</div>
				</Link>
				<Link to="/">
					<div className="side-nav-button flex center">
						<img src={biker} alt="biker app" />
					</div>
				</Link>
				<Link to="/">
					<div className="side-nav-button flex center">
						<img src={dumbell} alt="dumbell app" />
					</div>
				</Link>
			</nav>
			<p className="copyright">Copiryght, SportSee 2020</p>
		</aside>
	)
}

export default LateralNav
