import {
	BarChart,
	Bar,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts"
import React, { useContext, useEffect, useState } from "react"
import { UserIdContext } from "../../../utils/context"
import { useFetchActivity } from "../../../utils/hooks"

/**
 * Component for showing the main bar chart
 * @component
 * @returns {React.ReactElement}
 */

const ActivityChart = () => {
	const [activity, setActivity] = useState([])
	const { userId } = useContext(UserIdContext)
	const { data, isLoading, error } = useFetchActivity(userId)

	// set Activity when loading is done
	useEffect(() => {
		isLoading === false && setActivity(data.data.sessions)
	}, [isLoading])

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip bar-chart-tooltip">
					<p className="label">{payload[0].value + payload[0].unit}</p>
					<p className="intro">{payload[1].value + payload[1].unit}</p>
				</div>
			)
		}

		return null
	}

	const renderLegend = (props) => {
		const { payload } = props

		return (
			<ul className="legend-container flex">
				{payload.map((entry, index) => (
					<li key={`item-${index}`} className="flex legend-item">
						<div
							className="legend-color"
							style={{ background: `${payload[index].color}` }}
						></div>
						{entry.value}
					</li>
				))}
			</ul>
		)
	}

	if (error) {
		return <span>Oups ! Une erreur est survenue</span>
	}

	return (
		<article className="bar-chart-wrapper">
			<h3 className="chart-title bar-chart-title">Activité quotidienne</h3>
			<ResponsiveContainer width="100%" height="80%">
				<BarChart
					data={activity.length && activity}
					margin={{ top: 32, right: 0, bottom: 0, left: 0 }}
					barGap={7}
				>
					<Tooltip
						content={<CustomTooltip />}
						wrapperStyle={{ outline: "none" }}
					/>
					<CartesianGrid vertical={false} stroke="#ccc" strokeDasharray="7 7" />
					<XAxis
						dataKey="day"
						tickLine={false}
						tickFormatter={(label, index) => `${index + 1}`}
						tick={{ transform: "translate(0, 10)" }}
					/>
					<YAxis
						hide={true}
						tickLine={false}
						domain={["dataMin - 100", "dataMax"]}
						axisLine={false}
						orientation="right"
					/>

					<YAxis
						tickLine={false}
						yAxisId="left"
						axisLine={false}
						tick={{ transform: "translate(20, 0)" }}
						domain={["dataMin - 20", "dataMax + 10"]}
						orientation="right"
					/>
					<Bar
						yAxisId="left"
						name="Poids (kg)"
						unit="kg"
						dataKey="kilogram"
						fill="black"
						radius={[20, 20, 0, 0]}
						barSize={10}
					/>
					<Bar
						name="Calories brûlées (kCal)"
						unit="kCal"
						dataKey="calories"
						fill="#E60000"
						radius={[20, 20, 0, 0]}
						barSize={10}
					/>
					<Legend
						content={renderLegend}
						verticalAlign="top"
						align="right"
						iconType="circle"
						iconSize="10"
					/>
				</BarChart>
			</ResponsiveContainer>
		</article>
	)
}

export default ActivityChart
