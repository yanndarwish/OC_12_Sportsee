import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"
import { useEffect, useState, React } from "react"
import { scoreFormatter } from "../../../utils/format/Formatter"
import PropTypes from "prop-types"

/**
 * Component for showing the radial chart
 * @component
 * @typedef ScoreType
 * @property {number} data
 * @returns {React.ReactElement}
 */

/** @param {ScoreType} data */

const ScoreChart = ({ data }) => {
	const [score, setScore] = useState([])

	useEffect(() => {
		setScore(scoreFormatter(data))
	}, [data])

	return (
		<article className="radial-bar-chart-wrapper flex column">
			<h3 className="chart-title">Score</h3>
			<p className="radial-score-center">
				<span id="radial-score-bold">{data && data * 100}% </span>
				de votre objectif
			</p>
			<ResponsiveContainer width="99%" height="80%">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="0%"
					outerRadius="170%"
					barSize={10}
					barGap={6}
					barCategoryGap={6}
					data={score}
					domain={[0, 100]}
					startAngle={90}
					endAngle={-270}
				>
					<RadialBar
						minAngle={15}
						clockWise
						dataKey="value"
						cornerRadius={30 / 2}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</article>
	)
}

ScoreChart.propTypes = {
	data: PropTypes.number.isRequired,
}

ScoreChart.defaultProps = {
	data: 0,
}

export default ScoreChart
