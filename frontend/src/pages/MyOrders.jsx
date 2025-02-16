import { useDispatch, useSelector } from "react-redux"
import Layout from "../comonents/Layout"
import { useEffect } from "react"
import { fetchMyOrders } from "../store/slices/orderSlice"
import { Link } from "react-router-dom"


const MyOrders = () => {
    const dispatch = useDispatch()
    const { myorders } = useSelector((state) => state.myOrders)

    console.log("myorders :", myorders);



    useEffect(() => {
        dispatch(fetchMyOrders())

    }, [dispatch])
    return (
        <Layout>
            <section className="py-16 px-10 min-h-[100vh]">
                <div className="mb-3">
                    <button className="bg-black p-2 px-5">
                        <Link to='/profile' className="text-white">Back</Link>
                    </button>
                </div>
                <div className="relative overflow-x-auto shadow-md min-w-[600px] w-full">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Order ID</th>
                                <th scope="col" className="px-6 py-3">Products</th>
                                <th scope="col" className="px-6 py-3">Address</th>
                                <th scope="col" className="px-6 py-3">	Total Price</th>
                                <th scope="col" className="px-6 py-3">Pay</th>
                                <th scope="col" className="px-6 py-3">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {myorders?.map((data) =>
                                <tr key={data?._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td scope="row" className="px-6 py-3 font-medium to-gray-900 whitespace-nowrap dark:text-white">#{data?._id}</td>
                                    <td scope="row" className="px-6 py-3">
                                        {
                                            data?.orderItems?.map((item, i) =>
                                                <span key={item?._id} className="flex gap-2">
                                                    <span className="font-semibold">{i + 1}.</span>
                                                    <span>{item?.name}
                                                        <span className="font-bold ml-2">({item?.quantity})</span>
                                                    </span>
                                                </span>
                                            )
                                        }
                                    </td>
                                    <td scope="row" className="px-6 py-3 flex flex-col gap-2">
                                        <span>{data?.shippingAddress?.address},</span>
                                        <span>{data?.shippingAddress?.city}</span>
                                        <span>{data?.shippingAddress?.country},</span>
                                        <span>{data?.shippingAddress?.zipcode}</span>
                                    </td>
                                    <td scope="row" className="px-6 py-3">${data?.totalAmount}</td>
                                    <td scope="row" className="px-6 py-3">{data?.paymentStatus}</td>
                                    <td scope="row" className="px-6 py-3">{data?.orderStatus}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}

export default MyOrders