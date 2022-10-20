import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts"
import { React, useContext, useEffect, useState } from "react"
import { UserIdContext } from "../../../utils/context"
import { useFetchAverage } from "../../../utils/hooks"

/**
 * Component for showing the line chart
 * @component
 * @returns {React.ReactElement}
 */

const AverageSessionsChart = () => {
	const [sessions, setSessions] = useState([])
	const { userId } = useContext(UserIdContext)
	const { data, isLoading, error } = useFetchAverage(userId)
	const days = ["L", "M", "M", "J", "V", "S", "D"]

	// set Sessions when loading is done
	useEffect(() => {
		isLoading === false && setSessions(data.data.sessions)
	}, [isLoading])

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip line-chart-tooltip">
					<p className="label">{payload[0].value + payload[0].unit}</p>
				</div>
			)
		}
		return null
	}

	if (error) {
		return <span>Oups ! Une erreur est survenue</span>
	}

	return (
		<article className="line-chart-wrapper flex column">
			<h3 className="chart-title">Durée moyenne des sessions</h3>
			<ResponsiveContainer width="100%" height="90%">
				<LineChart
					className="line-chart"
					data={sessions.length && sessions}
					margin={{
						top: 20,
						right: 0,
						left: 0,
						bottom: 20,
					}}
				>
					<XAxis
						dataKey={"day"}
						tickFormatter={(label) => `${days[label - 1]}`}
						axisLine={false}
						tickLine={false}
						tick={{
							fill: "white",
							fillOpacity: "0.8",
							transform: "translate(0, 20)",
						}}
						padding={{ left: 15, right: 15 }}
					/>
					<YAxis hide={true} />
					<Tooltip
						content={<CustomTooltip />}
						wrapperStyle={{ outline: "none" }}
						cursor={{
							height: "200%",
							stroke: "#E60001",
							strokeWidth: 50,
							transform: `translate(100px, 0px)`,
						}}
					/>
					<defs>
						<linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="white" stopOpacity={0.3} />
							<stop offset="100%" stopColor="white" />
						</linearGradient>
					</defs>
					<Line
						type="monotone"
						unit="min"
						dataKey="sessionLength"
						stroke="url(#linear)"
						strokeWidth={2}
						dot={false}
						activeDot={{
							stroke: "white",
							strokeWidth: 2,
							fill: "white",
							r: 10,
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</article>
	)
}

export default AverageSessionsChart
