import { Link } from "react-router-dom"


const Hero = () => {
    return (
        <section className="flex justify-center items-center">
            <div className="lg:mt-5 md:mt-5 sm:mt-0  w-full  max-w-[1000px] lg:h-[500px] md:h-[500px] h-[300px] relative hero_section">
                <div className="w-full h-full">
                    <img className="w-full h-full" src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/80838a72-b68a-4a93-b316-989c1bce6505._CR0,0,1200,628_SX920_QL70_.jpg" alt="" />
                </div>
                <div className="overlay  flex justify-center items-center">
                    <button className="opacity-1 z-30 py-4 px-16 border-[1px] hover:transition-all duration-1000 border-white text-white text-xl hover:bg-[#7DC08E] hover:border-transparent hover:scale-105">
                        <Link to="/shop">
                            Shop Now
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero