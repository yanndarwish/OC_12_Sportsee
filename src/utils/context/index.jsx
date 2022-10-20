import { createContext, useState, React } from "react"

export const UserIdContext = createContext()

export const UserIdProvider = ({children}) => {
    const [userId, setUserId] = useState(12)
    const toggleUserId = () => {
        setUserId(userId === 12 ? 18 : 12)
    }

    return (
        <UserIdContext.Provider value={{ userId, toggleUserId}}>
            {children}
        </UserIdContext.Provider>
    )
}