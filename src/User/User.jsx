import { useContext } from "react"
import ContextUser from "../ContextUser/ContextUser"


const User = () => {
    const { user } = useContext(ContextUser)
    return (
        <div className="flex h-11 items-center justify-center bg-sky-500 text-2xl text-white">

            {
                user ? <p>Hello {user}</p> : null
            }
        </div>

    )
}

export default User