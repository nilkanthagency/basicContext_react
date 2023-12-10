
import { useContext, useState } from 'react'
import Image from '../assets/Image.png'
import ContextUser from '../ContextUser/ContextUser'


const Login = () => {


    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(ContextUser)


    const submitForm = () => {
        setUser(username, password)
    }
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex h-screen w-3/4 items-center">
                    <div className="w-[50%]">
                        <div className="flex h-full flex-col items-center justify-center">
                            <div className="mb-6 flex flex-col items-center">
                                <h1 className="text-6xl font-bold">Welcome </h1>
                                <p className="font-light">We are glad to see you back with us</p>
                            </div>
                            <div className="flex w-4/5 flex-col items-center">
                                <input
                                    className="mb-7 h-14 w-full rounded-xl bg-slate-100 px-4"
                                    type="text"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <input
                                    className="mb-7 h-14 w-full rounded-xl bg-slate-100 px-4"
                                    placeholder="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className="w-full rounded-xl bg-black p-4 text-white"
                                    onClick={submitForm}
                                >
                                    Next</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-[45rem] w-[50%] items-center justify-center">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login