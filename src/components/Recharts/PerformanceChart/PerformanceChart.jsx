import {
	Radar,
	RadarChart,
	PolarGrid,
	Text,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts"
import { React, useContext, useEffect, useState } from "react"
import { UserIdContext } from "../../../utils/context"
import { useFetchPerformance } from "../../../utils/hooks"
import { performanceFormatter } from "../../../utils/format/Formatter"

/**
 * Component for showing the radar chart
 * @component
 * @returns {React.ReactElement}
 */

const PerformanceChart = () => {
	const [performance, setPerformance] = useState([])
	const { userId } = useContext(UserIdContext) //context here for presentation, but should be in url params
	const { data, isLoading, error } = useFetchPerformance(userId)

	// set Performance when loading is done
	useEffect(() => {
		isLoading === false && setPerformance(performanceFormatter(data.data))
	}, [isLoading])

	// add margin between the radar and the legends
	function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
		return (
			<Text
				{...rest}
				verticalAnchor="middle"
				y={y + (y - cy) / 5}
				x={x + (x - cx) / 6}
			>
				{payload.value}
			</Text>
		)
	}

	if (error) {
		return <span>Oups ! Une erreur est survenue</span>
	}

	return (
		<article className="radar-chart-wrapper flex">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					outerRadius={90}
					startAngle={-150}
					endAngle={210}
					data={ performance}
				>
					<PolarGrid />
					<PolarAngleAxis
						dataKey="subject"
						stroke="white"
						tickLine={false}
						tick={(props) => renderPolarAngleAxis(props)}
					/>
					<PolarRadiusAxis
						angle={30}
						domain={[0, 100]}
						tick={false}
						axisLine={false}
					/>
					<Radar
						name="Mike"
						dataKey="value"
						stroke="#e60000"
						fill="#e60000"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</article>
	)
}

export default PerformanceChart
