import flame from "../../assets/energy.svg"
import chicken from "../../assets/chicken.svg"
import apple from "../../assets/apple.svg"
import burger from "../../assets/burger.svg"

/**
 * @function
 * @typedef userFormatter
 * @property {object} data 
 * @property {number} id 
 * @property {number} score 
 * @property {number} todayScore 
 * @property {object} keyData 
 * @property {object} userInfos 
 * @returns {object}
 */

 /** @param {userFormatter} data */

export function userFormatter(data) {
	let formattedData = {
		id: data.id,
		keyData: data.keyData,
		score: data.todayScore ? data.todayScore : data.score,
		userInfos: data.userInfos,
	}

	return formattedData
}

/**
 * @function
 * @typedef performanceFormatter
 * @property {object} data 
 * @property {string} kind 
 * @returns {array} array of objects
 * @example formattedData = [
 * 	{
 * 		subject: "string",
 * 		value: number
 * 	},
 * 	{
 * 		subject: "string",
 * 		value: number
 * 	}
 * ]
 */

 /** @param {performanceFormatter} data */

export function performanceFormatter(data) {
	let formattedData = []
	data.data.forEach((item, index) => {
		let element = {
			subject: data.kind[index + 1],
			value: item.value,
		}
		formattedData.push(element)
	})

	return formattedData
}

/**
 * @function
 * @typedef cardFormatter
 * @property {object} data 
 * @property {number} value
 * @returns {object}
 */

 /** @param {cardFormatter} data */

export function cardFormatter(data) {
	let formattedData

	if (data.name === "calorieCount") {
		formattedData = {
			name: "Calories",
			amount: data.value / 1000,
			unit: "kCal",
			icon: flame,
			color: "#FBEAEA",
		}
	} else if (data.name === "proteinCount") {
		formattedData = {
			name: "Proteines",
			amount: data.value,
			unit: "g",
			icon: chicken,
			color: "#E8F4FB",
		}
	} else if (data.name === "carbohydrateCount") {
		formattedData = {
			name: "Glucides",
			amount: data.value,
			unit: "g",
			icon: apple,
			color: "#FBF6E5",
		}
	} else if (data.name === "lipidCount") {
		formattedData = {
			name: "Lipides",
			amount: data.value,
			unit: "g",
			icon: burger,
			color: "#FBEAEF",
		}
	}

	return formattedData
}

/**
 * @function
 * @typedef scoreFormatter
 * @property {number} data 
 * @returns {array} array containing reference object and data object
 */

 /** @param {scoreFormatter} data */

export function scoreFormatter(data) {
	/* 
		data formated in array.
		By default, the biggest number is 100% but if data is alone in the array, 
		it will become the "reference" and extend to 100% of the size of the bar
		To prevent that, we add a reference, serving as the 100% meter
		so that our data is gonna be scaled in comparison
	*/
	let formattedData = [
		// reference that represents 100% (invisible)
		{
			name: "score",
			value: 1,
			fill: "#FBFBFB",
		},
		// actual data
		{
			name: "score",
			value: data,
			fill: "#FF0101",
		},
	]

	return formattedData
}
