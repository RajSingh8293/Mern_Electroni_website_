import { useNavigate } from "react-router-dom"
import Input from "../comonents/Input"
import Layout from "../comonents/Layout"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { shippingReducer } from "../store/slices/cartSlice"


const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { cartItems } = useSelector((state) => state.cartItems)
    const { shippingInfo, cartItems } = useSelector((state) => state.cartItems)

    const [firstname, setFirstname] = useState(shippingInfo?.firstname)
    const [lastname, setLastname] = useState(shippingInfo?.lastname)
    const [phone, setPhone] = useState(shippingInfo?.phone)
    const [country, setCountry] = useState(shippingInfo?.country)
    const [state, setState] = useState(shippingInfo?.state)
    const [city, setCity] = useState(shippingInfo?.city)
    const [address, setAddress] = useState(shippingInfo?.address)
    const [zipcode, setZipcode] = useState(shippingInfo?.zipcode)


    const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // Convert to cents

    const sumbitHandler = (e) => {
        e.preventDefault()
        console.log("hello");
        dispatch(shippingReducer({
            firstname,
            lastname,
            phone,
            country,
            state,
            city,
            address,
            zipcode,

        }))
        navigate('/confirm-order')
    }


    return (
        <Layout>
            <section className="py-8 px-10 min-h-[100vh]">
                <div className=" w-full">
                    <h1 className="text-2xl font-bold text-[#7DC08E] mb-5">Shipping Details</h1>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="col-span-2  p-8 bg-white shadow-md">
                            <form action="" className="flex flex-col gap-2">
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <Input type="text" lable="first name"
                                        name="firstname"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                    <Input type="text" lable="last name"
                                        name="lastname"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Input type="text" lable="address"
                                        name="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Input type="number" lable="phone"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <Input type="text" lable="country"
                                        name="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                    <Input type="text" lable="state"
                                        name="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <Input type="text" lable="city"
                                        name="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}

                                    />
                                    <Input
                                        type="text"
                                        lable="zipcode"
                                        name="zipcode"
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
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
                                        <h1 className=" font-bold text-xl">SubTotal</h1>
                                        <h1 className="font-bold text-xl">${subTotal}</h1>
                                    </div>
                                    <button onClick={sumbitHandler} className="w-full  bg-[#7DC08E] hover:bg-[#68af7a] border border-[#7DC08E] py-2 px-5 font-semibold text-white">
                                        {/* <Link to={`/confirm-order`}>Place Order</Link> */}
                                        Checkout
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