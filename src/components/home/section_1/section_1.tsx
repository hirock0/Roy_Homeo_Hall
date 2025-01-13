
import Category_card from "@/components/category_card/category_card"
import Discount_card from "@/components/discount_card/discount_card"
import { Tiro_Bangla } from "next/font/google"
const tiro_bangla = Tiro_Bangla({
    weight: ["400", "400"],
    subsets: ['latin']
})


const CategoryCard = [
    {
        id: 0,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/HVtxfL3/card-1.webp"
    },
    {
        id: 1,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/LPnccrw/card-2.webp"
    },
    {
        id: 2,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/nrdvbKG/card-3.webp"
    },
    {
        id: 3,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/2dPcbmr/card-3-4.webp"
    },
    {
        id: 4,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/gjJP7zd/card-3-5.webp"
    }
]
const DiscountCards = [
    {
        id: 0,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/DMTFmpZ/card-4.webp"
    },
    {
        id: 1,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/xY85QVY/card-5.webp"
    },
    {
        id: 2,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/BT15GNR/card-4-1.webp"
    },
    {
        id: 3,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/Z1zPjgY/card-4-2.webp"
    },
    {
        id: 4,
        title: "Health Care",
        descriptions: "Care comes to you",
        img: "https://i.ibb.co.com/pWp8668/card-4-3.webp"
    }
]


const Section_1 = () => {
    return (
        <div className=" mt-5">

            <div className=" grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                {
                    CategoryCard?.map((item, index) => (
                        <Category_card key={index} item={item} />
                    ))
                }
            </div>
            {/* ------------------- */}
            <h1 className=" my-10 text-5xl text-center font-semibold">Secially For Your</h1>
            <div className=" grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 gap-5">
                {
                    DiscountCards?.map((item, index) => (
                        <Discount_card key={index} item={item} />
                    ))
                }
            </div>
            {/* medicine_buy_instraction_start */}
            <div className={`${tiro_bangla.className} md:flex py-10 md:gap-3 bg-teal-100/40 my-5 p-5  `}>
                <div className=" w-1/2 max-md:w-full">
                    <h1 className=" text-5xl max-sm:text-3xl">
                        আরোগ্য থেকে অর্ডার কিভাবে করবেন?
                    </h1>
                    <ul className=" list-disc pl-5 mt-4 text-2xl max-sm:text-xl">
                        <li>
                            প্রেস্ক্রিপশনের ছবি আপলোড করুন অথবা ঔষধ সার্চ করে কিনুন।
                        </li>
                        <li>
                            আমাদের  A Grade Pharmacist আপনাকে ফোন করে অর্ডার কনফার্ম করবেন।
                        </li>
                        <li>
                            ১৮-৪৮ ঘন্টার মধ্য আপনার ডেলিভারি বুঝে নিন।
                        </li>

                    </ul>
                </div>
                <div className=" max-md:mt-5 md:w-1/2">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yPjJk331hUQ?si=TYF7w-m0W8FOvMRx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className=" max-md:h-[500px] max-sm:h-[300px]">
                    </iframe>
                </div>
            </div>
            {/* medicine_buy_instraction_end */}
        </div>
    )
}

export default Section_1
