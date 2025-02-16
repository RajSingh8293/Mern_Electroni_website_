/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom"
import Layout from "../comonents/Layout"
import Input from "../comonents/Input"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../store/slices/userSlice"


const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const user = JSON.parse(localStorage.getItem("user"))
    const { user, loading, isAuthenticated } = useSelector((state) => state.user)

    console.log("user :", user);



    const [userData, setUserData] = useState({
        username: user?.username || "",
        email: user?.email || "",
    })
    // console.log(user);

    const onChangeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUserData({ ...userData, [name]: value })
    }

    const updateProfile = (e) => {
        e.preventDefault()
        console.log("userData :", userData);
        dispatch(updateUser(userData))
    }


    return (
        <Layout>
            <section className="py-16 px-10 min-h-[100vh]">
                <div className="flex gap-5 max-w-[1000px] mx-auto">
                    <div className="lg:w-1/4   w-full border-r">
                        <div className="sticky top-12">
                            <h1 className="text-gray-600 text-2xl font-semibold">Profile</h1>
                            <ul className="flex flex-col gap-3 mt-3">
                                <li>
                                    <NavLink to="/profile" className="text-sm text-gray-600 font-medium hover:bg-gray-200 rounded-md p-2 px-3 flex items-center">
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-orders" className="text-sm text-gray-600 font-medium hover:bg-gray-200 rounded-md p-2 px-3 flex items-center">
                                        My Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <button className="hover:bg-gray-200 text-sm text-gray-600 font-medium rounded-md p-2 px-3 flex items-center">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-10 ">

                        <div className="flex gap-5 items-center">
                            <div className="rounded-full overflow-hidden h-40 w-40 border-2 border-blue-400 p-1">
                                <img className="rounded-full w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s" alt="" />
                            </div>
                            <div className="flex flex-col gap-5">
                                <button className="bg-[#7DC08E] hover:bg-[#72af81] p-2 px-6 rounded-md text-white font-semibold">Change</button>
                                <button className="hover:bg-[#7DC08E] text-gray-600 border border-[#7DC08E] p-2 px-6 rounded-md hover:text-white font-semibold">Change</button>
                            </div>
                        </div>

                        <div className="mt-8 w-[500px]">
                            <form action="
                            " className="flex flex-col gap-5">
                                <Input type="text" name="username" onChange={onChangeHandler} placeholder="Username" lable="username" value={userData?.username} />

                                <Input type="email" name="email" onChange={onChangeHandler} placeholder="Email" lable="email" value={userData?.email} />
                                <div className="flex justify-end">
                                    <button type="submit" onClick={updateProfile} className="bg-[#7DC08E] max-w-[100px] hover:bg-[#72af81] p-2 px-6 rounded-md text-white font-semibold">Save</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Profile