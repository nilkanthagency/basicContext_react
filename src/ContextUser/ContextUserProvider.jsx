import { useState } from "react"
import ContextUser from "./ContextUser"

const ContextUserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <ContextUser.Provider value={{ user, setUser }}>
            {children}
        </ContextUser.Provider>
    )
}

export default ContextUserProvider