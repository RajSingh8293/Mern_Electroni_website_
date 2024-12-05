import { Link } from "react-router-dom"
import Input from "../comonents/Input"
import Layout from "../comonents/Layout"


const Checkout = () => {
    return (
        <Layout>
            <section className="py-8 px-10 min-h-[100vh]">
                <div className=" w-full">
                    <h1 className="text-2xl font-bold text-[#7DC08E] mb-5">Shipping Details</h1>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="col-span-2  p-8 bg-white shadow-md">
                            <form action="" className="flex flex-col gap-2">
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <Input type="text" lable="first name" />
                                    <Input type="text" lable="last name" />
                                </div>
                                <div>
                                    <Input type="text" lable="address" />
                                </div>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <Input type="text" lable="country" />
                                    <Input type="text" lable="statte" />
                                </div>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <Input type="text" lable="city" />
                                    <Input type="text" lable="zipcode" />
                                </div>
                            </form>
                        </div>
                        <div className="col-span-1  p-5 bg-white shadow-md">
                            <div className="flex flex-col gap-5">

                                <h1 className="text-xl text-[#7DC08E] font-bold">Your Order</h1>
                                <div className="flex flex-col gap-5">
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold">Product</h1>
                                        <h1 className=" font-semibold">Subtotal</h1>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex justify-between items-center gap-3">
                                            <h1 className="font-medium text-gray-500">SAMSUNG Galaxy Watch 6 44mm Bluetooth Smartwatch  X 2</h1>
                                            <h2 className=" font-semibold text-gray-600">$299</h2>
                                        </div>
                                        <div className="flex justify-between items-center gap-3">
                                            <h1 className="font-medium text-gray-500">SAMSUNG Galaxy Watch 6 44mm Bluetooth Smartwatch  X 2</h1>
                                            <h2 className=" font-semibold text-gray-600">$299</h2>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-bold text-xl">SubTotal</h1>
                                        <h1 className="font-bold text-xl">$599</h1>
                                    </div>
                                    <button className="w-full  bg-[#7DC08E] hover:bg-[#68af7a] border border-[#7DC08E] py-2 px-5 font-semibold text-white">
                                        <Link to={`/confirm-order`}>Place Order</Link>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Checkout