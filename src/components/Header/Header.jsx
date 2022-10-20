import logo from "../../assets/logo.svg"
import React from "react"
import { Link } from "react-router-dom"

/**
 * Component for showing header/ main nav
 * @component
 * @returns {React.ReactElement}
 */

const Header = () => {
	return (
		<header className="header flex">
			<img src={logo} alt="SportSee Logo" />
			<nav className="main-nav flex">
				<Link to="/">Accueil</Link>
				<Link to="/">Profil</Link>
				<Link to="/">Réglage</Link>
				<Link to="/">Communauté</Link>
			</nav>
		</header>
	)
}

export default Header
