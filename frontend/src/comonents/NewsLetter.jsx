

const NewsLetter = () => {

    const videoUrl = "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/b4319550-fdee-417d-b49f-07271d0480fc.mp4/productVideoOptimized.mp4"

    return (
        <section className="py-16 px-10 flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl pb-5 text-center text-gray-800 font-bold">Subscribe</h1>
            <div className="bg-white flex-col lg:flex-row flex  gap-3 justify-around items-center py-5 drop-shadow-lg rounded-lg lg:max-w-5xl md:max-w-5xl w-full px-5">
                <div className="bg-white flex flex-col w-full lg:max-w-lg md:max-w-lg justify-center">
                    <h1 className="text-2xl lg:text-4xl font-bold text-start">
                        Lets bring your dream to real
                    </h1>
                    <p className="text-base md:text-lg text-gray-500">
                        Are looking for going fast in your business?
                        Send your mail address we will contact you soon.
                    </p>
                    <div className="flex flex-col lg:flex-row md:flex-row gap-5 mt-3">
                        <input type="text" placeholder="Email"
                            className="flex-1 text-gray-700 placeholder-gray-400 appearance-none border border-gray-300 w-full py-2 px-4 bg-white shadow-sm text-base "
                        />
                        <button className="px-4 py-2 text-base font-semibold text-white bg-[#000] shadow-md hover:bg-[#3c3b40]">Subscribe</button>
                    </div>
                </div>
                <div className="lg:max-w-xs md:max-w-xs max-w-lg">
                    <video autoPlay muted loop className="h-full w-full object-cover rounded-md" >
                        <source src={videoUrl} type="video/mp4" />
                    </video>

                </div>
            </div>
        </section>
    )
}

export default NewsLetter