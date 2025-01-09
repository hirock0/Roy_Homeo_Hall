import Image from "next/image"
import React from "react"

interface Item {
    title: string,
    descriptions: string,
    img: string
}
interface Props {
    item: Item
}

const Category_card: React.FC<Props> = ({ item }) => {
    return (
        <div className=" flex bg-gradient-to-tl from-teal-600  gap-2 rounded-lg shadow-md justify-between px-5 h-40">
            <div className=" flex items-center">
                <div className="">
                    <h1 className=" text-xl font-semibold">{item?.title}</h1>
                    <p>{item?.descriptions}</p>
                </div>
            </div>
            <div className=" flex items-center">
                <Image src={item?.img} alt={item?.title} width={500} height={500} className=" w-16" />
            </div>
        </div>
    )
}

export default Category_card
