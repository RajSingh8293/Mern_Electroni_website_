import { useDispatch, useSelector } from "react-redux"
import BestSellers from "../comonents/BestSellers"
import Categories from "../comonents/Categories"
import FeaturedCarousal from "../comonents/FeaturedCarousal"
import Hero from "../comonents/Hero"
import Layout from "../comonents/Layout"
import NewsLetter from "../comonents/NewsLetter"
import { categoriesFilterArray } from "../data/data"
// import { allproducts } from "../data/products"
import { useEffect } from "react"
import { fetchProducts } from "../store/slices/productSlice"

const Home = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    // console.log("products :", products.products);



    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <Layout>
            <Hero />
            <Categories categoriesFilterArray={categoriesFilterArray} products={products} />
            <FeaturedCarousal products={products} />
            <BestSellers products={products} />
            <NewsLetter />
        </Layout>
    )
}

export default Home