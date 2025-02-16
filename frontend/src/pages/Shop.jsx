import { FormControlLabel, Radio, RadioGroup, Rating } from '@mui/material';
import { ListFilter, MinusIcon, PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { categoriesFilterArray, colorsFilterArray, pricesFilterArray, ratingFilterArray } from '../data/filters';
// import { allproducts } from '../data/products';
import ProductCard from '../comonents/ProductCard';
import Layout from '../comonents/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
const Shop = () => {


    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    // console.log("products :", products.products);
    const [showCategory, setShowCategory] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showColors, setShowColors] = useState(false)
    const [showRating, setShowRating] = useState(false)
    const [showMobileFilter, setShowMobileFilter] = useState(false)
    const [selectCategory, setSelectCategory] = useState("all")
    const [selectPrice, setSelectPrice] = useState("all")
    const [selectColors, setSelectColors] = useState("all")
    const [selectRatings, setSelectRatings] = useState("all")

    const filteredProducts = products.filter((product) => {
        const categoryMatch = selectCategory === "all" || product.category === selectCategory
        const priceMatch = selectPrice === "all" || (selectPrice === 'under200' && product.price < 200) || (selectPrice === '200to300' && product.price >= 200 && product.price < 300) || (selectPrice === '300to500' && product.price >= 300 && product.price < 500) || (selectPrice === 'over500' && product.price > 500)
        const colorsMatch = selectColors === "all" || product.color === selectColors
        const reatingMatch = selectRatings === "all" || product.ratings === selectRatings
        return categoryMatch && priceMatch && colorsMatch && reatingMatch
    })

    const categorySelected = (data) => {
        setSelectCategory(data)
    }
    const priceSelected = (data) => {
        setSelectPrice(data)
    }
    const cololsSelected = (data) => {
        setSelectColors(data)
    }
    const ratingSelected = (data) => {
        setSelectRatings(data)
    }
    const resetFilteration = () => {
        setSelectCategory('all')
        setSelectPrice('all')
        setSelectColors('all')
        setSelectRatings('all')
    }



    const showCategoryFilterHandler = (data) => {
        setShowCategory(data)
    }
    const showPriceFilterHandler = (data) => {
        setShowPrice(data)

    }
    const showColorsFilterHandler = (data) => {
        setShowColors(data)

    }
    const showRatingsFilterHandler = (data) => {
        setShowRating(data)

    }
    const showMobileFilterHandler = (data) => {
        setShowMobileFilter(data)
        console.log(data);
    }



    // console.log("products :", products);


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <Layout>
            <section className="px-10 py-16 relative">
                {/* // mobile  */}
                <div className='absolute lg:hidden right-10 top-24 flex gap-3'>
                    <h1>Filters</h1>
                    <button onClick={() => showMobileFilterHandler(!showMobileFilter)}><ListFilter /></button>
                </div>
                <div className={` ${showMobileFilter ? 'block' : 'hidden'} w-[240px] transition-all duration-300 ease-in  absolute right-10 top-32  bg-gray-100 rounded-md p-4`} >
                    <div className="flex gap-5 flex-col">
                        <h2 className='text-xl font-bold'>Filters</h2>
                        <div>
                            <div className='flex justify-between gap-5' onClick={() => showCategoryFilterHandler(!showCategory)}>
                                <h1 className='text-lg font-medium'>Category</h1>
                                <button>
                                    {showCategory ? <MinusIcon />
                                        :
                                        <PlusIcon />}
                                </button>
                            </div>
                            <div className={`ml-3 mt-1 ${showCategory ? 'block' : 'hidden'} `}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                    {categoriesFilterArray.map((data, index) =>
                                        <FormControlLabel key={index} value={data?.value} onChange={() => categorySelected(data.value)} control={<Radio size='small'
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: "tomato"
                                                }
                                            }}

                                        />} label={data?.lable} />)}
                                </RadioGroup>

                            </div>
                        </div>
                        <div >
                            <div className='flex justify-between gap-5' onClick={() => showPriceFilterHandler(!showPrice)}>
                                <h1 className='text-lg font-medium'>Price</h1>
                                <button>
                                    {showPrice ? <MinusIcon />
                                        :
                                        <PlusIcon />}
                                </button>
                            </div>
                            <div className={`ml-3 mt-1 ${showPrice ? 'block' : 'hidden'} `}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                    {pricesFilterArray.map((data, index) =>
                                        <FormControlLabel key={index} value={data?.lable} onChange={() => priceSelected(data.value)} control={<Radio size='small'
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: "tomato"
                                                }
                                            }}
                                        />} label={data?.lable} />)}
                                </RadioGroup>

                            </div>
                        </div>
                        <div  >
                            <div className='flex justify-between gap-5' onClick={() => showColorsFilterHandler(!showColors)}>
                                <h1 className='text-lg font-medium'>Colors</h1>
                                <button>
                                    {showColors ? <MinusIcon />
                                        :
                                        <PlusIcon />}
                                </button>
                            </div>
                            <div className={`ml-3 mt-1 ${showColors ? 'block' : 'hidden'} `}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                    {colorsFilterArray.map((data, index) =>
                                        <FormControlLabel key={index} value={data?.lable} onChange={() => cololsSelected(data.value)} control={<Radio size='small'
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: "tomato"
                                                }
                                            }}
                                        />} label={data?.lable} />)}
                                </RadioGroup>

                            </div>
                        </div>
                        <div >
                            <div className='flex justify-between gap-5' onClick={() => showRatingsFilterHandler(!showRating)}>
                                <h1 className='text-lg font-medium'>Ratings</h1>
                                <button>
                                    {showRating ? <MinusIcon />
                                        :
                                        <PlusIcon />}
                                </button>
                            </div>
                            <div className={`ml-3 mt-1 ${showRating ? 'block' : 'hidden'} `}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                    {ratingFilterArray.map((data, index) =>
                                        <div key={index} className='flex items-center gap-2'>
                                            <FormControlLabel value={data?.lable} onChange={() => ratingSelected(data.value)} control={<Radio size='small'
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: "tomato"
                                                    }
                                                }}
                                            />}
                                            // label={data?.lable}
                                            />
                                            <Rating name="read-only" value={data?.value ? Number(data?.value) : 0} precision={0.5} readOnly />
                                        </div>
                                    )}
                                </RadioGroup>

                            </div>
                        </div>
                        <div>
                            <button onClick={resetFilteration} className="bg-black py-2 px-4 text-white">Reset Filters</button>
                        </div>
                    </div>
                </div>

                <div className='flex gap-5'>
                    {/* large screen  */}
                    <div className="w-1/4 lg:block hidden bg-gray-100 rounded-md p-4" >
                        <div className="flex gap-5 flex-col">
                            <h2 className='text-xl font-bold'>Filters</h2>
                            <div>
                                <div className='flex justify-between gap-5'
                                    onClick={() => showCategoryFilterHandler(!showCategory)}>
                                    <h1 className='text-lg font-medium'>Category</h1>
                                    <button>
                                        {showCategory ? <MinusIcon />
                                            :
                                            <PlusIcon />}
                                    </button>
                                </div>
                                <div className={`ml-3 mt-1 ${showCategory ? 'block' : 'hidden'} `}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        {categoriesFilterArray.map((data, index) =>
                                            <FormControlLabel key={index} value={data?.lable} onChange={() => categorySelected(data.value)} control={<Radio size='small'
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: "tomato"
                                                    }
                                                }}
                                            />} label={data?.lable} />)}
                                    </RadioGroup>

                                </div>
                            </div>
                            <div >
                                <div className='flex justify-between gap-5' onClick={() => showPriceFilterHandler(!showPrice)}>
                                    <h1 className='text-lg font-medium'>Price</h1>
                                    <button>
                                        {showPrice ? <MinusIcon />
                                            :
                                            <PlusIcon />}
                                    </button>
                                </div>
                                <div className={`ml-3 mt-1 ${showPrice ? 'block' : 'hidden'} `}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        {pricesFilterArray.map((data, index) =>
                                            <FormControlLabel key={index} value={data?.lable} onChange={() => priceSelected(data.value)} control={<Radio size='small'
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: "tomato"
                                                    }
                                                }}
                                            />} label={data?.lable} />)}
                                    </RadioGroup>

                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between gap-5' onClick={() => showColorsFilterHandler(!showColors)}>
                                    <h1 className='text-lg font-medium'>Colors</h1>
                                    <button>
                                        {showColors ? <MinusIcon />
                                            :
                                            <PlusIcon />}
                                    </button>
                                </div>
                                <div className={`ml-3 mt-1 ${showColors ? 'block' : 'hidden'} `}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        {colorsFilterArray.map((data, index) =>
                                            <FormControlLabel key={index} value={data?.lable} onChange={() => cololsSelected(data.value)} control={<Radio size='small'
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: "tomato"
                                                    }
                                                }}
                                            />} label={data?.lable} />)}
                                    </RadioGroup>

                                </div>
                            </div>
                            <div >
                                <div className='flex justify-between gap-5' onClick={() => showRatingsFilterHandler(!showRating)}>
                                    <h1 className='text-lg font-medium'>Ratings</h1>
                                    <button>
                                        {showRating ? <MinusIcon />
                                            :
                                            <PlusIcon />}
                                    </button>
                                </div>
                                <div className={`ml-3 mt-1 ${showRating ? 'block' : 'hidden'} `}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        {ratingFilterArray.map((data, index) =>
                                            <div key={index} className='flex items-center gap-2'>
                                                <FormControlLabel value={data?.lable} onChange={() => ratingSelected(data.value)} control={<Radio size='small'
                                                    sx={{
                                                        '&.Mui-checked': {
                                                            color: "tomato"
                                                        }
                                                    }}
                                                />}
                                                // label={data?.lable}
                                                />
                                                <Rating name="read-only" value={data?.value ? Number(data?.value) : 0} precision={0.5} readOnly />
                                            </div>
                                        )}
                                    </RadioGroup>

                                </div>
                            </div>
                            <div>
                                <button onClick={resetFilteration} className="bg-black py-2 px-4 text-white">Reset Filters</button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/4 w-full'>
                        <div className="">
                            <h1 className=" pb-5 text-left text-gray-600 font-bold">Showing 31 products</h1>
                            <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-8">
                                {filteredProducts?.map((product) =>
                                    <ProductCard product={product} key={product._id} />
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Shop