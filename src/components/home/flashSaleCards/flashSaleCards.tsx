"use client"


import ProductCard from "@/components/productCard/productCard"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

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
const FlashSaleCards = () => {
    return (
        <div className=" my-10">
            <div className=" sm:bg-slate-100 sm:py-5  flex justify-center ">
                <div className="w-[98%] max-sm:w-[90%]">
                    <Swiper

                        slidesPerView={1}
                        spaceBetween={20}
                        pagination
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
                        modules={[Pagination]}
                    >


                        {
                            products?.map((product, index) => (
                                <SwiperSlide key={index}>

                                    <ProductCard product={product} flag={"flashSale"} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default FlashSaleCards
