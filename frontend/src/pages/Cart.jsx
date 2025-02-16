import { Link } from "react-router-dom"
import Layout from "../comonents/Layout"
import { Minus, Plus } from "lucide-react"

import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQty, increaseQty, removeToCart } from "../store/slices/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state.cartItems)
    console.log("cartItems :", cartItems);

    const totalPrice = cartItems?.reduce((total, item) => total + item.price * item.quantity, 0)
    console.log("totalPrice :", totalPrice);


    return (
        <Layout>
            <section className="py-8 px-10 min-h-[100vh]">
                <div className=" w-full">
                    {cartItems < 0 ? <h1 className="text-4xl font-bold text-center text-[#7DC08E] mb-5">Shopping Cart</h1>
                        :
                        <h1 className="text-4xl font-bold text-center text-[#7DC08E] mb-5">Empty Cart</h1>
                    }
                    <div className="text-end mb-3">
                        <button onClick={() => dispatch(clearCart())} className="bg-black p-2 px-5 text-white">
                            Clear
                        </button>

                    </div>

                    {
                        cartItems?.map((product) =>
                            <div key={product._id} className="grid lg:grid-cols-12 grid-cols-1 gap-10 items-center w-full border-opacity-50 border-2 p-8 border-gray-400 rounded-xl">
                                <div className="h-full w-full p-4 lg:col-span-2 ">
                                    <img className="h-[100px] w-full" src={product?.image} alt="" />
                                </div>
                                <div className="w-full lg:col-span-10 flex flex-col gap-5">
                                    <div className="flex justify-between items-center gap-5">
                                        <h1 className="text-2xl font-bold">{product?.name}</h1>
                                        <button onClick={() => dispatch(removeToCart(product))}>
                                            <MdDeleteOutline size={25} />
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <div className="flex gap-5">
                                            <button onClick={() => dispatch(decreaseQty(product?._id))} className="rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 hover:bg-gray-100">
                                                <Minus />
                                            </button>
                                            <input value={product?.quantity} className="w-10 h-10 aspect-square text-center rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 hover:bg-gray-100" />

                                            <button onClick={() => dispatch(increaseQty(product?._id))} className="rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 hover:bg-gray-100">
                                                <Plus />
                                            </button>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl text-gray-600 font-bold">${product?.price * product?.quantity}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )


                    }
                    <div className="flex justify-between items-center gap-5 px-5 mt-5 pb-5">
                        <h1 className="text-2xl font-semibold" >Subtotal</h1>
                        <h2 className="text-3xl font-bold">${totalPrice}</h2>
                    </div>
                    <hr className="text-gray-100 " />

                    <div className="w-full flex py-5 justify-between items-center gap-5">
                        <button className="w-full text-xl hover:bg-[#7DC08E] hover:text-white border border-[#7DC08E] py-4 px-5 rounded-full font-semibold">
                            <a href="/shop">
                                Go Back
                            </a>
                        </button>
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