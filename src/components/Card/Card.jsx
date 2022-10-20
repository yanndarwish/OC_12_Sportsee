import { React, useState, useEffect } from "react"
import { cardFormatter } from "../../utils/format/Formatter"
import PropTypes from "prop-types"

/**
 * represents the cards on the right of the screen
 * containing the key data of the user (calories, proteins,
 * carbs, lipids)
 * 
 * @component
 * @typedef CardType
 * @property {string} name 
 * @property {number} value 
 * @returns {React.ReactElement}
 */

/** @param {CardType} name */

const Card = ({ name, value }) => {
	const [formattedData, setFormattedData] = useState({})

	// format the data
	useEffect(() => {
		let data = {
			name: name,
			value: value,
		}

		setFormattedData(cardFormatter(data))
	}, [name, value])

	return (
		<article className="card flex">
			<div
				className="icon-container flex center"
				style={{ backgroundColor: formattedData.color }}
			>
				<img src={formattedData.icon} alt="icon" />
			</div>
			<div className="info-container flex column">
				<h3 className="amount">
					{formattedData.amount + `${formattedData.unit}`}
				</h3>
				<p className="name">{formattedData.name}</p>
			</div>
		</article>
	)
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
}

Card.defaultProps = {
	name: "",
	value: 0,
}

export default Card
