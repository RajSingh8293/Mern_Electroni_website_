import { Link } from "react-router-dom"
import Layout from "../comonents/Layout"
import { Minus, Plus } from "lucide-react"

import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
    return (
        <Layout>
            <section className="py-8 px-10 min-h-[100vh]">
                <div className=" w-full">
                    <h1 className="text-4xl font-bold text-center text-[#7DC08E] mb-5">Shopping Cart</h1>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 items-center w-full border-opacity-50 border-2 p-8 border-gray-400 rounded-xl">
                        <div className="h-full w-full p-4 lg:col-span-2 ">
                            <img className="h-full w-full" src="https://m.media-amazon.com/images/I/51wRpCj6WrL._AC_UF480,480_SR480,480_.jpg" alt="" />
                        </div>
                        <div className="w-full lg:col-span-10 flex flex-col gap-5">
                            <div className="flex justify-between items-center gap-5">
                                <h1 className="text-2xl font-bold">SAMSUNG Galaxy Watch 6 44mm Bluetooth Smartwatch</h1>
                                <button>
                                    <MdDeleteOutline size={25} />
                                </button>
                            </div>
                            <p className="opacity-50">
                                SAMSUNG Galaxy Watch 6 44mm Bluetooth Smartwatch, Fitness Tracker, Per <Link to={`/product-detail/1`}>More....</Link>
                            </p>
                            <div className="flex justify-between items-center gap-5">
                                <div className="flex gap-5">
                                    <button className="rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 hover:bg-gray-100">
                                        <Minus />
                                    </button>
                                    <input value="1" className="w-10 h-10 aspect-square text-center rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 hover:bg-gray-100" />

                                    <button className="rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 hover:bg-gray-100">
                                        <Plus />
                                    </button>
                                </div>
                                <div>
                                    <h1 className="text-2xl text-gray-600 font-bold">$399</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 px-5 mt-5 pb-5">
                        <h1 className="text-2xl font-semibold" >Subtotal</h1>
                        <h2 className="text-3xl font-bold">$399</h2>
                    </div>
                    <hr className="text-gray-100 " />

                    <div className="w-full flex py-5 justify-between items-center gap-5">
                        <button className="w-full text-xl hover:bg-[#7DC08E] hover:text-white border border-[#7DC08E] py-4 px-5 rounded-full font-semibold">Go Back</button>
                        <button className="w-full text-xl bg-[#7DC08E] hover:bg-[#68af7a] border border-[#7DC08E] py-4 px-5 rounded-full font-semibold text-white">
                            <Link to={`/checkout`}>Checkout</Link>

                        </button>
                    </div>
                </div>
            </section>

        </Layout>
    )

}

export default Cart