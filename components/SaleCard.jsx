import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const SaleCard = ({ img, title, price }) => {
  return (
    <div className="relative w-[95vw] md:w-[368px] min-h-[180px] bg-white grid grid-cols-2 shadow-custom-shadow overflow-hidden">
      <div className="z-10 col-span-1">
        <div className="absolute bottom-[-100px] left-[-20px] ">
          <Image
            src={img}
            alt="/"
            width="245px"
            height="327px"
            quality={100}
            className="object-contain"
          />
        </div>
      </div>

      <div className="z-50 col-span-1 px-3 py-[27px]">
        <h3 className="font-black text-[32px] leading-[37px] pb-2 text-text inline-block">
          {title}
        </h3>
        <span className="block pb-6 font-montserrat text-text/50">
          R$ {price}
        </span>
        <button className="flex items-center gap-[26px] text-yellow font-montserrat cursor-pointer">
          <span>Comprar</span> <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default SaleCard
