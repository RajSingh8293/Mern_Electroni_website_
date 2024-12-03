/* eslint-disable react/prop-types */

import { allproducts } from "../data/products"

import ProductCard from "./ProductCard";


const Categories = ({ categoriesFilterArray }) => {
    return (
        <section className="py-16 px-10">
            <h1 className=" text-center pb-5 font-bold text-2xl text-gray-800">Our Categories</h1>
            <div className="flex justify-center flex-wrap items-center">
                {categoriesFilterArray.map((data) =>
                    <div key={data.value} className="flex justify-center items-center flex-col">
                        <div className="catrgory_item hover:scale-105 rounded-full ">
                            <img className="w-full h-full rounded-full cursor-pointer" src={data.image} alt="" />
                        </div>
                        <p>{data.lable}</p>
                    </div>
                )}
            </div>

            <div className="grid gap-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-8">
                {allproducts.slice(0, 5).map((product) =>
                    <ProductCard product={product} key={product._id} />
                )}
            </div>
        </section>
    )
}

export default Categories