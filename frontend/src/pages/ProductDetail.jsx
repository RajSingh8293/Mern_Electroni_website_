/* eslint-disable react-hooks/exhaustive-deps */
import { Rating } from "@mui/material"
import Layout from "../comonents/Layout"
import { FaStar } from "react-icons/fa";
// import { allproducts } from "../data/products";
import ProductCard from "../comonents/ProductCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const ProductDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { product, products } = useSelector((state) => state.products)



    const [relatedPoducts, setrelatedProducts] = useState([])

    const copyProducts = [...products]

    useEffect(() => {
        const getRelatedProducts = copyProducts?.filter((data) => data?.category === product?.category)
        // console.log("getRelatedProducts :", getRelatedProducts);
        setrelatedProducts(getRelatedProducts)
        // getProducts(id)
    }, [product])


    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [])

    return (
        <Layout>
            <section className="min-h-screen  px-10 py-8">
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-12 p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] ">
                    <div className="lg:col-span-3">
                        <div className="flex  rounded-lg p-6  justify-center items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                            <img src={product?.image} alt="" />
                        </div>
                        <div className="mt-8 flex justify-center items-center gap-5">
                            <div className="w-24 rounded-lg p-4 h-20 flex justify-center items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                                <img src={product?.image} alt="" className="w-full" />
                            </div>
                            <div className="w-24 rounded-lg p-4 h-20 flex justify-center items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                                <img src={product?.image} alt="" className="w-full" />
                            </div>
                            <div className="w-24 rounded-lg p-4 h-20 flex justify-center items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                                <img src={product?.image} alt="" className="w-full" />
                            </div>
                            <div className="w-24 rounded-lg p-4 h-20 flex justify-center items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                                <img src={product?.image} alt="" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">{product?.name}</h2>
                        <div className="flex gap-3 mt-3">
                            <Rating defaultValue={product?.rating} readOnly />
                            <p><span className="mr-2">{product?.reviews?.length}</span>Reviews</p>
                        </div>
                        <p className="text-3xl text-gray-800 font-bold mt-8">${product?.price}</p>

                        <div>
                            <h2 className="text-xl text-gray-800 font-bold mt-8">Colors</h2>
                            <div className="mt-3 flex gap-2">
                                <button type="button" className="bg-black w-10 h-10 hover:border-gray-800 transition-all shrink-0 border-2 border-[#7DC08E] rounded-full"></button>
                                <button type="button" className="bg-blue-600 w-10 h-10 hover:border-gray-800 transition-all shrink-0 border-2 border-[#7DC08E] rounded-full"></button>
                                <button type="button" className="bg-green-600 w-10 h-10 hover:border-gray-800 transition-all shrink-0 border-2 border-[#7DC08E] rounded-full"></button>
                                <button type="button" className="bg-white w-10 h-10 hover:border-gray-800 transition-all shrink-0 border-2 border-[#7DC08E] rounded-full"></button>
                            </div>
                        </div>

                        <div className="flex gap-5 mt-8">
                            <button className="rounded py-2.5 px-4 border-transparent min-w-[200px] hover:bg-[#6ea57c] bg-[#7DC08E] text-white font-semibold">Buy Now</button>
                            <button onClick={() => dispatch(addToCart(product))} className="rounded py-2 px-4 min-w-[200px] border text-gray-800 border-[#7DC08E] hover:bg-[#7DC08E] font-semibold">Add To Cart</button>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-gray-800">
                                Product information
                            </h2>
                            <p className="text-sm text-gray-800 mt-4">{product?.title}</p>
                            <p className="text-sm text-gray-800 mt-4">{product?.description}</p>

                        </div>
                    </div>
                </div>

                <div className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 py-8 mt-8 lg:mt-16">
                    <h2 className="text-xl font-bold text-gray-800">Reviews ({product?.reviews?.length})</h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 mt-3 gap-12">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-3 items-center">
                                <p className="text-sm font-bold text-gray-800">5.0</p>
                                <p><FaStar color="#7DC08E" /></p>
                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#7DC08E] h-full w-1/2"></div>
                                </div>
                                <p className="text-sm font-bold text-gray-800">50%</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className="text-sm font-bold text-gray-800">4.0</p>
                                <p><FaStar color="#7DC08E" /></p>
                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#7DC08E] h-full w-1/3"></div>
                                </div>
                                <p className="text-sm font-bold text-gray-800">30%</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className="text-sm font-bold text-gray-800">3.0</p>
                                <p><FaStar color="#7DC08E" /></p>
                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#7DC08E] h-full w-1/4"></div>
                                </div>
                                <p className="text-sm font-bold text-gray-800">70%</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className="text-sm font-bold text-gray-800">2.0</p>
                                <p><FaStar color="#7DC08E" /></p>
                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#7DC08E] h-full w-1/6"></div>
                                </div>
                                <p className="text-sm font-bold text-gray-800">80%</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className="text-sm font-bold text-gray-800">1.0</p>
                                <p><FaStar color="#7DC08E" /></p>
                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#7DC08E] h-full w-1/5"></div>
                                </div>
                                <p className="text-sm font-bold text-gray-800">90%</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img src="https://readymadeui.com/team-2.webp" alt="" />
                                </div>
                                <div>
                                    <h1 className="font-bold text-sm">
                                        John Doe
                                    </h1>
                                    <div className="flex gap-3 items-center">

                                        <Rating defaultValue={5} sx={{ color: "#7DC08E" }} readOnly />
                                        <p className="text-sm font-semibold to-gray-800">2 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-8 ">
                                <button className="rounded w-full py-3 px-4 min-w-[200px] border text-gray-800 border-[#7DC08E] hover:bg-[#7DC08E] font-bold">Read all reviews</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-8">
                    <h1 className="text-2xl p-2 text-center text-gray-800 font-bold">Related Products</h1>
                    <div className="grid gap-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-8">
                        {relatedPoducts?.slice(0, 10).map((product) =>
                            <ProductCard product={product} key={product._id} />
                        )}
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default ProductDetail