import Image from "next/image"
import React from "react"
interface Props {
    img: string,
    mediName: string
}

type Products = {
    product: Props,
    flag:string
    
}


const ProductCard: React.FC<Products> = ({ product,flag}) => {
    return (
        <div className={`w-64 max-sm:w-full
          ${flag === "allMedi" && " bg-zinc-100"}
           ${flag === "flashSale" && "bg-pink-50 "}
         
         rounded-lg shadow-lg p-4 flex flex-col justify-between`}>
        {/* Discount Badge */}
        <div className=" bg-red-500 w-fit text-white text-sm px-2 py-1 rounded-lg shadow">
          <span className="font-bold">60% OFF</span>
        </div>
  
        {/* Product Image */}
        <div className="flex justify-center mb-4">
          <Image
            src={product?.img} // Replace with the actual image URL
            alt="Lotus Professional 6 Sessions"
            width={500}
            height={500}
            className="h-40 object-contain"
          />
        </div>
  
        {/* Delivery Info */}
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-300 rounded-full text-black mr-2">
            🕒
          </span>
          <span>12-24 Hours</span>
        </div>
  
        {/* Product Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          Lotus Professional 6 Sessions...
        </h3>
  
        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 line-through text-sm">৳9600</p>
            <p className="text-lg font-bold text-green-600">৳3836.80</p>
          </div>
          <button className="bg-teal-500 text-white py-1 px-4 rounded-lg shadow hover:bg-teal-600">
            ADD
          </button>
        </div>
      </div>
    )
}

export default ProductCard
