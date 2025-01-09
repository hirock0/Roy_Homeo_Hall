"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const images = [
    {
        id: 0,
        img: "https://i.ibb.co.com/K9ndL9M/medi-2.webp"
    },
    {
        id: 1,
        img: "https://i.ibb.co.com/SrLGTKV/medi-3.webp"
    },
    {
        id: 2,
        img: "https://i.ibb.co.com/yfWxcZw/medi-4.webp"
    },
    {
        id: 3,
        img: "https://i.ibb.co.com/CHY9Z6j/mwdicine-1.webp"
    }




]

const Banner = () => {
    return (
        <div className="">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay:4000
                }}
                modules={[Pagination, Navigation, Autoplay]}
            >
                {
                    images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className=" " >
                                <Image src={image?.img} alt="banner" width={5000} height={5000} priority className="" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Banner
