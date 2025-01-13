"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardArrowRight } from "react-icons/md";

const Links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Medicine",
    link: "/"
  },
  {
    title: "Healthcare",
    link: "/"
  },
  {
    title: "Beauty",
    link: "/"
  },
  {
    title: "Sexual Welness",
    link: "/"
  },
  {
    title: "Lab Test",
    link: "/"
  },
  {
    title: "Baby & Mom Care",
    link: "/"
  },
  {
    title: "Herbal",
    link: "/"
  },
  {
    title: "Home Care",
    link: "/"
  },
  {
    title: "Supplement",
    link: "/"
  },
  {
    title: "Food & Nutrition",
    link: "/"
  },
  {
    title: "Pet Care",
    link: "/"
  },
  {
    title: "Veteniary",
    link: "/"
  },
  {
    title: "Blogs",
    link: "/"
  },
  {
    title: "Upload Prescription",
    link: "/"
  },
  {
    title: "Careers",
    link: "/"
  },
];
const CategoryBar = () => {
  return (
    <div className=" relative  h-12  flex items-center justify-center">
      <div className="w-full px-5 text-nowrap">
        <Swiper
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-next-btn",
            prevEl: ".custom-prev-btn",
          }}



          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 8,
              spaceBetween: 30,
            }
          }}
          modules={[Pagination, Navigation]}
        >
          {Links?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item?.link}>{item?.title}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="custom-prev-btn absolute left-0 z-30   ">
        <MdKeyboardArrowRight size={25} className=" rotate-180" />
      </button>
      <button className="custom-next-btn absolute right-0 z-30 ">
        <MdKeyboardArrowRight size={25} />
      </button>

    </div>
  );
};

export default CategoryBar;
