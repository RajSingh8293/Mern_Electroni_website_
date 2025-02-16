import { Link, useNavigate } from "react-router-dom"
import Input from "../comonents/Input"
import Layout from "../comonents/Layout"
import { useEffect, useState } from "react"
import { registerUser } from "../store/slices/userSlice"
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const userinfo = JSON.parse(localStorage.getItem("userinfo"))
    const { user, isAuthenticated } = useSelector((state) => state.user)
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserdata] = useState({
        username: "",
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
    console.log(showPassword);

    const submitRegister = (e) => {
        e.preventDefault()
        console.log("userData :", userData);
        dispatch(registerUser(userData))
        localStorage.setItem("userinfo", JSON.stringify(userData))
        navigate('/profile')
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/profile")
        }
    }, [dispatch, navigate, user, isAuthenticated])
    return (
        <Layout>
            <section className="min-h-screen w-full flex flex-col">
                <div className="flex justify-center items-center flex-col w-full h-[90vh]">
                    <h1 className="text-[#7cbc8c] font-bold text-2xl pb-5">Create your new account</h1>
                    <div className="w-[400px] ">
                        <div className="flex flex-col gap-3 w-full">
                            <Input type="text" name="username" value={userData?.username} onChange={onChangeHandler} placeholder="Username" lable="Username" />
                            <Input type="email" name="email" value={userData?.email} onChange={onChangeHandler} placeholder="Email" lable="Email" />
                            <div className="relative">
                                <Input type={`${showPassword ? "text" : "password"}`} name="password" value={userData?.password} onChange={onChangeHandler} placeholder="Password" lable="Password" />
                                {showPassword ? <span onClick={showPasswordHandler} className="cursor-pointer absolute top-8 right-3 text-sm font-semibold">Show</span>
                                    :
                                    <span onClick={showPasswordHandler} className=" cursor-pointer absolute top-8 right-3 text-sm font-semibold">Hide</span>}
                            </div>

                            <button type="submit" onClick={submitRegister} className="rounded-lg mt-2 text-white py-1.5 px-4 bg-[#7cbc8c] hover:bg-[#70af80] w-full">Register</button>
                            <p className="text-sm text-center mt-5 ">have an account? <Link to="/login" className="text-indigo-600 leading-6 font-semibold">login</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Register