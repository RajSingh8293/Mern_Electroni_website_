import Layout from "../comonents/Layout"


const ConfirmOrder = () => {
    return (
        <Layout>
            <section className="py-8 px-10 min-h-[100vh]">
                <div className=" w-full">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="col-span-2 bg-white">
                            <h1 className="text-2xl font-bold text-[#7DC08E] mb-5">Your Order Details</h1>
                            <div className="rounded shadow-md p-8 ">
                                <div className="flex flex-col gap-5">
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold">Product</h1>
                                        <h1 className=" font-semibold">Subtotal</h1>
                                    </div>
                                    <div className="flex flex-col gap-3">
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
                                        <h1 className=" font-semibold ">Total</h1>
                                        <h1 className="font-semibold ">$599</h1>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold ">Shippin Charge</h1>
                                        <h1 className="font-semibold ">$5</h1>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold ">Tax (GST) (18%)</h1>
                                        <h1 className="font-semibold ">$5</h1>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold ">Sub Total</h1>
                                        <h1 className="font-semibold text-xl">$599</h1>
                                    </div>
                                    <div className="flex gap-4 flex-col">

                                        <h1 className="text-xl font-bold text-[#7DC08E]">Shipping Address</h1>
                                        <div className="flex justify-between items-center gap-5">
                                            <h1 className=" font-semibold ">Full Name</h1>
                                            <h1 className="font-semibold">User One</h1>
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <h1 className=" font-semibold ">Address</h1>
                                            <h1 className="font-semibold ">India,Delhi,New Delhi,ABC 120</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-1 ">
                            <h1 className="text-2xl font-bold text-[#7DC08E] mb-5">Payment</h1>
                            <div className=" p-8 bg-white shadow-md">

                                <button className="w-full  bg-[#7DC08E] hover:bg-[#68af7a] border border-[#7DC08E] py-2 px-5 font-semibold text-white">
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ConfirmOrder