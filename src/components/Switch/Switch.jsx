import { useContext, React } from "react"
import { UserIdContext } from "../../utils/context"

/**
 * Component for showing the switch button to swap dataset
 * @component
 * @returns {React.ReactElement}
 */

const Switch = () => {
    const { toggleUserId } = useContext(UserIdContext)
	return <button className="data-switch" onClick={() => toggleUserId()}>Switch DataSet</button>
}

export default Switch
