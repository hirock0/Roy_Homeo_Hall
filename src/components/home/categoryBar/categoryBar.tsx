"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Links = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const CategoryBar = () => {
  return (
    <div className=" bg-white shadow-lg border h-12  flex items-center justify-center">
      <div className="w-screen px-5">
        <Swiper
          slidesPerView={5}
          breakpoints={{
            640: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
            768:{
                slidesPerView: 12,
                spaceBetween: 30,
            },
            991:{
                slidesPerView: 14,
                spaceBetween: 30,
            }
          }}
          modules={[Pagination, Navigation]}
        >
          {Links?.map((link, index) => (
            <SwiperSlide key={index}>
              <Link href={"/"}>Home</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryBar;
