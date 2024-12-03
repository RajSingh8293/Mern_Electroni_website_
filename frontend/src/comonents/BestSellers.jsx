/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard"


const BestSellers = ({ allproducts }) => {
    return (
        <div className="px-10">
            <h1 className="text-2xl pb-5 text-center text-gray-800 font-bold">Best Seller Products</h1>
            <div className="grid gap-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-8">
                {allproducts?.slice(0, 10).map((product) =>
                    <ProductCard product={product} key={product._id} />
                )}
            </div>
        </div>
    )
}

export default BestSellers