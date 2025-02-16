/* eslint-disable react/prop-types */
import Slider from "react-slick";
import ProductCard from "./ProductCard";
// import { allproducts } from "../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const FeaturedCarousal = ({ products }) => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container px-10 pb-16">
            <h1 className="text-2xl pb-5 text-center text-gray-800 font-bold">Featured Products</h1>
            <Slider {...settings}>
                {products.map((product) =>
                    <ProductCard product={product} key={product._id} />
                )}
            </Slider>
        </div>
    );
}

export default FeaturedCarousal;
