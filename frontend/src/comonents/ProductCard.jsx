/* eslint-disable react/prop-types */

import Rating from '@mui/material/Rating';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
    return (
        <div className="p-3 hover:scale-105 duration-1000 mx-2 flex flex-col cursor-pointer w-full rounded-md overflow-hidden shadow-lg">

            <Link to={`/product-detail/${product._id}`}>
                <div className="h-[200px] flex justify-center items-center p-5">
                    <img className="h-full" src={product.image} alt="Sunset in the mountains" />
                </div>
            </Link>

            <div className="px-6 py-4">
                <Link to={`/product-detail/${product._id}`}>
                    <p className="text-gray-700 text-base">
                        {product.name}
                    </p>
                </Link>
                <div className="mt-3 flex justify-between items-center gap-5">
                    <span className="inline-block  text-sm font-semibold text-gray-700 mr-2 mb-2">${product.price}</span>
                    <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <FaRegHeart className="opacity-50 hover:opacity-100" size={20} /></span>
                </div>
                <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
            </div>
        </div>
    )
}

export default ProductCard