"use client"

import ProductCard from "@/components/productCard/productCard"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

const products = [
    {
        img: "https://res.cloudinary.com/dusp1j4e0/image/upload/v1725442494/medicines/mduhhiqw1ij88ublfgyf.png",
        mediName: "Nux Vomica 200"
    },
    {
        img: "https://res.cloudinary.com/dusp1j4e0/image/upload/v1725442494/medicines/mduhhiqw1ij88ublfgyf.png",
        mediName: "Nux Vomica 200"
    },
    {
        img: "https://res.cloudinary.com/dusp1j4e0/image/upload/v1725442494/medicines/mduhhiqw1ij88ublfgyf.png",
        mediName: "Nux Vomica 200"
    },
    {
        img: "https://res.cloudinary.com/dusp1j4e0/image/upload/v1725442494/medicines/mduhhiqw1ij88ublfgyf.png",
        mediName: "Nux Vomica 200"
    },
    {
        img: "https://res.cloudinary.com/dusp1j4e0/image/upload/v1725442494/medicines/mduhhiqw1ij88ublfgyf.png",
        mediName: "Nux Vomica 200"
    }
]
const AllMedicines = () => {
    return (
        <div className=" mb-10">
            <div className="">
                <div className=" flex items-center justify-between">
                <h1 className=" text-3xl font-semibold">Best Selling Products</h1>
                <button className=" font-semibold">See More</button>
                </div>
                <div className=" mt-5">
                    <div className="">
                        <Swiper
                        
                        
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            type: 'fraction',
                          }}
                          navigation={true}
                        breakpoints={
                            {
                                600: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },

                                1360: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }
                        }
                        modules={[Pagination,Navigation]}
                        >
                            {
                                products?.map((product, index) => (
                                    <SwiperSlide key={index} >
                                        <ProductCard product={product} flag={"allMedi"} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllMedicines
