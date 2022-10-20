import { useState, useEffect } from "react"

/**
 * Function to fetch user info
 * @function
 * @typedef fecthUserType
 * @property {number} id
 * @returns {object}
 */

/** @param {fecthUserType} id */

export function useFetchUser(id) {
	const [data, setData] = useState({})
	const [error, setError] = useState(false)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (!id) return

		async function fetchData() {
			try {
				const response = await fetch(`http://localhost:3000/user/${id}`)

				const data = await response.json()

				setData(data)
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		setLoading(true)

		fetchData()
	}, [id])

	return { isLoading, data, error }
}

/**
 * Function to fetch user activity
 * @function
 * @typedef fecthActivityType
 * @property {number} id
 * @returns {object}
 */

/** @param {fecthActivityType} id */

export function useFetchActivity(id) {
	const [data, setData] = useState({})
	const [error, setError] = useState(false)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (!id) return

		async function fetchData() {
			try {
				const response = await fetch(
					`http://localhost:3000/user/${id}/activity`
				)

				const data = await response.json()

				setData(data)
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		setLoading(true)

		fetchData()
	}, [id])

	return { isLoading, data, error }
}

/**
 * Function to fetch user info
 * @function
 * @typedef fecthPerformanceType
 * @property {number} id
 * @returns {object}
 */

/** @param {fecthPerformanceType} id */

export function useFetchPerformance(id) {
	const [data, setData] = useState({})
	const [error, setError] = useState(false)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (!id) return

		async function fetchData() {
			try {
				const response = await fetch(
					`http://localhost:3000/user/${id}/performance`
				)

				const data = await response.json()

				setData(data)
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		setLoading(true)

		fetchData()
	}, [id])

	return { isLoading, data, error }
}

/**
 * Function to fetch user info
 * @function
 * @typedef fecthAverageType
 * @property {number} id
 * @returns {object}
 */

/** @param {fecthAverageType} id */

export function useFetchAverage(id) {
	const [data, setData] = useState({})
	const [error, setError] = useState(false)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (!id) return

		async function fetchData() {
			try {
				const response = await fetch(
					`http://localhost:3000/user/${id}/average-sessions`
				)

				const data = await response.json()

				setData(data)
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		setLoading(true)

		fetchData()
	}, [id])

	return { isLoading, data, error }
}
