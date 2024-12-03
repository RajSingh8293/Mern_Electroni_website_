import { NavLink } from "react-router-dom"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Avatar } from "@mui/material";


const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [menu, setMenu] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)
    const navLinks = [
        {
            lable: "Home",
            link: "/"
        },
        {
            lable: "Shop",
            link: "/shop"
        },
        {
            lable: "About",
            link: "/about"
        },
        {
            lable: "Contact",
            link: "/contact"
        }
    ]

    const showMenuHandler = () => {
        setMenu(!menu)
    }
    const showProfileMenuHandler = () => {
        setProfileMenu(!profileMenu)
    }
    return (
        <section className="bg-[#7DC08E]  px-10">
            <div className="flex   z-50 justify-between items-center h-[70px]">
                <div><h1 className="text-black text-2xl font-bold">ELec<span className="text-[tomato]">Store</span></h1></div>
                <div className="lg:block md:block hidden">
                    <ul className="flex gap-5 items-center">
                        {navLinks.map((data) => <li key={data.lable}>
                            <NavLink to={data.link} className="nav font-bold text-white">{data.lable}</NavLink>
                        </li>)}
                        <li>
                            <NavLink to="/cart" className="nav font-bold text-white">
                                <MdOutlineAddShoppingCart size={25} />
                            </NavLink>
                        </li>
                        {user ? <li>
                            <Avatar onClick={showProfileMenuHandler} className="capitalize" sx={{
                                backgroundColor: "tomato"

                            }} >{user?.username?.slice(0, 1)}</Avatar>
                        </li>
                            :
                            <li>
                                <NavLink to="/login" className="nav font-bold text-white">
                                    Login
                                </NavLink>

                            </li>}


                    </ul>
                </div>
                <div className="lg:hidden md:hidden block">
                    <button className="" onClick={showMenuHandler}>
                        {menu ?
                            <IoMdClose color="white" size={25} />
                            :
                            <IoMenuOutline color="white" size={25} />
                        }
                    </button>
                </div>

                {menu && <div className="block md:hidden lg:hidden  z-50 absolute top-16 left-0  w-full h-full  ">
                    <ul className="flex flex-col justify-between  p-20  gap-5 items-center w-full h-full bg-[#7DC08E]">
                        {navLinks.map((data) => <li key={data.lable}>
                            <NavLink to={data.link} className="nav font-bold text-white">{data.lable}</NavLink>
                        </li>)}
                        <li>
                            <NavLink to="/cart" className="nav font-bold text-white">
                                <MdOutlineAddShoppingCart size={25} />
                            </NavLink>
                        </li>
                        {user ? <li>
                            <Avatar className="capitalize" sx={{
                                backgroundColor: "tomato"

                            }} >{user?.username?.slice(0, 1)}</Avatar>
                        </li>
                            :
                            <li>
                                <NavLink to="/login" className="nav font-bold text-white">
                                    Login
                                </NavLink>

                            </li>}

                    </ul>
                </div>
                }
                {profileMenu &&
                    <div className="absolute top-16 right-0 bg-[#7DC08E]" >
                        <div className="w-[200px] flex justify-center items-center h-auto p-10">
                            <ul className="w-full flex flex-col gap-5 justify-center ">
                                <li>
                                    <NavLink className="text-white hover:text-gray-600 font-semibold" to="/profile">Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-white hover:text-gray-600 font-semibold" to="/my-orders">My Orders</NavLink>
                                </li>
                                <li>
                                    <button className="border border-white py-2 px-4 text-white hover:text-gray-600 font-semibold">Logout</button>
                                </li>
                            </ul>
                        </div>

                    </div>}
            </div>
        </section >
    )
}

export default Navbar