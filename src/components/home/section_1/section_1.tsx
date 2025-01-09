
import Category_card from "@/components/category_card/category_card"
import Discount_card from "@/components/discount_card/discount_card"

// const card = [
// 
// 
// 
// https://i.ibb.co.com/DMTFmpZ/card-4.webp
// https://i.ibb.co.com/xY85QVY/card-5.webp
// https://i.ibb.co.com/pJ9V351/card-6.webp




// 
// 
// https://i.ibb.co.com/BT15GNR/card-4-1.webp
// https://i.ibb.co.com/Z1zPjgY/card-4-2.webp
// https://i.ibb.co.com/pWp8668/card-4-3.webp

// ]
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
        </div>
    )
}

export default Section_1
