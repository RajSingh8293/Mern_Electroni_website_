import Layout from "../comonents/Layout"


const MyOrders = () => {
    return (
        <Layout>
            <section className="py-16 px-10 min-h-[100vh]">
                <div className="relative overflow-x-auto shadow-md min-w-[600px] w-full">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Order ID</th>
                                <th scope="col" className="px-6 py-3">Products</th>
                                <th scope="col" className="px-6 py-3">Address</th>
                                <th scope="col" className="px-6 py-3">	Total Price</th>
                                <th scope="col" className="px-6 py-3">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td scope="row" className="px-6 py-3 font-medium to-gray-900 whitespace-nowrap dark:text-white">#1</td>
                                <td scope="row" className="px-6 py-3">Dell Laptop i5</td>
                                <td scope="row" className="px-6 py-3">Delhi, Lajpat Nagar, Gali 4, Houser 202, 1100022</td>
                                <td scope="row" className="px-6 py-3">$279</td>
                                <td scope="row" className="px-6 py-3">Pending</td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td scope="row" className="px-6 py-3 font-medium to-gray-900 whitespace-nowrap dark:text-white">#1</td>
                                <td scope="row" className="px-6 py-3">Dell Laptop i5</td>
                                <td scope="row" className="px-6 py-3">Delhi, Lajpat Nagar, Gali 4, Houser 202, 1100022</td>
                                <td scope="row" className="px-6 py-3">$279</td>
                                <td scope="row" className="px-6 py-3">Pending</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}

export default MyOrders