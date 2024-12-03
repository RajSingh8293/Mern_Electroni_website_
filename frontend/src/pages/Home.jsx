import BestSellers from "../comonents/BestSellers"
import Categories from "../comonents/Categories"
import FeaturedCarousal from "../comonents/FeaturedCarousal"
import Hero from "../comonents/Hero"
import Layout from "../comonents/Layout"
import NewsLetter from "../comonents/NewsLetter"
import { categoriesFilterArray } from "../data/data"
import { allproducts } from "../data/products"

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Categories categoriesFilterArray={categoriesFilterArray} />
            <FeaturedCarousal />
            <BestSellers allproducts={allproducts} />
            <NewsLetter />
        </Layout>
    )
}

export default Home