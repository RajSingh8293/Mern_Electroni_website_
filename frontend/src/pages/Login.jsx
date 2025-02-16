import { Link, useNavigate } from "react-router-dom"
import Input from "../comonents/Input"
import Layout from "../comonents/Layout"
import { useEffect, useState } from "react"
import { loginUser } from "../store/slices/userSlice"
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const userinfo = JSON.parse(localStorage.getItem("userinfo"))
    const { user, isAuthenticated } = useSelector((state) => state.user)
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserdata] = useState({
        email: "",
        password: "",
    })
    const onChangeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUserdata({ ...userData, [name]: value })
    }
    const showPasswordHandler = () => {
        setShowPassword(!showPassword)

    }

    const submitLogin = (e) => {
        e.preventDefault()
        console.log("userData :", userData);
        dispatch(loginUser(userData))
        localStorage.setItem("userinfo", JSON.stringify(userData))
        navigate('/profile')
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile')
        }
    }, [dispatch, navigate, user, isAuthenticated])
    return (

        <Layout>
            <section className="min-h-screen w-full flex flex-col">
                <div className="flex justify-center items-center flex-col w-full h-[90vh]">
                    <h1 className="text-[#7cbc8c] font-bold text-2xl pb-5">Login</h1>
                    <div className="w-[400px] ">
                        <form action="" className="flex flex-col gap-3 w-full">
                            <Input type="email" name="email" value={userData?.email} onChange={onChangeHandler} placeholder="Email" lable="Email" />
                            <div className="relative">
                                <Input type={`${showPassword ? "text" : "password"}`} name="password" value={userData?.password} onChange={onChangeHandler} placeholder="Password" lable="Password" />
                                {showPassword ? <span onClick={showPasswordHandler} className="cursor-pointer absolute top-8 right-3 text-sm font-semibold">Show</span>
                                    :
                                    <span onClick={showPasswordHandler} className=" cursor-pointer absolute top-8 right-3 text-sm font-semibold">Hide</span>}
                            </div>
                            <p className="text-sm text-right mt-3 text-indigo-600 leading-6 font-semibold">
                                <Link to="/register"> forgot password </Link></p>

                            <button type="submit" onClick={submitLogin} className="rounded-lg mt-2 text-white py-1.5 px-4 bg-[#7cbc8c] hover:bg-[#70af80] w-full">Login</button>
                            <p className="text-sm text-center ">Do not have an account? <Link to="/register" className="text-indigo-600 leading-6 font-semibold">register</Link></p>

                        </form>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

export default Login