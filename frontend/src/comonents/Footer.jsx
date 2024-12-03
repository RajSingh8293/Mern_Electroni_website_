import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-[#7cbe8c] text-white py-10 px-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8">
                    <div className="">
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p className="text-sm">We are committed to providing the best shopping experience. Join us and explore our wide range of products!</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Privacy Policy</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex gap-5">
                            <span className="bg-black p-2 rounded-full hover:translate-y-1 duration-300"><FaFacebook size={20} /></span>
                            <span className="bg-black p-2 rounded-full hover:translate-y-1 duration-300"><FaTwitter size={20} /></span>
                            <span className="bg-black p-2 rounded-full hover:translate-y-1 duration-300"><FaLinkedin size={20} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer