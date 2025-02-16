import { useSelector } from "react-redux"
import Layout from "../comonents/Layout"
import axios from "axios";
import { backendApi } from "../constant/backendApi";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.user)
    const { cartItems, shippingInfo } = useSelector((state) => state.cartItems)

    const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // Convert to cents
    const shipCharge = subTotal > 500 ? 0 : 5;
    const tax = Math.round(subTotal * 0.18).toFixed(2)
    const numTax = parseInt(tax)

    const totalAmount = Number(numTax + shipCharge + subTotal).toFixed(2)
    const fullName = `${shippingInfo?.firstname} ${shippingInfo?.lastname}`
    const address = `${shippingInfo?.country}, ${shippingInfo?.state}, ${shippingInfo?.city}, ${shippingInfo?.zipcode}, ${shippingInfo?.address}`



    let axiosConfig = {
        withCredentials: true,
    };

    const cartData = cartItems?.map((data) => {
        return {
            productId: data?._id,
            name: data?.name,
            quantity: data?.quantity,
            price: data?.price,
            totalPrice: data?.price * data?.quantity
        }
    })

    const checkoutHandler = async () => {
        try {
            const { data: { key } } = await axios.post(`${backendApi}/orders/pay`, axiosConfig)

            const { data: { order, orderSave } } = await axios.post(`${backendApi}/orders/pay`, {
                amount: totalAmount,
                userId: user?._id,
                shippingAddress: shippingInfo,
                orderItems: cartData,
                itemsPrice: subTotal,
                totalTax: numTax,
                shippingCharge: shipCharge,
            });
            console.log("data :", order);
            console.log("orderSave :", orderSave);

            const options = {
                key,
                amount: order?.amount,
                currency: order?.currency,
                name: "EShop",
                description: "Test Transaction",
                order_id: order?.id,
                handler: async (response) => {
                    // console.log(response);

                    const orderDetails = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                        shippingAddress: shippingInfo,
                        orderItems: cartData,
                        itemsPrice: subTotal,
                        totalAmount: totalAmount,
                        totalTax: numTax,
                        shippingCharge: shipCharge,
                    }
                    const { data } = await axios.post(`${backendApi}/orders/payment-verify`, orderDetails, axiosConfig)
                    if (data?.success) {
                        alert(data?.message);
                        navigate(`/payment-success/${data?.order?.orderId}`)
                        console.log(" order data :", data);

                    } else {
                        alert(data?.message);
                    }
                },
                prefill: {
                    name: user?.username,
                    email: user?.email,
                    contact: shippingInfo?.phone,
                },
                theme: {
                    color: "#F37254",
                },
            };

            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();


        } catch (error) {
            console.log("Error :", error);


        }

    }












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


                                    {
                                        cartItems?.map((data) =>
                                            <div key={data?._id} className="flex flex-col gap-3">
                                                <div className="flex justify-between items-center gap-3">
                                                    <h1 className="font-medium text-gray-500">{data?.name}  X {data?.quantity}</h1>
                                                    <h2 className=" font-semibold text-gray-600">${data?.price * data?.quantity}</h2>
                                                </div>
                                            </div>
                                        )
                                    }

                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold ">Sub Total</h1>
                                        <h1 className="font-semibold ">${subTotal}</h1>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold ">Shippin Charge</h1>
                                        <h1 className="font-semibold ">${shipCharge}</h1>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold ">Tax (GST) (18%)</h1>
                                        <h1 className="font-semibold ">${tax}</h1>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className=" font-semibold ">Total</h1>
                                        <h1 className="font-semibold text-xl">${totalAmount}</h1>
                                    </div>
                                    <div className="flex gap-4 flex-col">

                                        <h1 className="text-xl font-bold text-[#7DC08E]">Shipping Address</h1>
                                        <div className="flex justify-between items-center gap-5">
                                            <h1 className=" font-semibold ">Full Name</h1>
                                            <h1 className="font-semibold">{fullName}</h1>
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <h1 className=" font-semibold ">Address</h1>
                                            <h1 className="font-semibold ">{address}</h1>
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <h1 className=" font-semibold ">Phone</h1>
                                            <h1 className="font-semibold ">{shippingInfo?.phone}</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-1 ">
                            <h1 className="text-2xl font-bold text-[#7DC08E] mb-5">Payment</h1>
                            <div className=" p-8 bg-white shadow-md">

                                <button onClick={checkoutHandler} className="w-full  bg-[#7DC08E] hover:bg-[#68af7a] border border-[#7DC08E] py-2 px-5 font-semibold text-white">
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

export default ConfirmOrder