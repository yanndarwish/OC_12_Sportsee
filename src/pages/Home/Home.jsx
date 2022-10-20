import { React, useContext, useState, useEffect } from "react"
import { UserIdContext } from "../../utils/context"
import { useFetchUser } from "../../utils/hooks"
import { userFormatter } from "../../utils/format/Formatter"

// components
import ActivityChart from "../../components/Recharts/ActivityChart/ActivityChart"
import AverageSessionsChart from "../../components/Recharts/AverageSessionsChart/AverageSessionsChart"
import PerformanceChart from "../../components/Recharts/PerformanceChart/PerformanceChart"
import ScoreChart from "../../components/Recharts/ScoreChart/ScoreChart"
import Card from "../../components/Card/Card"

/**
 * Component for showing the home page
 * @component
 * @returns {React.ReactElement}
 */

const Home = () => {
	const { userId } = useContext(UserIdContext)
	const [user, setUser] = useState({})
	const { data, error, isLoading } = useFetchUser(userId)

	// set User when loading is done
	useEffect(() => {
		isLoading === false && setUser(userFormatter(data.data))
	}, [isLoading])

	//boolean to check if user object is empty
	const isEmpty = Object.keys(user).length === 0

	if (error) {
		return <span>Oups ! Une erreur est survenue</span>
	}

	return (
		<div className="home-container">
			<section className="home-heading flex column">
				<h1 className="home-header">
					Bonjour{" "}
					<span className="username">
						{!isEmpty && user.userInfos.firstName}
					</span>
				</h1>
				<p className="welcome">
					Félicitations ! Vous avez explosé vos objectifs hier 👏
				</p>
			</section>
			<section className="charts-section grid">
				<section className="main-charts-section flex column">
					<div className="top-chart">
						<ActivityChart />
					</div>
					<div className="bottom-charts flex">
						<AverageSessionsChart />
						<PerformanceChart />
						<ScoreChart data={user.score} />
					</div>
				</section>
				<aside className="side-section flex column">
					{user.keyData &&
						Object.keys(user.keyData).map((item, index) => (
							<Card key={index} name={item} value={user.keyData[item]} />
						))}
				</aside>
			</section>
		</div>
	)
}

export default Home
